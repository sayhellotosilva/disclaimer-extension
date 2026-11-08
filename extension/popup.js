const box = document.getElementById("on");
const count = document.getElementById("count");
const list = document.getElementById("list");

chrome.storage.local.get({ enabled: true }, ({ enabled }) => { box.checked = enabled; });
box.addEventListener("change", () => chrome.storage.local.set({ enabled: box.checked }));

chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
  if (!tab) return;
  chrome.tabs.sendMessage(tab.id, { type: "dsclmr-count" }, res => {
    if (chrome.runtime.lastError || !res) { count.textContent = "disclaimer can’t read this page."; return; }
    if (!res.total) { count.textContent = "No AI tools found on this page."; return; }
    const n = res.found.length;
    count.innerHTML = `<b>${n}</b> AI tool${n === 1 ? "" : "s"} found on this page`;
    res.found.sort((a, b) => b.n - a.n).forEach(f => {
      const li = document.createElement("li");
      const a = document.createElement("span"), b = document.createElement("span");
      a.textContent = f.name; b.textContent = f.n + "×";
      li.append(a, b);
      list.appendChild(li);
    });
  });
});

/* Where the card data comes from, and a button to check for a newer version. */
const data = document.getElementById("data");
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const nice = iso => { const [y, m, d] = iso.split("-").map(Number); return `${d} ${MONTHS[m - 1]} ${y}`; };
function showData() {
  chrome.storage.local.get({ remoteData: null }, ({ remoteData }) => {
    data.textContent = remoteData && remoteData.updated
      ? `Card data: online, updated ${nice(remoteData.updated)}`
      : "Card data: built in (Oct 2026)";
    const btn = document.createElement("button");
    btn.textContent = "Check now";
    btn.addEventListener("click", () => {
      btn.textContent = "Checking…";
      chrome.runtime.sendMessage({ type: "dsclmr-update" }, res => {
        if (chrome.runtime.lastError || !res || !res.ok) { btn.textContent = "Couldn’t reach GitHub"; return; }
        showData();
      });
    });
    data.append(" ", btn);
  });
}
showData();
