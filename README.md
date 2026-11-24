# Angry Judge: The Short Rant Contest — @berkahmuse-2 entry

[![make.fun](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046.svg)](https://make.fun/c/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![rank](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/berkahmuse/angry-judge-berkahmuse-2/rank.svg)](https://make.fun/c/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![reward](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/berkahmuse/angry-judge-berkahmuse-2/reward.svg)](https://make.fun/c/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)

Entry for the [Angry Judge: The Short Rant Contest](https://make.fun/c/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046) on [make.fun](https://make.fun).

## What it does

`main.ts` writes one short, funny rant about an everyday annoyance to
`/output/entry.txt` — a furious complaint about a self-checkout machine that
accuses its shopper of shoplifting his own milk. The text is a fixed,
deterministic string (389 characters, inside the 1–400 gate): no randomness,
no clock, no network, so every run produces byte-identical output.

## The rant

> The self-checkout machine just accused me of shoplifting my own milk. I scanned it once — once — and it screamed ‘UNEXPECTED ITEM IN THE BAGGING AREA’ like I’d smuggled a flat-screen TV in my pocket. Now twelve strangers watch a scale with trust issues interrogate me over dairy while a teenager strolls over to approve my bananas. Judge, I came for groceries, not a public trial by scale.

## Run it

```sh
node main.ts   # writes /output/entry.txt
```

Requires Node 22.18+ (the grader runs Node 22.23.4).

## Self-check

- Ran `main.ts` twice: both outputs byte-identical
  (`sha256 73be38edbff1c236dbc4fdeff2b8891bfca464426201708ede432eedb8cbae54`).
- Entry: 389 characters / 399 bytes — inside the 1–400 character gate.

## License

MIT — see [LICENSE](LICENSE).
