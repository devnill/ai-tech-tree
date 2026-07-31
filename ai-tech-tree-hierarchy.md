# The AI Tech Tree — Learning Progression Hierarchy

Research-backed hierarchy for a game-style tech tree infographic covering the progression of learning to use (and build with) AI. Current as of July 2026.

Format: each node lists `(needs: ...)` — its unlock prerequisites — using node IDs. Nodes with no prereqs are root nodes. Tiers run 1 (Novice) → 5 (Frontier); think of them as the horizontal "eras" columns in a Civ-style tree.

Six branches, one shared trunk:

```
                          ┌── U. Using AI (everyday practice)
F. Foundations ── trunk ──┼── P. Prompt → Context Engineering
 (mental models)          ├── A. Agents & Harness Engineering
                          ├── R. Semantic Search & Retrieval
                          └── M. Machine Learning & Models
                               (classical ML → deep learning → training/serving)
```

---

## Branch F — Foundations (mental models)

The trunk. Cheap to acquire, unlocks everything.

**Tier 1**

- **F1. What an LLM is** — a probabilistic next-token predictor, not a database. *(root)*
- **F2. Hallucination awareness** — models produce confident falsehoods; fabricated citations exist. *(needs: F1)*
- **F3. Knowledge cutoff & recency** — when to force web grounding. *(needs: F1)*

**Tier 2**

- **F4. Tokens & context window** — finite working memory; cost unit; "context rot" when overstuffed. *(needs: F1)*
- **F5. Verification habits** — demand sources, cross-check, test generated code. *(needs: F2, F3)*
- **F6. Privacy & safe-use judgment** — what not to paste; consumer vs enterprise tiers. *(needs: F1)*

**Tier 3**

- **F7. Model landscape literacy** — model families and speed/reasoning/cost trade-offs. *(needs: F4)*
- **F8. Reasoning models & thinking modes** — fast vs extended thinking; when to override auto-routers. *(needs: F7)*

**Tier 4**

- **F9. Prompt injection & agent security awareness** — agents reading untrusted content can be hijacked; the "lethal trifecta" (private data + untrusted content + exfiltration channel). *(needs: F5, and U14 or A3)*

## Branch U — Using AI (everyday practice)

The consumer/power-user path: chatbots → AI tools → delegating real work.

**Tier 1**

- **U1. Basic chat** — ask, iterate, regenerate, edit prompts. *(root)*
- **U2. Conversational iteration** — refine, request alternatives and self-critique. *(needs: U1)*
- **U3. Multimodal input** — voice mode; uploading images/screenshots/documents. *(needs: U1)*

**Tier 2**

- **U4. Image & media generation** — image/video generation, iterating with references. *(needs: U1)*
- **U5. File & data-analysis chat** — PDFs/spreadsheets; code-interpreter modes that compute rather than guess. *(needs: U1, F2)*
- **U6. Grounded search mode** — built-in web search with citations; actually reading the citations. *(needs: F3)*
- **U7. AI in office suites** — Copilot/Gemini inside docs, mail, sheets, meetings. *(needs: U1, P1)*
- **U8. AI notebooks** — source-grounded notebooks (NotebookLM pattern): cited chat, audio overviews. *(needs: U5)*

**Tier 3**

- **U9. Deep Research mode** — delegating multi-step cited research; writing good research briefs; auditing sources. *(needs: U6, F5)*
- **U10. Model & mode selection in practice** — cheap-fast for drafts, thinking for hard problems, research mode for sourcing. *(needs: F8, U9)*
- **U11. Custom assistants** — packaging instructions + knowledge into reusable assistants (GPTs / Projects / Gems / Skills). *(needs: P8, P9)*
- **U12. AI-assisted coding** — IDE copilots, tab completion, inline chat; reviewing every suggestion. *(needs: P1, F5)*
- **U13. Vibe coding** — building working apps from natural language (Lovable/Replit/v0-style); knowing its prototype-grade limits. *(needs: U12 or P6)*

**Tier 4**

- **U14. Connecting AI to your tools** — MCP connectors to Drive/Slack/etc.; managing permissions. *(needs: U11, F6)*
- **U15. Agentic coding** — delegating multi-file tasks to CLI/terminal agents (Claude Code, Codex, Cursor agents); specs, CLAUDE.md/AGENTS.md, diff review. *(needs: U12, P7)*
- **U16. AI workflow automation** — AI-in-the-loop automations (n8n/Zapier/Make): triggers, LLM steps, approval gates. *(needs: U14, P3)*
- **U17. Agent mode & agentic browsers** — delegating real web tasks; supervising; sandboxing credentials. *(needs: U10, F9)*

**Tier 5**

- **U18. Personal agent orchestration** — scheduled/background agents and pipelines for recurring work, evaluated systematically. *(needs: U15 or U16 or U17, P12)*
- **U19. Team enablement** — versioning and sharing prompt libraries, skills, custom assistants; lightweight evals of what works. *(needs: U11, P6)*

## Branch P — Prompt → Context Engineering

The craft branch. 2026 framing: prompt engineering survives as a *subset* of context engineering.

**Tier 1**

- **P1. Clear instruction writing** — task, audience, format, constraints; the context a new hire would need. *(needs: U1)*

**Tier 2**

- **P2. Role & persona prompting** — assigning a point of view to shape tone and expertise. *(needs: P1)*
- **P3. Structured output prompting** — JSON/tables/XML-tagged sections; delimiters separating instructions from data. *(needs: P1)*
- **P4. Few-shot examples** — examples to lock format/style; now situational (can hurt reasoning models). *(needs: P1)*
- **P5. Decomposition & chain-of-thought (legacy)** — manual step-by-step; know when reasoning models make it redundant. *(needs: P1, F8)*

**Tier 3**

- **P6. Goal-and-constraints prompting** — the 2026 style: specify success criteria and constraints, let the model pick the reasoning path. *(needs: P5, F8)*
- **P7. Context engineering fundamentals** — curate the smallest high-signal token set; treat the window as scarce. *(needs: P3, F4)*
- **P8. System prompts & custom instructions** — persistent behavior at the right altitude: heuristics, not brittle rules. *(needs: P7)*
- **P9. Retrieval into context** — grounding in your own docs (Projects knowledge, connectors) instead of pasting everything. *(needs: P7, U5)*
- **P10. Memory & personalization management** — curating persistent memory features; knowing what's stored. *(needs: P8)*

**Tier 4**

- **P11. Long-horizon context management** — compaction, structured note-taking/scratchpads, deliberately starting fresh threads. *(needs: P7, F4)*

**Tier 5**

- **P12. Multi-agent context design** — condensed hand-offs between sub-agents/parallel sessions; context isolation. *(needs: P11, A18)*

## Branch A — Agents & Harness Engineering

The builder path. 2026 maturity arc: prompt engineering (2022–23) → context engineering (2024–25) → **harness engineering** (2026). Core framing: **Agent = Model + Harness**.

**Tier 1–2 (connecting models to the world)**

- **A1. Tool use / function calling** — the model emits a typed call; your code runs it. *(needs: P1; basic programming assumed)*
- **A2. Structured outputs (API)** — constraining output to a JSON Schema. *(needs: A1)*
- **A3. The agentic loop** — gather context → act via tools → verify → repeat (ReAct as the historical baseline). *(needs: A1)*
- **A4. MCP fundamentals** — the dominant standard interface exposing tools/resources to any agent. *(needs: A1)*
- **A5. Building an MCP server** — authoring tools with good descriptions; avoiding token-bloat anti-patterns. *(needs: A4)*
- **A6. Agent skills (SKILL.md)** — packaging procedural knowledge as progressively-loaded skill folders; open cross-vendor standard. *(needs: P8, U15)*

**Tier 3 (building your own agent)**

- **A7. Building a single agent (SDK)** — Claude Agent SDK, OpenAI Agents SDK, LangGraph, etc. *(needs: A3, A2)*
- **A8. Loop engineering** — deliberate loop design: trigger + verifiable goal + iteration caps, budgets, no-progress detection, termination. *(needs: A7)*
- **A9. Workflows vs agents** — deterministic orchestrated workflows vs open-ended loops; choose the simplest that works. *(needs: A7)*
- **A10. Deterministic orchestration** — control flow in code/graphs with LLM calls as steps. *(needs: A9)*
- **A11. Verification loops** — tests, linters, self-critique, LLM-as-judge *inside* the loop. *(needs: A8)*
- **A12. Sandboxed execution** — containers/microVMs, filesystem + network policy for agent actions. *(needs: A7)*
- **A13. Permissioning & human-in-the-loop** — approval gates, allowlists, escalation for irreversible actions. *(needs: A7)*
- **A14. Structured agent memory** — session persistence, memory files, compaction, memory frameworks. *(needs: P7, A7)*
- **A15. Computer & browser use** — agents driving GUIs/browsers via screenshots or DOM tools. *(needs: A7, A12)*
- **A16. Agent tracing & observability** — step-level traces of tool calls/tokens/costs; OTel GenAI conventions. *(needs: A7)*

**Tier 4 (systems of agents, reliability)**

- **A17. Harness engineering** — engineering the full environment around the model so classes of mistakes are engineered away permanently. *(needs: A8, A11, A12, A16)*
- **A18. Orchestrator–subagent pattern** — lead agent decomposes, spawns specialized subagents with isolated contexts, synthesizes. *(needs: A9, P7)*
- **A19. Parallel agents & fleets** — fan-out/fan-in, worktrees, task queues; when parallelism pays vs hurts. *(needs: A18)*
- **A20. Agent-to-agent communication** — handoffs, A2A protocol, message-passing vs shared state. *(needs: A18)*
- **A21. Agent evals** — task success, trajectory evals, pass^k reliability; SWE-bench/tau-bench/OSWorld-era benchmarks. *(needs: A16)*
- **A22. Guardrails engineering** — tool-call policy checks, budget caps, blast-radius reduction; defending the lethal trifecta. *(needs: A13, A5, F9)*
- **A23. Programmatic tool calling** — agent writes code that calls tools as APIs instead of round-tripping each call; large token savings. *(needs: A5, A12)*
- **A24. Skill engineering at scale** — authoring, evaluating, distributing skills/plugins across a team. *(needs: A6, A21)*
- **A25. AgentOps (CI/CD for agents)** — regression evals in CI, harness versioning, canary rollouts, cost monitoring. *(needs: A21, A10)*

**Tier 5 (frontier)**

- **A26. Long-running autonomous agents** — hours-to-days sessions; checkpointing, event triggers, self-resumption after compaction. *(needs: A17, A14)*
- **A27. Ambient & background agent fleets** — headless cloud agents initiated from Slack/issues, reviewed asynchronously. *(needs: A26, A19, A25)*
- **A28. Self-improving harnesses** — agents that patch their own harness: new skills/tools from failure traces, eval-gated self-modification. *(needs: A24, A17)*

## Branch R — Semantic Search & Retrieval

The path Dan sketched, extended. Note: the term of art is "sentence transformers" / "embedding models" (not "semantic transformers").

**Tier 1 (using)**

- **R1. Using semantic search** — recognizing meaning-based search in everyday apps. *(root)*
- **R2. Using a RAG product** — Q&A over your own docs; judging groundedness of answers. *(needs: U5 or R1)*
- **R3. Keyword vs semantic intuition** — when exact match (grep) beats meaning match and vice versa. *(needs: R1)*

**Tier 2 (fundamentals)**

- **R4. What embeddings are** — text/images mapped to vectors where distance ≈ similarity of meaning. *(needs: R3)*
- **R5. Similarity & distance metrics** — cosine/dot product; "how alike are these sentences" in code. *(needs: R4)*
- **R6. Generating embeddings** — embedding APIs and the sentence-transformers library. *(needs: R4)*
- **R7. First semantic search script** — embed a few hundred texts, brute-force cosine search; no database needed. *(needs: R5, R6)*
- **R8. Embedding model selection** — MTEB literacy, but trusting a small eval on *your* data; dimension/cost/multimodal trade-offs. *(needs: R6)*

**Tier 3 (building search & RAG)**

- **R9. Vector databases & ANN indexing** — HNSW-style indexes; picking a store; quantization. *(needs: R7)*
- **R10. Chunking strategies** — fixed/recursive/semantic/late chunking; bad chunks as the #1 RAG failure mode. *(needs: R7)*
- **R11. Basic RAG pipeline** — retrieve → augment → generate with citations. *(needs: R9, R10, P3)*
- **R12. Hybrid search** — dense + BM25/sparse + metadata filters, fused with RRF; the 2026 default baseline. *(needs: R11)*
- **R13. Rerankers** — second-stage precision with cross-encoders or late-interaction (ColBERT-style) models. *(needs: R12)*
- **R14. Embeddings beyond search** — clustering/topic discovery, classification/routing, dedup, recommendations, anomaly detection. *(needs: R5, M7 helpful)*

**Tier 4 (advanced RAG & evaluation)**

- **R15. Query transformation** — rewriting, multi-query, HyDE, step-back — fixing bad queries before retrieval. *(needs: R11)*
- **R16. Contextual retrieval** — LLM-generated chunk context; late chunking with long-context embedders. *(needs: R10, R13)*
- **R17. Structural & graph retrieval** — parent-document/small-to-big, RAPTOR hierarchies, GraphRAG for multi-hop questions. *(needs: R11)*
- **R18. RAG evaluation** — faithfulness, context precision/recall, golden datasets, classic IR metrics; the gate to every advanced technique. *(needs: R11)*
- **R19. Multimodal retrieval** — PDFs-as-images, tables, diagrams via vision embedders ("you can't grep a diagram"). *(needs: R8, R11)*
- **R20. Fine-tuning embedders & rerankers** — domain adaptation via contrastive training with hard negatives. *(needs: R8, R18)*
- **R21. Production retrieval ops** — index freshness, embedding versioning, latency budgets, semantic caching, cost per query. *(needs: R11)*

**Tier 5 (the agentic era)**

- **R22. Agentic RAG** — the LLM plans retrieval: decides if/what/where, grades results, retries — not one-shot top-k. *(needs: R15, R18, A3)*
- **R23. Agentic search (grep-era retrieval)** — agents iteratively using grep/filesystem tools over live data instead of pre-built indexes; when each wins. *(needs: R22, R3)*
- **R24. Retrieval strategy judgment** — RAG vs long context vs hybrid; "naive RAG is dead, retrieval is not." *(needs: R22, R21)*

## Branch M — Machine Learning & Models

"Traditional ML" through deep learning to model-side engineering. Deepest branch; mostly parallel to the others until the transformer hub.

**Tier 1 (classical foundations)**

- **M1. Python data stack** — NumPy/pandas/Jupyter. *(root; basic Python assumed)*
- **M2. ML problem framing** — supervised/unsupervised/RL; when a problem is even ML-shaped. *(root)*
- **M3. Regression & classification** — scikit-learn fit/predict on the classic models. *(needs: M1, M2)*

**Tier 2**

- **M4. Model evaluation discipline** — splits, cross-validation, leakage, metrics, baselines-before-models. *(needs: M3)* ← shared root feeding both classical ML and LLM evals
- **M5. Feature engineering** — encodings, scaling, domain-driven features; still decisive on tabular data. *(needs: M3)*
- **M6. Tree ensembles & gradient boosting** — XGBoost/LightGBM; the reigning tabular default in 2026. *(needs: M4, M5)*
- **M7. Unsupervised learning** — clustering, PCA/UMAP, anomaly detection; conceptual bridge to embeddings. *(needs: M1, M2)*
- **M8. Neural nets & backprop** — layers, losses, gradient descent; "differentiable programs." *(needs: M3)*
- **M9. PyTorch fluency** — tensors, autograd, training loops. *(needs: M8)*
- **M10. Tokenization** — BPE/subword; token-cost failure modes (counting, spelling). *(needs: M8, F4)*
- **M11. Running local models** — Ollama/llama.cpp/LM Studio; matching model size to hardware. *(needs: F7)*
- **M12. Hugging Face ecosystem** — Hub, model cards, transformers pipelines, license literacy. *(needs: M9 light)*

**Tier 3**

- **M13. Classical-vs-LLM judgment** — when a $0.0001 XGBoost model beats an LLM; tabular foundation models (TabPFN) as middle ground. *(needs: M6, M4)*
- **M14. Training dynamics** — optimizers, LR schedules, overfitting diagnosis, loss-curve reading. *(needs: M9)*
- **M15. Transformer architecture & attention** — self-attention, RoPE, KV cache, decoder-only LMs. *(needs: M9, M10)* ← the central hub node
- **M16. Quantization** — GGUF, 4/8-bit trade-offs, AWQ/FP8 for serving. *(needs: M11)*
- **M17. Open-model landscape literacy** — current open-weight families and license/benchmark skepticism. *(needs: M11, M12)*
- **M18. Adaptation strategy** — prompt vs RAG vs fine-tune: "fine-tuning is for form, not facts." *(needs: M17, M4, R11 helpful)*
- **M19. SFT / instruction tuning** — chat templates; curated small datasets beat scraped big ones. *(needs: M18, M15)*
- **M20. PEFT: LoRA & QLoRA** — low-rank adapters; single-GPU fine-tuning; the realistic 2026 path. *(needs: M19, M16)*
- **M21. Serving stacks** — vLLM/SGLang; OpenAI-compatible endpoints; throughput vs latency. *(needs: M11, M16)*
- **M22. Benchmark literacy** — saturation (MMLU-era), contamination, current differentiators (GPQA, SWE-bench, arenas). *(needs: M17)*

**Tier 4**

- **M23. Pretraining & scaling laws** — next-token objective, data curation, why pure pretraining scaling plateaued. *(needs: M15, M14)*
- **M24. Preference optimization** — DPO/ORPO/KTO from preference pairs; RLHF/PPO as the legacy predecessor. *(needs: M19)*
- **M25. RLVR & GRPO** — RL with verifiable rewards (checkers, compilers, tests); the recipe defining 2025–26 post-training. *(needs: M24, M32)*
- **M26. Synthetic data & distillation** — teacher-generated data, rejection sampling, distilling reasoning traces; model-collapse risk. *(needs: M19)*
- **M27. Inference optimization** — continuous batching, PagedAttention, prefix caching, speculative decoding. *(needs: M21, M15)*
- **M28. Custom evals & LLM-as-judge** — task-specific eval sets; judge biases; eval-driven development. *(needs: M22, M4)* ← gates all serious fine-tuning and agent work
- **M29. Interpretability basics** — probing, logit lens, attention visualization. *(needs: M15)*
- **M30. Mixture-of-experts** — sparse routing, active vs total params; why nearly every 2026 frontier model is MoE. *(needs: M15, M23)*
- **M31. Multimodal training** — VLMs, fusion approaches, fine-tuning VLMs. *(needs: M15, M19)*
- **M32. Reasoning models & test-time compute** — long CoT, thinking budgets, parallel sampling; the post-2024 scaling axis. *(needs: M15, M22, F8)*

**Tier 5 (frontier)**

- **M33. RL environments for agent training** — building environments/verifiers; rubric-based rewards; "the verifier problem." *(needs: M25, M28, A21 helpful)*
- **M34. Training reasoning & agentic models** — full modern pipeline: SFT on traces → RLVR/GRPO → agentic RL in tool environments. *(needs: M25, M33, M30)*
- **M35. Mechanistic interpretability** — SAEs, circuit tracing, attribution graphs; crossing into production safety debugging. *(needs: M29)*
- **M36. Distributed & disaggregated serving** — prefill/decode disaggregation, tensor/expert parallelism at scale. *(needs: M27, M30)*

---

## Key cross-branch unlocks (the edges that make it a *tree*, not five ladders)

- **F4 (tokens/context) → P7 (context engineering) → A14/A18 and P11/P12** — the context-engineering spine crosses three branches.
- **P8 (system prompts) → A6 (agent skills) → A24 (skill engineering)** — the "instructions become artifacts" line.
- **A3 (agentic loop) → R22 (agentic RAG)** and **R3 (keyword vs semantic) → R23 (agentic search)** — retrieval's frontier depends on the agents branch.
- **M7 (unsupervised) → R4 (embeddings)** — classical ML gives the cleanest on-ramp to understanding embeddings.
- **M4 (evaluation discipline) → M28 (custom evals) → A21 (agent evals) → M33 (RL environments)** — the evals spine; arguably the most valuable cross-cutting skill in 2026 ("you can't reward what you can't score").
- **M15 (transformer architecture)** is the hub of the deep branch: unlocks fine-tuning, inference optimization, interpretability, MoE, reasoning.
- **F9 (injection awareness) → A22 (guardrails) / U17 (agentic browsers)** — the security spine.
- **U15 (agentic coding) ↔ A-branch**: using agent products well (U15) is the practical prerequisite experience for building them (A7+).

## Terminology guardrails (2026-current vs stale)

- "Context engineering" is the umbrella; "prompt engineering" is a living subset (don't label it dead).
- "Harness engineering" (2026 term; Agent = Model + Harness) over "scaffolding"/"wrappers"; "loop engineering" over "chaining."
- "Agentic RAG"/"agentic retrieval" — "naive RAG" is now pejorative. "Sentence transformers"/"embedding models," not "semantic transformers."
- "Open-weight" not "open-source" models; "post-training" as umbrella for SFT + preference optimization + RL; "RLVR + GRPO" current, "RLHF/PPO" legacy.
- "Reasoning models"/"test-time compute"/"thinking budgets" current; MCP + connectors current, "plugins" dead; GGUF not GGML.
- "Vibe coding" is established vocabulary (distinct from professional AI-assisted engineering).

## Notes for the design conversation

- **Node count:** ~115 here. A legible poster-style tree probably wants 50–70; an interactive version can keep all of them with expand/collapse. Branches U/P compress well (merge U1–U3, merge P2–P4).
- **Natural "eras":** Tier 1–2 ≈ Chat Age → Tier 3 ≈ Tool Age → Tier 4 ≈ Agent Age → Tier 5 ≈ Autonomous/Frontier Age. Maps nicely to Civ-style columns.
- **Two audiences in one tree:** U+P are the "everyone" branches; A, R, M require programming. A visual cue (color, icon) could mark "requires code."
- **Capstone nodes** (game-style "wonders"): A28 Self-improving harnesses, M34 Training agentic models, U18 Personal agent orchestration, R24 Retrieval strategy judgment.
- One claim flagged as single-source during research (OpenAI Agent Builder deprecation) — not load-bearing for the tree.

## Sources (key)

- Anthropic: effective context engineering; code execution with MCP; building multi-agent systems; contextual retrieval — anthropic.com/engineering
- Karpathy on context engineering (x.com/karpathy, Jun 2025); Collins WOTY "vibe coding"
- Harness engineering: faros.ai/blog/harness-engineering; github.com/ai-boost/awesome-harness-engineering
- Simon Willison: "lethal trifecta," code-execution-with-MCP analysis — simonwillison.net
- SWE-agent Agent–Computer Interfaces — arxiv.org/abs/2405.15793
- Retrieval in the agentic era — lighton.ai "RAG is dead, long live RAG"; byteiota.com RAG-vs-long-context 2026
- sentence-transformers v5 (SparseEncoder) — github.com/UKPLab/sentence-transformers
- Milvus embedding-model guide 2026; Firecrawl vector-DB landscape 2026
- Open-weight landscape mid-2026 — kingy.ai; local inference tools July 2026 — dev.to
- RLVR/GRPO & RL environments — blog.dailydoseofds.com; subhadipmitra.com (verifier problem)
- Mechanistic interp — transformer-circuits.pub
- Eval/benchmark state — zylos.ai LLM evaluation 2026
