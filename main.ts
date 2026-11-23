import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke: deadpan, specific, true about the office, with the
// turn at the end — the calendar itself betrays the focus time it was
// asked to protect. Written to /output/entry.txt, no trailing newline so
// the entry stays as small as possible (tie-break favours fewer bytes).
const LINE =
  "I blocked focus time on my calendar, and my calendar immediately invited six people to discuss it.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LINE, "utf8");
