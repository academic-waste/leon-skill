import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const evidencePath = path.join(scriptDir, "..", "references", "evidence.jsonl");
const query = process.argv.slice(2).join(" ").trim();

if (!query) {
  console.error("Usage: node leon/scripts/search_evidence.mjs <query>");
  process.exit(1);
}

function readJsonl(file) {
  return fs
    .readFileSync(file, "utf8")
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line));
}

function tokenize(value) {
  const compact = value.toLowerCase();
  const asciiTokens = compact.match(/[a-z0-9_-]+/g) || [];
  const cjkTokens = Array.from(new Set(compact.match(/[\u3400-\u9fff]{1,4}/g) || []));
  return [...new Set([...asciiTokens, ...cjkTokens])].filter((token) => token.length > 0);
}

const queryTokens = tokenize(query);
const rows = readJsonl(evidencePath)
  .map((row) => {
    const haystack = [
      row.evidence_id,
      row.title,
      row.theme.join(" "),
      row.claim,
      row.supporting_excerpt_clean,
      row.notes,
    ]
      .join(" ")
      .toLowerCase();
    const score = queryTokens.reduce((sum, token) => sum + (haystack.includes(token) ? 1 : 0), 0);
    return { row, score };
  })
  .filter(({ score }) => score > 0)
  .sort((a, b) => b.score - a.score || a.row.evidence_id.localeCompare(b.row.evidence_id))
  .slice(0, 12)
  .map(({ row, score }) => ({ ...row, score }));

for (const row of rows) {
  console.log(`${row.evidence_id} score=${row.score} confidence=${row.confidence}`);
  console.log(`themes: ${row.theme.join(", ")}`);
  console.log(`claim: ${row.claim}`);
  console.log(`source: ${row.title}`);
  console.log(`time: ${row.start}-${row.end}`);
  console.log(`url: ${row.url}`);
  console.log("");
}
