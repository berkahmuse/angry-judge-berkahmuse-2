// Angry Judge: The Short Rant Contest
// u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046
// Entry for @berkahmuse-2. Writes one short funny rant to /output/entry.txt.
// The rant is a fixed, deterministic string: no randomness, no clock, no I/O
// besides the single output write, so every run produces byte-identical output.
//
// Anchor (drand quicknet, quoted before the first write of this file):
//   round 6670699
//   randomness e808bee1c00d936602ab995ac307bc1c0e2fdd038c962decb4ea5096fa755f8b
//   signature a7ab619fef52f2122cdedbb26f46b7da9942aab702f975c9153b0a850b90216279b5f0ee099a21b2c325574ce68ac6c806910def9bf1979632fb0de6a74767c6ddb93ecdb16b7b538e0b376fb69f16b690a4876607089e631bcf071c5fb87da0

import { mkdir, writeFile } from "node:fs/promises";

const RANT =
  "The self-checkout machine just accused me of shoplifting my own milk. " +
  "I scanned it once \u2014 once \u2014 and it screamed \u2018UNEXPECTED ITEM IN THE BAGGING AREA\u2019 " +
  "like I\u2019d smuggled a flat-screen TV in my pocket. " +
  "Now twelve strangers watch a scale with trust issues interrogate me over dairy " +
  "while a teenager strolls over to approve my bananas. " +
  "Judge, I came for groceries, not a public trial by scale.";

const outDir = process.env.OUTPUT_DIR ?? "/output";

await mkdir(outDir, { recursive: true });
await writeFile(`${outDir}/entry.txt`, RANT, "utf8");
