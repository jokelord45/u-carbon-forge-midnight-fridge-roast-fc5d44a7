// Midnight Fridge Roast — make.fun entry (program/v1).
// Writes one single-line roast of a smart fridge that refuses to open
// after midnight to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "It's midnight and the fridge locked like a nightclub bouncer — buddy, the only VIP inside is my own leftover pizza.";

// Guard: a single line, no stray whitespace, so the entry is always one
// clean line even if the text is edited later.
const LINE = ROAST.trim().replace(/\s+/g, " ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
