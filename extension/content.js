/* disclaimer — content script.
   Reads the text of the page (locally, nothing is sent anywhere), marks the names
   of AI tools with an orange asterisk, and opens the X-ray card on hover or tap. */
(() => {
  if (window.__disclaimerLoaded) return;
  window.__disclaimerLoaded = true;

  const REPO = "https://github.com/sayhellotosilva/disclaimer-extension";
  const MARK = "dsclmr-mark";
  const SKIP = new Set(["SCRIPT","STYLE","NOSCRIPT","TEXTAREA","INPUT","SELECT","OPTION","CODE","PRE","SVG","CANVAS","IFRAME","TITLE","BUTTON"]);
  const MAX_MARKS = 300;

  /* ---------- card data ----------
     Starts with the copy built into the extension (data.js). If a newer copy
     was downloaded from GitHub (see background.js), that one is used instead. */
  let cards = DATA, aliases = ALIASES, aiCtx = AI_CONTEXT, dataDate = "Oct 2026";
  const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  /* Downloaded text is cleaned before use: only simple formatting and https links
     are kept, so the online file can never run code on the pages you visit. */
  const OK_TAGS = new Set(["A","B","I","EM","STRONG","SPAN","P","DIV","BR","SMALL","SUP","SUB","DL","DT","DD","UL","OL","LI","TABLE","THEAD","TBODY","TR","TH","TD","BUTTON"]);
  const OK_ATTRS = new Set(["class","href","target","rel","style","data-jump","aria-label","title"]);
  function clean(html, ids) {
    const doc = new DOMParser().parseFromString(`<body>${html}</body>`, "text/html");
    for (const el of [...doc.body.querySelectorAll("*")]) {
      if (!OK_TAGS.has(el.tagName)) { el.replaceWith(...el.childNodes); continue; }
      for (const at of [...el.attributes]) {
        const n = at.name.toLowerCase(), v = at.value;
        const bad = !OK_ATTRS.has(n)
          || (n === "href" && !/^https:\/\//i.test(v))
          || (n === "style" && /url\(|expression|@import/i.test(v))
          || (n === "data-jump" && !ids.has(v));
        if (bad) el.removeAttribute(at.name);
      }
      if (el.tagName === "A") { el.setAttribute("target", "_blank"); el.setAttribute("rel", "noopener"); }
    }
    return doc.body.innerHTML;
  }
  const cleanAll = (v, ids) => typeof v === "string" ? clean(v, ids)
    : Array.isArray(v) ? v.map(x => cleanAll(x, ids))
    : v && typeof v === "object" ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, cleanAll(x, ids)]))
    : v;

  function useRemote(d) {
    try {
      if (!d || d.schema !== 1 || !d.cards || !Array.isArray(d.aliases)) return;
      const ids = new Set(Object.keys(d.cards));
      const c = {};
      for (const id of ids) c[id] = cleanAll(d.cards[id], ids);
      // links in "groups" (wrapper cards) must point to a real card
      for (const id of ids) if (Array.isArray(c[id].groups))
        c[id].groups.forEach(g => Array.isArray(g[1]) && g[1].forEach(co => { if (co[2] && !ids.has(co[2])) co.length = 2; }));
      const a = d.aliases.filter(x => ids.has(x.id)).map(x => ({ id: x.id, re: new RegExp(x.re, x.flags), ambiguous: !!x.ambiguous }));
      const ctx = new RegExp(d.aiContext.re, d.aiContext.flags);
      if (!a.length) return;
      const [y, m] = String(d.updated).split("-").map(Number);
      cards = c; aliases = a; aiCtx = ctx;
      if (y && m) dataDate = `${MONTHS[m - 1]} ${y}`;
    } catch (e) { /* keep the built-in data */ }
  }
  const found = {};             // card id -> count
  let total = 0, enabled = true, observer = null;

  /* ---------- styles that live in the page: the asterisk + fonts ---------- */
  const f = n => chrome.runtime.getURL("fonts/" + n);
  const pageStyle = document.createElement("style");
  pageStyle.id = "dsclmr-page-style";
  pageStyle.textContent = `
    @font-face{font-family:"disclaimer JetBrains Mono";font-weight:400;src:url(${f("jetbrains-mono-latin-400-normal.woff2")}) format("woff2")}
    @font-face{font-family:"disclaimer JetBrains Mono";font-weight:500;src:url(${f("jetbrains-mono-latin-500-normal.woff2")}) format("woff2")}
    @font-face{font-family:"disclaimer JetBrains Mono";font-weight:700;src:url(${f("jetbrains-mono-latin-700-normal.woff2")}) format("woff2")}
    @font-face{font-family:"disclaimer Instrument Sans";font-weight:400;src:url(${f("instrument-sans-latin-400-normal.woff2")}) format("woff2")}
    @font-face{font-family:"disclaimer Instrument Sans";font-weight:500;src:url(${f("instrument-sans-latin-500-normal.woff2")}) format("woff2")}
    @font-face{font-family:"disclaimer Instrument Sans";font-weight:600;src:url(${f("instrument-sans-latin-600-normal.woff2")}) format("woff2")}
    .${MARK}{cursor:help!important;border-radius:3px;transition:background-color .15s}
    .${MARK}::after{content:"*";font:700 .9em/0 "disclaimer JetBrains Mono",monospace;color:#e8803a;position:relative;top:-.35em;margin-left:1px}
    .${MARK}:hover,.${MARK}.is-open{background-color:rgba(232,128,58,.18)!important}
    .dsclmr-off .${MARK}::after{content:none}
    .dsclmr-off .${MARK}{cursor:inherit!important;background:none!important}`;
  (document.head || document.documentElement).appendChild(pageStyle);

  /* ---------- the card, sealed in a shadow root ---------- */
  const host = document.createElement("div");
  host.id = "dsclmr-host";
  host.style.cssText = "all:initial;position:fixed;top:0;left:0;width:0;height:0;z-index:2147483647";
  const root = host.attachShadow({ mode: "open" });
  const link = document.createElement("link");
  link.rel = "stylesheet"; link.href = chrome.runtime.getURL("card.css");
  const card = document.createElement("div");
  card.className = "card"; card.hidden = true;
  card.setAttribute("role", "dialog"); card.setAttribute("aria-labelledby", "c-name");
  root.append(link, card);
  document.documentElement.appendChild(host);

  /* ---------- rendering (same as the prototype) ---------- */
  const DISC = '<span class="wm" aria-label="disclaimer">discl<span class="wm-ai">a<span class="wm-i">ı</span></span>mer</span>';
  const acc = (secs, openFirst = true) => secs.map(([label, rows], i) =>
    `<details class="c-sec acc"${openFirst && i === 0 ? " open" : ""}><summary class="c-label">${label}<span class="chev" aria-hidden="true"></span></summary><dl>${rows.join("")}</dl></details>`).join("");
  const head = (d, top = "") => `<div class="c-head">${top}<div class="c-top"><div><p class="c-name" id="c-name">${d.name}</p><div class="c-meta">${d.meta}</div></div>
    <button class="c-close" aria-label="Close">×</button></div></div>`;
  const foot = () => `<div class="c-foot"><span>Card data updated ${dataDate}</span><a href="${REPO}/issues" target="_blank" rel="noopener">Report an error ↗</a></div>`;

  let current = null;
  function render(id, term, from) {
    const d = cards[id];
    if (!d) return;
    const back = from ? `<button class="c-back" data-back="${from}">← Back to ${cards[from] ? cards[from].name : "previous card"}</button>` : "";
    if (d.type === "wrapper") {
      const groups = d.groups.map(([region, cos]) => `
        <div class="w-group"><div class="w-region">${region}</div><div class="w-cos">
        ${cos.map(([c, models, l]) => l
          ? `<button class="w-co link" data-jump="${l}"><b>${c}</b><span>${models}</span><i>Open card →</i></button>`
          : `<div class="w-co"><b>${c}</b><span>${models}</span></div>`).join("")}
        </div></div>`).join("");
      card.innerHTML = head(d, back + '<div class="c-match">Built on other companies’ AI</div>') + `
        <details class="c-sec acc" open><summary class="c-label">Your prompt goes to<span class="chev" aria-hidden="true"></span></summary>
          <p style="margin:0 0 10px">${d.intro}</p>${groups}<p class="note-in">${d.note}</p></details>
        ${d.extra ? acc(d.extra, false) : ""}
        <div class="xray"><p class="c-label">${DISC}</p>${d.why}</div>${foot()}`;
    } else {
      const match = term && term !== d.name ? `<div class="c-match">“${term}” is a ${d.name} model, made by ${d.maker}</div>` : "";
      card.innerHTML = head(d, back + match) + acc(d.secs) + `<div class="xray"><p class="c-label">${DISC}</p>${d.xray}</div>${foot()}`;
    }
    card.querySelector(".c-close").addEventListener("click", close);
    card.querySelectorAll("[data-jump]").forEach(b => b.addEventListener("click", e => {
      e.stopPropagation(); render(b.dataset.jump, null, id); card.scrollTop = 0; }));
    const bb = card.querySelector("[data-back]");
    if (bb) bb.addEventListener("click", e => { e.stopPropagation(); render(bb.dataset.back); card.scrollTop = 0; });
  }

  function place(el) {
    if (window.matchMedia("(max-width:560px)").matches) return;
    card.style.maxHeight = "";
    const r = el.getBoundingClientRect(), w = card.offsetWidth, h = card.offsetHeight;
    const vw = document.documentElement.clientWidth, vh = window.innerHeight;
    const left = Math.max(16, Math.min(r.left, vw - w - 16));
    const below = vh - r.bottom - 24, above = r.top - 24;
    let top;
    if (h <= below) top = r.bottom + 8;                 // fits under the word
    else if (h <= above) top = r.top - h - 8;           // fits over the word
    else if (below >= above) { card.style.maxHeight = below + "px"; top = r.bottom + 8; }   // shrink, never cover the word
    else { card.style.maxHeight = above + "px"; top = r.top - above - 8; }
    card.style.left = left + "px"; card.style.top = top + "px";
  }
  function open(el) {
    if (!enabled) return;
    if (current === el) return;
    if (current) current.classList.remove("is-open");
    current = el; el.classList.add("is-open");
    render(el.dataset.dsclmr, el.dataset.dsclmrTerm);
    card.hidden = false; card.scrollTop = 0; place(el);
  }
  function close() {
    if (current) current.classList.remove("is-open");
    current = null; card.hidden = true;
  }

  let hideTimer;
  const canHover = window.matchMedia("(hover:hover)").matches;
  document.addEventListener("mouseover", e => {
    const m = e.target.closest && e.target.closest("." + MARK);
    if (m && canHover) { clearTimeout(hideTimer); open(m); }
  });
  document.addEventListener("mouseout", e => {
    const m = e.target.closest && e.target.closest("." + MARK);
    if (m && canHover) hideTimer = setTimeout(close, 300);
  });
  document.addEventListener("click", e => {
    const m = e.target.closest && e.target.closest("." + MARK);
    if (m && enabled && !canHover) { e.preventDefault(); current === m ? close() : open(m); return; }
    if (!e.composedPath().includes(host)) close();
  }, true);
  card.addEventListener("mouseenter", () => clearTimeout(hideTimer));
  card.addEventListener("mouseleave", () => { if (canHover) hideTimer = setTimeout(close, 300); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
  window.addEventListener("scroll", () => { if (current && canHover) close(); }, { passive: true });
  window.addEventListener("resize", () => current && place(current));

  /* ---------- finding the names ---------- */
  let aiContext = null;
  const pageIsAboutAI = () => {
    if (aiContext === null) aiContext = aiCtx.test(document.title + " " + (document.body ? document.body.innerText.slice(0, 200000) : ""));
    return aiContext;
  };

  function skippable(node) {
    for (let el = node.parentElement; el; el = el.parentElement) {
      if (SKIP.has(el.tagName) || el.isContentEditable || el.classList.contains(MARK) || el.id === "dsclmr-host") return true;
      if (el.getAttribute && el.getAttribute("aria-hidden") === "true") return true;
    }
    return false;
  }

  function firstMatch(text) {
    let best = null;
    for (const a of aliases) {
      if (a.ambiguous && !pageIsAboutAI()) continue;
      const m = a.re.exec(text);
      if (m && (!best || m.index < best.index || (m.index === best.index && m[0].length > best.text.length)))
        best = { index: m.index, text: m[0], id: a.id };
    }
    return best;
  }

  function markTextNode(node) {
    let text = node.nodeValue;
    if (!text || text.length < 3) return;
    let m = firstMatch(text);
    if (!m) return;
    const frag = document.createDocumentFragment();
    let rest = node;
    while (m && total < MAX_MARKS) {
      const after = rest.splitText(m.index);
      const tail = after.splitText(m.text.length);
      const span = document.createElement("span");
      span.className = MARK;
      span.dataset.dsclmr = m.id;
      span.dataset.dsclmrTerm = m.text;
      span.textContent = after.nodeValue;
      after.replaceWith(span);
      found[m.id] = (found[m.id] || 0) + 1; total++;
      rest = tail;
      m = firstMatch(rest.nodeValue);
    }
  }

  function scan(rootNode) {
    if (!enabled || total >= MAX_MARKS || !rootNode) return;
    const walker = document.createTreeWalker(rootNode, NodeFilter.SHOW_TEXT, {
      acceptNode: n => (n.nodeValue.trim().length > 2 && !skippable(n)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(markTextNode);
  }

  /* Pages like LinkedIn keep loading posts as you scroll: watch for new text. */
  let pending = new Set(), timer = null;
  function watch() {
    observer = new MutationObserver(muts => {
      for (const mu of muts) for (const n of mu.addedNodes) {
        if (n.nodeType === 1 && n.id !== "dsclmr-host" && !n.classList.contains(MARK)) pending.add(n);
        else if (n.nodeType === 3 && n.parentElement && !n.parentElement.classList.contains(MARK)) pending.add(n.parentElement);
      }
      clearTimeout(timer);
      timer = setTimeout(() => { const list = [...pending]; pending.clear(); list.forEach(scan); }, 400);
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  /* ---------- on / off and the toolbar counter ---------- */
  function setEnabled(on) {
    enabled = on;
    document.documentElement.classList.toggle("dsclmr-off", !on);
    if (!on) close(); else scan(document.body);
  }
  chrome.runtime.onMessage.addListener((msg, _s, reply) => {
    if (msg && msg.type === "dsclmr-count") {
      reply({ total, found: Object.entries(found).map(([id, n]) => ({ id, name: cards[id] ? cards[id].name : id, n })) });
    }
  });
  chrome.storage.onChanged.addListener(ch => { if (ch.enabled) setEnabled(ch.enabled.newValue !== false); });

  chrome.storage.onChanged.addListener(ch => { if (ch.remoteData) useRemote(ch.remoteData.newValue); });

  chrome.storage.local.get({ enabled: true, remoteData: null }, ({ enabled: on, remoteData }) => {
    useRemote(remoteData);
    enabled = on;
    document.documentElement.classList.toggle("dsclmr-off", !on);
    if (document.body) { scan(document.body); watch(); }
    else document.addEventListener("DOMContentLoaded", () => { scan(document.body); watch(); });
  });
})();
