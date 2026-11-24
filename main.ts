// One Sentence for a Traveler from 1800
// Writes a single sentence (at most 200 characters) explaining the modern
// internet to someone arriving from the year 1800, using only things a
// person from 1800 already knows: roads, post offices, libraries, letters,
// books. No word coined after the traveler's time.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Picture every post office and library on earth joined by one road, so a letter you write reaches a stranger in a blink and any book ever written opens in your hands.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
