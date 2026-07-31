# The AI Tech Tree

A game-style tech tree mapping the learning progression for AI, from basic
chat use through agent engineering, retrieval, and ML/model training.
Skills unlock the skills beneath them, grouped into six branches:
Foundations, Using AI, Prompt & Context, Agents & Harnesses, Search &
Retrieval, and ML & Models.

Each of the 128 skills carries 1–5 mastery ranks (depth varies with the
topic), a codex entry, level-up advice, and curated links. An adaptive
quiz ("the aptitude trial") surveys where you stand — checkpoint logic
over the prerequisite DAG means claiming a skill vouches for everything
that unlocked it, so a full mapping rarely needs more than ~15–30
questions — and a character-sheet results page turns the answers into
branch proficiency bars, prose, and goal-based recommendations. Progress
lives in `localStorage`.

## Contents

- `index.html` — the interactive tree. Hover a node to trace its lineage;
  click it for the codex drawer (description, rank checkboxes, resources).
  Once you've taken the quiz, earned skills stay lit and show rank pips;
  everything else recedes. Deep-linkable: `index.html#s=R11`.
- `quiz.html` — the adaptive trial: goal question, checkpoint questions
  (max 30 per sitting), progress bar, skip-to-results, and
  `?more=1` to keep refining afterwards. `?retake=1` (or the retake
  buttons) resets progression.
- `results.html` — the character sheet: title, branch bars, assembled
  prose read, and next-unlock suggestions weighted by your stated goal.
- `skills-data.js` — all node data: the tree structure (`RAW`), per-skill
  depth/copy/links (`DETAIL`), goal profiles (`GOALS`), and the derived
  graph. Edit content here.
- `app.js` — shared state: localStorage schema, DAG inference, stats.
- `tt.css` — shared parchment chrome.
- `ai-tech-tree-poster.pdf` — a static, full-size poster rendering of the
  tree (portrait, ~29 x 33 in), without the web-only interactivity.
- `poster/` — the source (`poster.html`) and render script
  (`generate-pdf.js`) used to produce the poster PDF.
- `ai-tech-tree-hierarchy.md` — the research notes and source hierarchy
  the tree was built from.
- `tech-tree-codex-ladder.html`, `tech-tree-style-mockups.html` — earlier
  layout/style exploration, kept for reference.

Everything is plain HTML/CSS/JS with no build step; serve the folder (or
open the files) and it works. Note `localStorage` needs the pages to share
an origin, so prefer `python3 -m http.server` over `file://` if progress
doesn't stick.

## License

Licensed under [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)
(Attribution, NonCommercial) — see [LICENSE](LICENSE). You're free to
share and adapt this for non-commercial purposes, with credit.
