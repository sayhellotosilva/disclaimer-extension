// Builds docs/data/cards.json from extension/data.js.
// The extension downloads that JSON file, so a correction pushed to GitHub
// reaches everyone without reinstalling. Run: node scripts/build-data.mjs
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const code = readFileSync(join(root, "extension/data.js"), "utf8");
const mod = { exports: {} };
new Function("module", code + "\n;module.exports = { DATA, ALIASES, AI_CONTEXT };")(mod);
const { DATA, ALIASES, AI_CONTEXT } = mod.exports;

// Basic checks, so a typo never reaches anyone's browser.
const ids = Object.keys(DATA);
if (!ids.length) throw new Error("No cards found in data.js");
for (const a of ALIASES) if (!DATA[a.id]) throw new Error(`Alias points to a missing card: ${a.id}`);

const out = {
  schema: 1,
  updated: new Date().toISOString().slice(0, 10),
  cards: DATA,
  aliases: ALIASES.map(a => ({ id: a.id, re: a.re.source, flags: a.re.flags, ambiguous: !!a.ambiguous })),
  aiContext: { re: AI_CONTEXT.source, flags: AI_CONTEXT.flags }
};
const file = join(root, "docs/data/cards.json");
mkdirSync(dirname(file), { recursive: true });
writeFileSync(file, JSON.stringify(out, null, 1) + "\n");
console.log(`Wrote ${ids.length} cards and ${ALIASES.length} names to docs/data/cards.json (updated ${out.updated})`);
