/* disclaimer — keeps the card data up to date.
   Downloads the latest cards from the project's GitHub Pages site when Chrome
   starts and every 6 hours. If anything goes wrong, the extension keeps using
   the last good copy, or the copy built into the extension.
   Only this one public file is requested: nothing about you or the pages you
   read is sent. */
const DATA_URL = "https://sayhellotosilva.github.io/disclaimer-extension/data/cards.json";
const SCHEMA = 1;
const EVERY_MINUTES = 6 * 60;

function valid(d) {
  if (!d || d.schema !== SCHEMA || typeof d.updated !== "string") return false;
  if (!d.cards || typeof d.cards !== "object" || !Object.keys(d.cards).length) return false;
  if (!Array.isArray(d.aliases) || !d.aliases.length || !d.aiContext) return false;
  try {
    for (const a of d.aliases) {
      if (!d.cards[a.id]) return false;
      new RegExp(a.re, a.flags);
    }
    new RegExp(d.aiContext.re, d.aiContext.flags);
  } catch { return false; }
  return true;
}

async function update() {
  try {
    const res = await fetch(DATA_URL, { cache: "no-cache" });
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    if (!valid(data)) throw new Error("unexpected data");
    await chrome.storage.local.set({ remoteData: data, dataChecked: Date.now(), dataError: null });
    return { ok: true, updated: data.updated };
  } catch (e) {
    await chrome.storage.local.set({ dataChecked: Date.now(), dataError: String(e.message || e) });
    return { ok: false, error: String(e.message || e) };
  }
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create("update-data", { periodInMinutes: EVERY_MINUTES });
  update();
});
chrome.runtime.onStartup.addListener(update);
chrome.alarms.onAlarm.addListener(a => { if (a.name === "update-data") update(); });
chrome.runtime.onMessage.addListener((msg, _s, reply) => {
  if (msg && msg.type === "dsclmr-update") { update().then(reply); return true; }
});
