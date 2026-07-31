// The AI Tech Tree — shared data (generated; node facts editable in RAW, per-skill depth in DETAIL)
const BRANCHES = [
  {k:'F', name:'Foundations',           c:'#BE123C'},
  {k:'U', name:'Using AI',              c:'#0369A1'},
  {k:'P', name:'Prompt & Context',      c:'#B45309'},
  {k:'A', name:'Agents & Harnesses',    c:'#4F46E5'},
  {k:'R', name:'Search & Retrieval',    c:'#0D9488'},
  {k:'M', name:'ML & Models',           c:'#9333EA'},
];
const MAXSLOT = {F:2, U:3, P:3, A:4, R:3, M:4};

// [id, name, icon, prereqs, description]
const RAW = {
F: [
 ['F1','What an LLM is','🎲',[],'A probabilistic next-token predictor — not a database or a search engine.'],
 ['F2','Hallucination awareness','👻',['F1'],'Models produce confident falsehoods; fabricated citations exist.'],
 ['F3','Knowledge cutoff & recency','📅',['F1'],'Models have a training cutoff — know when to force web grounding.'],
 ['F4','Tokens & context windows','🧠',['F1'],'Finite working memory and the cost unit of everything downstream.'],
 ['F5','Verification habits','✅',['F2','F3'],'Demand sources, cross-check, test generated code before trusting it.'],
 ['F6','Privacy & safe use','🔒',['F1'],'What not to paste; consumer vs enterprise data handling.'],
 ['F7','Model landscape literacy','🗺️',['F4'],'The major model families and their speed / depth / cost trade-offs.'],
 ['F8','Reasoning & thinking modes','💭',['F7'],'Fast vs extended thinking; when to override the auto-router.'],
 ['F9','Prompt injection awareness','🛡️',['F5','U14'],'Agents reading untrusted content can be hijacked — the "lethal trifecta."'],
],
U: [
 ['U1','Basic chat','💬',[],'Ask, iterate, regenerate, edit prompts.'],
 ['U2','Conversational iteration','🔄',['U1'],'Refine in dialogue; request alternatives and self-critique.'],
 ['U3','Multimodal input','🎤',['U1'],'Voice conversations; uploading images, screenshots, documents.'],
 ['U4','Image & media generation','🎨',['U1'],'Generating and iterating on images and video with references.'],
 ['U5','File & data analysis','📊',['U1','F2'],'PDFs and spreadsheets via modes that compute rather than guess.'],
 ['U6','Grounded search','🌐',['F3'],'Built-in web search with citations — and actually reading them.'],
 ['U7','AI in office suites','🗂️',['U1','P1'],'Assistants inside docs, mail, sheets, and meetings.'],
 ['U8','AI notebooks','📓',['U5'],'Source-grounded notebooks: cited chat, overviews, study guides.'],
 ['U9','Deep Research mode','🔬',['U6','F5'],'Delegating multi-step cited research; auditing the sources.'],
 ['U10','Model & mode selection','🎛️',['F8','U9'],'Cheap-fast for drafts, thinking for hard problems, research for sourcing.'],
 ['U11','Custom assistants','🧰',['P8','P9'],'Packaging instructions + knowledge into reusable assistants.'],
 ['U12','AI-assisted coding','⌨️',['P1','F5'],'IDE copilots and inline chat — reviewing every suggestion.'],
 ['U13','Vibe coding','🏄',['U12'],'Building working apps from natural language; prototype-grade limits.'],
 ['U14','Connecting AI to tools','🔌',['U11','F6'],'MCP connectors to your apps; managing permissions.'],
 ['U15','Agentic coding','🖥️',['U12','P7'],'Delegating multi-file work to terminal agents; specs and diff review.'],
 ['U16','Workflow automation','🔗',['U14','P3'],'AI-in-the-loop automations: triggers, LLM steps, approval gates.'],
 ['U17','Agentic browsers','🕹️',['U10','F9'],'Delegating real web tasks; supervising, sandboxing credentials.'],
 ['U18','Personal agent orchestration','🛰️',['U15','P12'],'Scheduled and background agents running your recurring work.'],
 ['U19','Team enablement','🤝',['U11','P6'],'Sharing prompt libraries, skills, and assistants across a team.'],
],
P: [
 ['P1','Clear instructions','✍️',['U1'],'Task, audience, format, constraints — the context a new hire would need.'],
 ['P2','Role & persona','🎭',['P1'],'Assigning a point of view to shape tone and expertise.'],
 ['P3','Structured output','🧾',['P1'],'JSON, tables, tagged sections; delimiters separating instructions from data.'],
 ['P4','Few-shot examples','🎯',['P1'],'Examples to lock format and style — situational on reasoning models.'],
 ['P5','Decomposition & CoT','🪜',['P1'],'Manual step-by-step — and knowing when reasoning models make it redundant.'],
 ['P6','Goals & constraints','🏁',['P5','F8'],'Specify success criteria; let the model choose the reasoning path.'],
 ['P7','Context engineering','⚗️',['P3','F4'],'Curate the smallest high-signal token set; the window is scarce.'],
 ['P8','System prompts','📜',['P7'],'Persistent behavior at the right altitude — heuristics, not brittle rules.'],
 ['P9','Retrieval into context','📚',['P7','U5'],'Grounding in your own docs instead of pasting everything.'],
 ['P10','Memory management','💾',['P8'],'Curating persistent memory; knowing what is stored.'],
 ['P11','Long-horizon context','🧹',['P7'],'Compaction, scratchpads, deliberately starting fresh threads.'],
 ['P12','Multi-agent context design','🕸️',['P11','A18'],'Condensed hand-offs and context isolation across sub-agents.'],
],
A: [
 ['A1','Tool use','🔧',['P1'],'The model emits a typed call; your code runs it.'],
 ['A2','Structured outputs (API)','🧱',['A1'],'Constraining output to a JSON Schema.'],
 ['A3','The agentic loop','🔁',['A1'],'Gather context → act via tools → verify → repeat.'],
 ['A4','MCP fundamentals','🧩',['A1'],'The standard interface exposing tools and resources to any agent.'],
 ['A5','Building an MCP server','🛠️',['A4'],'Authoring tools with good descriptions; avoiding token bloat.'],
 ['A6','Agent skills','📁',['P8','U15'],'Procedural knowledge as progressively-loaded skill folders.'],
 ['A7','Building a single agent','🤖',['A3','A2'],'Implementing an agent with a current SDK or framework.'],
 ['A8','Loop engineering','➿',['A7'],'Verifiable goals, iteration caps, budgets, termination criteria.'],
 ['A9','Workflows vs agents','🔀',['A7'],'Deterministic pipelines vs open-ended loops — simplest that works.'],
 ['A10','Deterministic orchestration','📐',['A9'],'Control flow in code and graphs, LLM calls as steps.'],
 ['A11','Verification loops','🧪',['A8'],'Tests, linters, and judges inside the loop, not after it.'],
 ['A12','Sandboxed execution','📦',['A7'],'Containers and microVMs; filesystem and network policy.'],
 ['A13','Permissioning & HITL','✋',['A7'],'Approval gates, allowlists, escalation for irreversible actions.'],
 ['A14','Agent memory','🗃️',['P7','A7'],'Session persistence, memory files, cross-session recall.'],
 ['A15','Computer & browser use','🖱️',['A7','A12'],'Agents driving GUIs and browsers via screenshots or DOM.'],
 ['A16','Tracing & observability','📈',['A7'],'Step-level traces of tool calls, tokens, and cost.'],
 ['A17','Harness engineering','🏗️',['A8','A11','A12','A16'],'Engineering the environment around the model — Agent = Model + Harness.'],
 ['A18','Orchestrator & subagents','🎼',['A9','P7'],'A lead agent decomposes, spawns specialists, synthesizes.'],
 ['A19','Parallel agents & fleets','🐝',['A18'],'Fan-out/fan-in; knowing when parallelism pays vs hurts.'],
 ['A20','Agent-to-agent comms','📡',['A18'],'Handoffs and protocols; message-passing vs shared state.'],
 ['A21','Agent evals','🏅',['A16'],'Task success, trajectory evals, pass^k reliability.'],
 ['A22','Guardrails engineering','🚧',['A13','A5','F9'],'Policy checks, budget caps, blast-radius reduction.'],
 ['A23','Programmatic tool calling','🐍',['A5','A12'],'The agent writes code that calls tools as APIs — huge token savings.'],
 ['A24','Skill engineering at scale','🎓',['A6','A21'],'Authoring, evaluating, and distributing skills across teams.'],
 ['A25','AgentOps (CI/CD)','🚦',['A21','A10'],'Regression evals in CI, harness versioning, canary rollouts.'],
 ['A26','Long-running agents','⏳',['A17','A14'],'Hours-to-days sessions: checkpointing, triggers, self-resumption.'],
 ['A27','Ambient agent fleets','☁️',['A26','A19','A25'],'Headless cloud agents reviewed asynchronously by humans.'],
 ['A28','Self-improving harnesses','♻️',['A24','A17'],'Agents that patch their own harness from failure traces, gated by evals.'],
],
R: [
 ['R1','Using semantic search','🔍',[],'Meaning-based search in everyday apps — ideas, not just keywords.'],
 ['R2','Using a RAG product','📄',['R1'],'Q&A over your own documents; judging groundedness.'],
 ['R3','Keyword vs semantic','⚖️',['R1'],'When exact match (grep) beats meaning match, and vice versa.'],
 ['R4','What embeddings are','🌌',['R3'],'Text as vectors where distance ≈ similarity of meaning.'],
 ['R5','Similarity metrics','📐',['R4'],'Cosine and dot product — "how alike are these sentences," in code.'],
 ['R6','Generating embeddings','🔤',['R4'],'Embedding APIs and the sentence-transformers library.'],
 ['R7','First search script','📜',['R5','R6'],'Embed a few hundred texts, brute-force cosine search. No database.'],
 ['R8','Embedding model selection','🏆',['R6'],'MTEB literacy — but trust a small eval on your own data.'],
 ['R9','Vector databases','🗄️',['R7'],'ANN indexes for searching millions of vectors fast.'],
 ['R10','Chunking strategies','🪓',['R7'],'Splitting documents well — the #1 RAG failure mode.'],
 ['R11','Basic RAG pipeline','⚙️',['R9','R10','P3'],'Retrieve → augment → generate, with citations.'],
 ['R12','Hybrid search','🔗',['R11'],'Dense + BM25 + filters fused with RRF — the default baseline.'],
 ['R13','Rerankers','🥇',['R12'],'Second-stage precision with cross-encoders or late interaction.'],
 ['R14','Embeddings beyond search','🧿',['R5'],'Clustering, classification, dedup, recommendations, anomalies.'],
 ['R15','Query transformation','❓',['R11'],'Rewriting, multi-query, HyDE — fixing bad queries before retrieval.'],
 ['R16','Contextual retrieval','🧩',['R10','R13'],'LLM-generated chunk context; late chunking with long-context embedders.'],
 ['R17','Structural & graph retrieval','🗺️',['R11'],'Parent-document, RAPTOR hierarchies, GraphRAG for multi-hop.'],
 ['R18','RAG evaluation','📏',['R11'],'Faithfulness, precision/recall, golden datasets — the gate to everything advanced.'],
 ['R19','Multimodal retrieval','🖼️',['R8','R11'],'PDFs-as-images, tables, diagrams — "you can\'t grep a diagram."'],
 ['R20','Fine-tuning embedders','🎚️',['R8','R18'],'Domain adaptation via contrastive training with hard negatives.'],
 ['R21','Production retrieval ops','🏭',['R11'],'Index freshness, versioning, latency budgets, semantic caching.'],
 ['R22','Agentic RAG','🦾',['R15','R18','A3'],'The LLM plans retrieval: decides if/what/where, grades, retries.'],
 ['R23','Agentic search','🐚',['R22','R3'],'Agents grepping live data instead of pre-built indexes.'],
 ['R24','Retrieval strategy mastery','👑',['R22','R21'],'RAG vs long context vs hybrid — "naive RAG is dead, retrieval is not."'],
],
M: [
 ['M1','Python data stack','🐼',[],'NumPy, pandas, and notebooks for shaping data.'],
 ['M2','ML problem framing','🧮',[],'Supervised vs unsupervised vs RL — is this even ML-shaped?'],
 ['M3','Regression & classification','📉',['M1','M2'],'scikit-learn fit/predict on the classic models.'],
 ['M4','Evaluation discipline','🧪',['M3'],'Splits, cross-validation, leakage, baselines before models.'],
 ['M5','Feature engineering','🛠',['M3'],'Encodings, scaling, domain features — still decisive on tabular data.'],
 ['M6','Gradient boosting','🌲',['M4','M5'],'XGBoost/LightGBM — the reigning tabular default.'],
 ['M7','Unsupervised learning','🌀',['M1','M2'],'Clustering, PCA/UMAP, anomalies — the bridge to embeddings.'],
 ['M8','Neural nets & backprop','🕸',['M3'],'Layers, losses, gradient descent — differentiable programs.'],
 ['M9','PyTorch fluency','🔥',['M8'],'Tensors, autograd, training loops.'],
 ['M10','Tokenization','🔡',['M8','F4'],'BPE subwords; token-cost failure modes.'],
 ['M11','Running local models','💻',['F7'],'Ollama and llama.cpp; matching model size to hardware.'],
 ['M12','Hugging Face ecosystem','🤗',['M9'],'The Hub, model cards, pipelines, license literacy.'],
 ['M13','Classical vs LLM judgment','🥊',['M6','M4'],'When a $0.0001 XGBoost model beats an LLM.'],
 ['M14','Training dynamics','🌡️',['M9'],'Optimizers, schedules, overfitting diagnosis, loss curves.'],
 ['M15','Transformer architecture','✨',['M9','M10'],'Self-attention, RoPE, KV cache — the hub of the deep branch.'],
 ['M16','Quantization','🗜️',['M11'],'GGUF and 4/8-bit trade-offs; formats for GPU serving.'],
 ['M17','Open-model landscape','🌍',['M11','M12'],'Current open-weight families; benchmark skepticism.'],
 ['M18','Adaptation strategy','🧭',['M17','M4'],'Prompt vs RAG vs fine-tune: "fine-tuning is for form, not facts."'],
 ['M19','SFT & instruction tuning','📖',['M18','M15'],'Chat templates; small curated datasets beat big scraped ones.'],
 ['M20','LoRA & QLoRA','🪶',['M19','M16'],'Low-rank adapters — realistic single-GPU fine-tuning.'],
 ['M21','Serving stacks','🚀',['M11','M16'],'vLLM/SGLang; OpenAI-compatible endpoints; throughput vs latency.'],
 ['M22','Benchmark literacy','📊',['M17'],'Saturation, contamination, and the current differentiators.'],
 ['M23','Pretraining & scaling laws','⛰️',['M15','M14'],'Why pure pretraining scaling plateaued.'],
 ['M24','Preference optimization','👍',['M19'],'DPO-family alignment from preference pairs; RLHF as the legacy path.'],
 ['M25','RLVR & GRPO','🏋️',['M24','M32'],'RL with verifiable rewards — the recipe defining modern post-training.'],
 ['M26','Synthetic data & distillation','🧬',['M19'],'Teacher-generated data; distilling reasoning into small models.'],
 ['M27','Inference optimization','⚡',['M21','M15'],'Continuous batching, paged KV cache, speculative decoding.'],
 ['M28','Custom evals & LLM-judge','🧑‍⚖️',['M22','M4'],'Task-specific eval sets; judge biases; eval-driven development.'],
 ['M29','Interpretability basics','🔦',['M15'],'Probing, logit lens, attention visualization.'],
 ['M30','Mixture-of-experts','🎛',['M15','M23'],'Sparse routing — why nearly every frontier model is MoE.'],
 ['M31','Multimodal training','🖼',['M15','M19'],'Vision-language models and fusion approaches.'],
 ['M32','Reasoning & test-time compute','🤔',['M15','M22','F8'],'Long chains of thought, thinking budgets, parallel sampling.'],
 ['M33','RL environments','🏟️',['M25','M28'],'Environments and verifiers — you can\'t reward what you can\'t score.'],
 ['M34','Training agentic models','🏔️',['M25','M33','M30'],'SFT on traces → RLVR → agentic RL in tool environments.'],
 ['M35','Mechanistic interpretability','🔎',['M29'],'SAEs and circuit tracing, crossing into production debugging.'],
 ['M36','Distributed serving','🕸️',['M27','M30'],'Prefill/decode disaggregation and parallelism at scale.'],
]
};

// ---- per-skill detail: drawer copy, rank ladders (1-5, depth varies by topic), level-up advice, resources ----
const DETAIL = {
 "F1": {
  "long": "Everything an LLM does — the essays, the code, the confident nonsense — comes from one trick: predicting the next token, billions of times, from patterns absorbed during training. It has no database inside, no lookup table, no fact-checker; it reconstructs plausible text rather than retrieving true text. Internalize this and most of the model's odd behavior stops being mysterious.",
  "maxRank": 2,
  "ranks": [
   "Know it predicts tokens, not facts",
   "Can explain training, sampling, and emergent behavior"
  ],
  "levelUp": "Watch Karpathy's intro talk end to end, then play with temperature and watch the same prompt produce different answers. The goal is for 'fancy autocomplete' to stop sounding like an insult and start sounding like an explanation.",
  "resources": [
   {
    "t": "Karpathy: Intro to LLMs",
    "u": "https://www.youtube.com/watch?v=zjkBMFhNj_g"
   },
   {
    "t": "Attention Is All You Need",
    "u": "https://arxiv.org/abs/1706.03762"
   }
  ]
 },
 "F2": {
  "long": "Models generate the most plausible continuation, and sometimes the most plausible continuation is a fabricated court case with a realistic citation format. Hallucination rates have dropped considerably by 2026, but they are nonzero everywhere and worst in exactly the places that look most trustworthy: citations, statistics, niche technical details. Confidence of tone tells you nothing about truth.",
  "maxRank": 2,
  "ranks": [
   "Know models confidently make things up",
   "Predict where hallucinations cluster and act accordingly"
  ],
  "levelUp": "Ask a model for five papers on a niche topic you know well and check each one; the miss pattern is educational. Then read up on why hallucination is a training-incentive problem, not a bug someone forgot to fix.",
  "resources": [
   {
    "t": "Why language models hallucinate",
    "u": "https://openai.com/index/why-language-models-hallucinate/"
   },
   {
    "t": "Hallucination leaderboard",
    "u": "https://github.com/vectara/hallucination-leaderboard"
   }
  ]
 },
 "F3": {
  "long": "Every model's training data stops at some date, after which the world kept happening without it. Ask about anything recent — prices, releases, laws, yesterday's outage — and an ungrounded model will either admit ignorance or improvise. The fix is knowing the cutoff and forcing web grounding when recency matters.",
  "maxRank": 1,
  "ranks": [
   "Check the cutoff before trusting anything dated"
  ],
  "levelUp": "Learn the cutoff of your daily-driver model, then build the habit of asking 'could this have changed since then?' before accepting any answer. When it could have, turn search on explicitly rather than hoping.",
  "resources": [
   {
    "t": "Claude web search tool",
    "u": "https://docs.claude.com/en/docs/agents-and-tools/tool-use/web-search-tool"
   },
   {
    "t": "Gemini grounding with search",
    "u": "https://ai.google.dev/gemini-api/docs/grounding"
   }
  ]
 },
 "F4": {
  "long": "Tokens are the atoms of the whole enterprise: the unit of cost, the unit of speed, and the unit of the model's finite working memory. A context window is that memory — generous in 2026, but still finite, still degrading toward the middle of long inputs, and still billed per token. Nearly every downstream skill, from prompting to agent design, is secretly a token-budgeting problem.",
  "maxRank": 2,
  "ranks": [
   "Know tokens are the unit of cost and memory",
   "Budget context deliberately and predict cost and truncation"
  ],
  "levelUp": "Paste your own writing into a tokenizer and build intuition for what a token actually is. Then find your model's window size and work out what a full window costs in dollars — that number changes how you use the thing.",
  "resources": [
   {
    "t": "Context windows explained",
    "u": "https://docs.claude.com/en/docs/build-with-claude/context-windows"
   },
   {
    "t": "OpenAI tokenizer",
    "u": "https://platform.openai.com/tokenizer"
   },
   {
    "t": "Karpathy: build the tokenizer",
    "u": "https://www.youtube.com/watch?v=zduSFxRajkE"
   }
  ]
 },
 "F5": {
  "long": "The disciplined habit that separates people who get burned from people who don't: demand sources, click them, cross-check surprising claims, and run generated code before shipping it. LLM mistakes are dangerous precisely because they arrive fluent and formatted like correct answers. Verification effort should scale with stakes — a haiku needs none, a contract clause needs a lot.",
  "maxRank": 3,
  "ranks": [
   "Ask for sources on anything that matters",
   "Cross-check claims and test generated code routinely",
   "Match verification depth to the stakes, systematically"
  ],
  "levelUp": "Adopt one rule this week: no citation gets repeated until you've opened it, and no generated code ships until you've run it. Then read Willison on why code hallucinations are the least dangerous kind — the subtle bugs that run fine are worse.",
  "resources": [
   {
    "t": "Hallucinations in code",
    "u": "https://simonwillison.net/2025/Mar/2/hallucinations-in-code/"
   },
   {
    "t": "Reducing hallucinations guide",
    "u": "https://docs.claude.com/en/docs/test-and-evaluate/strengthen-guardrails/reduce-hallucinations"
   }
  ]
 },
 "F6": {
  "long": "The uncomfortable question before every paste: where does this text go, who can see it, and does it train anything? Consumer tiers and enterprise tiers handle data very differently, and the gap matters once customer records, credentials, or unreleased plans are involved. Knowing your organization's actual policy beats guessing at it.",
  "maxRank": 2,
  "ranks": [
   "Know what never to paste into a chat",
   "Choose the right tier and settings for sensitive work"
  ],
  "levelUp": "Read your provider's actual data-handling terms once — it takes twenty minutes and settles years of hallway debates. Then make a personal never-paste list: credentials, customer PII, anything under NDA.",
  "resources": [
   {
    "t": "Anthropic Privacy Center",
    "u": "https://privacy.anthropic.com/"
   },
   {
    "t": "OpenAI enterprise privacy",
    "u": "https://openai.com/enterprise-privacy/"
   }
  ]
 },
 "F7": {
  "long": "By mid-2026 the menu is stable in shape if not in names: a few frontier families (Claude, GPT, Gemini), strong open-weight challengers (Llama, DeepSeek, Qwen, Mistral), and within each family a ladder from fast-and-cheap to slow-and-brilliant. Model choice is a three-way trade between speed, depth, and cost, and the right answer changes with the task. Leaderboards help, but they measure benchmarks, not your workload.",
  "maxRank": 3,
  "ranks": [
   "Can name the major families and their trade-offs",
   "Pick the right model tier for each task",
   "Re-evaluate defaults as releases shift the landscape"
  ],
  "levelUp": "Run the same three tasks — one easy, one hard, one weird — across a frontier model, a fast model, and an open-weight model, and note where the extra cost bought nothing. Repeat quarterly; the answers move.",
  "resources": [
   {
    "t": "LMArena leaderboard",
    "u": "https://lmarena.ai/"
   },
   {
    "t": "Artificial Analysis model comparison",
    "u": "https://artificialanalysis.ai/models"
   }
  ]
 },
 "F8": {
  "long": "Reasoning models can spend extra tokens thinking before they answer — test-time compute traded for accuracy on hard problems, and wasted on easy ones. Most 2026 products auto-route between fast and extended thinking, and the router is good but not clairvoyant. Knowing when to force deep thinking (gnarly math, subtle code) and when to force fast mode (formatting, chitchat) is the skill.",
  "maxRank": 3,
  "ranks": [
   "Know reasoning models trade latency for depth",
   "Toggle thinking modes deliberately per task",
   "Tune thinking budgets and spot router failures"
  ],
  "levelUp": "Take one genuinely hard problem and run it with thinking off, on, and maxed — the quality difference (and the bill) makes the trade-off visceral. Then learn your platform's budget controls instead of leaving everything on auto.",
  "resources": [
   {
    "t": "Extended thinking docs",
    "u": "https://docs.claude.com/en/docs/build-with-claude/extended-thinking"
   },
   {
    "t": "OpenAI reasoning guide",
    "u": "https://platform.openai.com/docs/guides/reasoning"
   }
  ]
 },
 "F9": {
  "long": "An agent that reads untrusted content — a web page, an email, a PDF — can be hijacked by instructions hidden inside it, because models can't reliably tell data from commands. The lethal trifecta: private data access, exposure to untrusted content, and the ability to communicate externally; combine all three and an attacker can exfiltrate your data by simply writing to your agent. Still unsolved in 2026, which is why the mitigation is architecture, not vigilance.",
  "maxRank": 3,
  "ranks": [
   "Can name the lethal trifecta from memory",
   "Spot risky tool-plus-untrusted-content combinations early",
   "Design agent permissions that break the trifecta"
  ],
  "levelUp": "Read Willison's lethal trifecta post, then audit one agent you actually use: list its data access, its untrusted inputs, and its outbound channels. If all three boxes tick, remove one.",
  "resources": [
   {
    "t": "The lethal trifecta",
    "u": "https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/"
   },
   {
    "t": "Prompt injection series",
    "u": "https://simonwillison.net/series/prompt-injection/"
   },
   {
    "t": "OWASP LLM Top 10",
    "u": "https://genai.owasp.org/llm-top-10/"
   }
  ]
 },
 "P1": {
  "long": "The unglamorous foundation: say what you want, who it's for, what format it should take, and what constraints apply. The reliable mental test is the competent new hire — if a smart person on day one couldn't do the task from your prompt, the model can't either. Most 'bad model' complaints are quietly this skill missing.",
  "maxRank": 3,
  "ranks": [
   "Write prompts with task, format, and constraints",
   "Include the context a new hire would need",
   "Get usable output on the first attempt, usually"
  ],
  "levelUp": "Before sending your next real prompt, reread it as a stranger and list what they'd have to guess. Every guess you eliminate up front is a revision round you skip later.",
  "resources": [
   {
    "t": "Be clear and direct",
    "u": "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/be-clear-and-direct"
   },
   {
    "t": "OpenAI prompting guide",
    "u": "https://platform.openai.com/docs/guides/prompt-engineering"
   }
  ]
 },
 "P2": {
  "long": "Telling the model who to be — a securities lawyer, a skeptical code reviewer, an editor with strong opinions — shifts the register, vocabulary, and priorities of everything that follows. It's a lever for tone and domain framing, not a magic accuracy switch; 'you are an expert' does not confer expertise the weights lack. Best deployed with judgment, and dropped when it's just costume.",
  "maxRank": 2,
  "ranks": [
   "Use roles to shift tone and expertise",
   "Know when a persona helps and when it's noise"
  ],
  "levelUp": "Run the same review request as no-persona, generic-expert, and sharply specific persona, and compare what each one chooses to care about. The differences teach you what roles actually move.",
  "resources": [
   {
    "t": "Giving Claude a role",
    "u": "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/system-prompts"
   },
   {
    "t": "Prompt Engineering Guide",
    "u": "https://www.promptingguide.ai/"
   }
  ]
 },
 "P3": {
  "long": "When output feeds a pipeline instead of a person, shape matters: JSON with the right keys, tables with the right columns, tagged sections a parser can find. Delimiters — XML tags, fenced blocks — do double duty by separating your instructions from the data being processed, which also happens to be basic injection hygiene. For hard guarantees, 2026 APIs offer schema-enforced structured output modes so you can stop regex-parsing prose.",
  "maxRank": 3,
  "ranks": [
   "Ask for JSON or tables and get them",
   "Use delimiters to separate instructions from data",
   "Enforce schemas with structured output modes"
  ],
  "levelUp": "Take one prompt whose output you currently clean up by hand and add explicit structure — tags around inputs, a schema for outputs. Then try your platform's native structured output mode and retire the cleanup step.",
  "resources": [
   {
    "t": "Use XML tags",
    "u": "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/use-xml-tags"
   },
   {
    "t": "Structured outputs guide",
    "u": "https://platform.openai.com/docs/guides/structured-outputs"
   }
  ]
 },
 "P4": {
  "long": "Two or three well-chosen examples lock in format, style, and edge-case handling faster than paragraphs of description — the model imitates what it sees. The 2026 caveat: on reasoning models, few-shot is situational; examples still nail formats, but worked examples of reasoning can constrain a model that would have thought better on its own. Curate examples like test cases, including the awkward ones.",
  "maxRank": 2,
  "ranks": [
   "Use examples to lock format and style",
   "Know when few-shot hurts reasoning models"
  ],
  "levelUp": "Find a task where your format instructions keep getting ignored and replace them with two examples; watch compliance jump. Then try the same trick on a hard reasoning task and notice it doing less — that boundary is the lesson.",
  "resources": [
   {
    "t": "Few-shot prompting",
    "u": "https://www.promptingguide.ai/techniques/fewshot"
   },
   {
    "t": "Language models are few-shot learners",
    "u": "https://arxiv.org/abs/2005.14165"
   }
  ]
 },
 "P5": {
  "long": "Splitting a big task into explicit steps — or chaining separate prompts where each output feeds the next — was the original power move, and 'think step by step' its famous incantation. Reasoning models internalized the trick: they decompose on their own, and manual chain-of-thought on them is often redundant or mildly counterproductive. Decomposition still earns its keep for pipelines, checkpoints you want to inspect, and models running in fast mode.",
  "maxRank": 3,
  "ranks": [
   "Break big asks into smaller steps",
   "Chain prompts with outputs feeding inputs",
   "Know when reasoning models make manual CoT redundant"
  ],
  "levelUp": "Take one sprawling prompt that keeps half-failing and split it into a three-stage chain with inspectable intermediate outputs. Then run the original on a reasoning model with thinking enabled and compare — you'll learn which half of this skill you still need.",
  "resources": [
   {
    "t": "Chain-of-thought prompting",
    "u": "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/chain-of-thought"
   },
   {
    "t": "Chaining complex prompts",
    "u": "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/chain-prompts"
   },
   {
    "t": "CoT paper",
    "u": "https://arxiv.org/abs/2201.11903"
   }
  ]
 },
 "P6": {
  "long": "The 2026 inversion of prompting: as models got better at planning, over-specifying the how started underperforming specifying the what. Define success criteria, hard constraints, and how to verify done — then let the model pick its own path through the problem. It's management by objectives, except the report actually reads the objectives.",
  "maxRank": 3,
  "ranks": [
   "State success criteria, not step-by-step instructions",
   "Write constraints the model can self-verify against",
   "Design goal specs that survive model autonomy"
  ],
  "levelUp": "Rewrite one micromanaged prompt as pure goals-and-constraints — what done looks like, what must never happen — and run both versions on a reasoning model. Make your success criteria checkable, not vibes.",
  "resources": [
   {
    "t": "Building effective agents",
    "u": "https://www.anthropic.com/engineering/building-effective-agents"
   },
   {
    "t": "Reasoning best practices",
    "u": "https://platform.openai.com/docs/guides/reasoning-best-practices"
   }
  ]
 },
 "P7": {
  "long": "The umbrella discipline of 2026, with prompt engineering as a living subset: curate the smallest set of high-signal tokens that maximizes the chance of the outcome you want. Windows are big now, but attention is not uniform across them — models genuinely lose things in the middle — and every irrelevant token is paid for twice, in dollars and in distraction. What you leave out is as engineered as what you put in.",
  "maxRank": 4,
  "ranks": [
   "Know the window is scarce and signal beats volume",
   "Prune, order, and structure context deliberately",
   "Budget tokens across instructions, tools, and history",
   "Treat context as a measured, engineered system"
  ],
  "levelUp": "Take a bloated prompt-plus-context that works and cut it in half without breaking it — that exercise teaches signal density faster than any post. Then read Anthropic's context engineering piece and start tracking token counts on anything you run repeatedly.",
  "resources": [
   {
    "t": "Effective context engineering",
    "u": "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents"
   },
   {
    "t": "Lost in the Middle",
    "u": "https://arxiv.org/abs/2307.03172"
   },
   {
    "t": "Prompt engineering overview",
    "u": "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview"
   }
  ]
 },
 "P8": {
  "long": "The system prompt is standing law: behavior that persists across every turn, set at the right altitude — concrete enough to guide, general enough to let the model handle situations you didn't enumerate. The failure modes bracket it neatly: vague platitudes that change nothing, or brittle if-else rule lists that shatter on the first unanticipated input. Good ones read like heuristics handed to a capable colleague, and the major labs now publish theirs, so you can study the state of the art directly.",
  "maxRank": 4,
  "ranks": [
   "Know what a system prompt is for",
   "Write persistent instructions that actually persist",
   "Use heuristics at the right altitude, not rule lists",
   "Maintain production system prompts across model upgrades"
  ],
  "levelUp": "Read Anthropic's published system prompts and notice how much is judgment guidance rather than rules. Then write one for a bot you actually run, break it with adversarial inputs, and revise — twice.",
  "resources": [
   {
    "t": "Anthropic's published system prompts",
    "u": "https://docs.claude.com/en/release-notes/system-prompts"
   },
   {
    "t": "OpenAI Model Spec",
    "u": "https://model-spec.openai.com/"
   }
  ]
 },
 "P9": {
  "long": "Instead of pasting your whole wiki into the window, retrieval fetches only the passages relevant to the question and grounds the answer in them — RAG, in the classic acronym. The 2026 version is hybrid: embeddings plus keyword search, reranking, contextualized chunks, and increasingly agentic search where the model decides what to look up next. It remains the difference between a model that knows things in general and one that knows your things.",
  "maxRank": 4,
  "ranks": [
   "Know when retrieval beats pasting everything",
   "Have wired basic RAG over your own docs",
   "Tune chunking, hybrid search, and reranking",
   "Run and evaluate retrieval systems in production"
  ],
  "levelUp": "Build the small version first: chunk a folder of your own docs, embed them, and answer questions with retrieved passages in context. When answers miss, read Anthropic's contextual retrieval post — the fixes are mostly in the chunking.",
  "resources": [
   {
    "t": "Contextual retrieval",
    "u": "https://www.anthropic.com/news/contextual-retrieval"
   },
   {
    "t": "Original RAG paper",
    "u": "https://arxiv.org/abs/2005.11401"
   }
  ]
 },
 "P10": {
  "long": "Assistants and agents now remember across sessions — preferences, project facts, running state — via memory features and file-based memory tools. Memory is curated context, and it compounds in both directions: good entries save re-explaining everything forever, while stale or wrong entries quietly poison every future conversation. Knowing what's stored, and pruning it, is the maintenance nobody schedules.",
  "maxRank": 3,
  "ranks": [
   "Know what your assistant remembers about you",
   "Curate and prune stored memory deliberately",
   "Design memory schemas for agents you build"
  ],
  "levelUp": "Open your assistant's memory panel today and delete what's stale — most people are surprised twice, by what's there and by how old it is. If you build agents, decide explicitly what earns persistence and when it expires.",
  "resources": [
   {
    "t": "Claude memory tool",
    "u": "https://docs.claude.com/en/docs/agents-and-tools/tool-use/memory-tool"
   },
   {
    "t": "ChatGPT memory FAQ",
    "u": "https://help.openai.com/en/articles/8590148-memory-faq"
   },
   {
    "t": "Claude Code memory",
    "u": "https://docs.claude.com/en/docs/claude-code/memory"
   }
  ]
 },
 "P11": {
  "long": "On multi-hour tasks the context window becomes a slowly flooding ship: stale tool outputs, dead ends, and drifting instructions accumulate until quality sinks. The 2026 toolkit is compaction (summarize the past, keep the pertinent), scratchpads and note files that persist outside the window, and the deliberate fresh start — often the strongest move and the hardest to choose mid-task. Agents that run long are agents that manage their own forgetting.",
  "maxRank": 4,
  "ranks": [
   "Know context degrades on long tasks",
   "Start fresh threads at the right moments",
   "Use compaction and scratchpads deliberately",
   "Design agents that survive multi-hour horizons"
  ],
  "levelUp": "Next long session, watch for the moment output quality dips and practice the hard move: compact or restart with a written summary instead of pushing through. Then have an agent keep a progress file outside its window and resume from it cold.",
  "resources": [
   {
    "t": "Context editing",
    "u": "https://docs.claude.com/en/docs/build-with-claude/context-editing"
   },
   {
    "t": "Claude Code best practices",
    "u": "https://www.anthropic.com/engineering/claude-code-best-practices"
   }
  ]
 },
 "P12": {
  "long": "In multi-agent systems, context is the thing being engineered: an orchestrator holds the plan, each subagent works in its own isolated window, and everything they exchange crosses through deliberately condensed hand-offs. Get the hand-offs wrong and you get the classic failure modes — duplicated work, lost constraints, subagents confidently solving the wrong problem. Anthropic's research-system writeup remains the canonical field report on how much of this craft is just writing very good briefs.",
  "maxRank": 5,
  "ranks": [
   "Know why subagents get isolated contexts",
   "Have split one task across subagents",
   "Write hand-offs that compress without losing the plot",
   "Design orchestrator context flows end-to-end",
   "Run multi-agent systems in production and debug them"
  ],
  "levelUp": "Start concrete: define one specialist subagent in Claude Code, delegate to it, and study what context it did and didn't receive. Then read the multi-agent research system post and rewrite your orchestrator's task briefs like you're delegating to sharp contractors with amnesia.",
  "resources": [
   {
    "t": "Multi-agent research system",
    "u": "https://www.anthropic.com/engineering/multi-agent-research-system"
   },
   {
    "t": "Claude Code subagents",
    "u": "https://code.claude.com/docs/en/sub-agents"
   },
   {
    "t": "Building effective agents",
    "u": "https://www.anthropic.com/engineering/building-effective-agents"
   }
  ]
 },
 "U1": {
  "long": "The front door to everything else: type a question, read the answer, and learn the uncomfortable truth that the first answer is rarely the best one. By 2026 the chat box hides a lot of machinery — models, tools, memory — but the core loop is still ask, read, edit, retry.",
  "maxRank": 2,
  "ranks": [
   "Have asked a chatbot a few questions",
   "Chat daily and edit prompts instead of settling"
  ],
  "levelUp": "Bring it one real task a day for two weeks, and when an answer misses, edit your original prompt rather than piling on corrections. Use regenerate to compare two takes before picking one.",
  "resources": [
   {
    "t": "Claude Help Center",
    "u": "https://support.claude.com/"
   },
   {
    "t": "OpenAI Help Center",
    "u": "https://help.openai.com/"
   }
  ]
 },
 "U2": {
  "long": "Treating the model like a junior collaborator instead of a vending machine: ask for three alternatives, request a harsher tone, make it critique its own draft before you do. Most of the quality in everyday AI use comes from the second and third turn, not the first.",
  "maxRank": 3,
  "ranks": [
   "Have asked follow-ups to improve an answer",
   "Routinely request alternatives and revisions in dialogue",
   "Direct sessions like an editor, self-critique included"
  ],
  "levelUp": "On your next real task, ask for three distinct versions, then have the model critique its favorite before you revise. Practice steering with constraints ('shorter, no jargon, keep the numbers') instead of vague nudges.",
  "resources": [
   {
    "t": "Claude prompting best practices",
    "u": "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices"
   },
   {
    "t": "OpenAI prompt engineering guide",
    "u": "https://platform.openai.com/docs/guides/prompt-engineering"
   }
  ]
 },
 "U3": {
  "long": "Typing is often the slowest way to explain something. Modern assistants take voice conversations, photos, screenshots, and whole documents — a picture of the error dialog or the whiteboard usually beats three paragraphs describing it.",
  "maxRank": 2,
  "ranks": [
   "Have uploaded an image or tried voice once",
   "Reach for photos, screenshots, and voice when they beat typing"
  ],
  "levelUp": "Next time you start describing something visual, stop and screenshot it instead. Try a full voice conversation on a commute to see where speaking beats typing and where it does not.",
  "resources": [
   {
    "t": "ChatGPT capabilities overview",
    "u": "https://help.openai.com/en/articles/9260256-chatgpt-capabilities-overview"
   },
   {
    "t": "Google Gemini",
    "u": "https://gemini.google/"
   }
  ]
 },
 "U4": {
  "long": "Generating images and video went from party trick to production tool once reference inputs and targeted edits arrived. The craft is now less about magic words and more about iteration: supply references, fix one region at a time, and keep a consistent style across a set.",
  "maxRank": 3,
  "ranks": [
   "Have generated a few images from prompts",
   "Iterate with references and targeted edits",
   "Produce consistent, usable media assets on demand"
  ],
  "levelUp": "Pick a small real need — a header image, a product mock — and iterate with a reference image instead of starting fresh each time. Then try keeping one character or style consistent across five outputs; that is where the skill actually lives.",
  "resources": [
   {
    "t": "OpenAI image generation guide",
    "u": "https://platform.openai.com/docs/guides/images"
   },
   {
    "t": "Google Gemini",
    "u": "https://gemini.google/"
   }
  ]
 },
 "U5": {
  "long": "Models are famously bad at arithmetic in their heads and famously confident about it anyway. The fix is modes that actually run code against your files — analysis tools, code execution — so the spreadsheet answer comes from computation, not vibes. Knowing which mode you are in is most of the skill.",
  "maxRank": 3,
  "ranks": [
   "Have uploaded a PDF and asked questions",
   "Use compute modes for data and check the numbers",
   "Run real analyses and spot when the model guessed"
  ],
  "levelUp": "Upload a spreadsheet you already know well and compare the AI's answers against your own; note where it computed versus paraphrased. Make 'show me the code you ran' a reflex for any numeric claim.",
  "resources": [
   {
    "t": "Data analysis with ChatGPT",
    "u": "https://help.openai.com/en/articles/8437071-data-analysis-with-chatgpt"
   },
   {
    "t": "Claude analysis tool",
    "u": "https://www.anthropic.com/news/analysis-tool"
   }
  ]
 },
 "U6": {
  "long": "Built-in web search gives assistants current information with inline citations, which solves the recency problem and creates a new one: nobody clicks the citations. The skill is grounded search plus the small, unfashionable habit of reading what the model claims to have read.",
  "maxRank": 2,
  "ranks": [
   "Have seen cited answers from built-in search",
   "Check citations before trusting or sharing anything"
  ],
  "levelUp": "For one week, open at least one citation per searched answer and check the claim actually appears there. You will catch a mismatch soon enough, and after that the habit sticks on its own.",
  "resources": [
   {
    "t": "Claude web search",
    "u": "https://www.anthropic.com/news/web-search"
   },
   {
    "t": "Introducing ChatGPT search",
    "u": "https://openai.com/index/introducing-chatgpt-search/"
   }
  ]
 },
 "U7": {
  "long": "Copilot and Gemini now live inside the docs, mail, sheets, and meetings you were already using, which means the AI has your context without any copy-pasting. The wins are unglamorous — first drafts, formula help, meeting recaps — and they add up fast if you actually invoke them.",
  "maxRank": 2,
  "ranks": [
   "Have tried the assistant in a doc or email",
   "Use suite AI daily for drafts, sheets, and recaps"
  ],
  "levelUp": "Pick your three most repetitive suite tasks — status emails, meeting notes, sheet formulas — and route each through the built-in assistant for a week. Keep what saves time, drop what does not.",
  "resources": [
   {
    "t": "Gemini in Google Workspace",
    "u": "https://workspace.google.com/solutions/ai/"
   },
   {
    "t": "Microsoft 365 Copilot",
    "u": "https://www.microsoft.com/en-us/microsoft-365/copilot"
   }
  ]
 },
 "U8": {
  "long": "The NotebookLM pattern: load your own sources, then chat with something that only answers from them, with citations back to the exact passage. Add auto-generated overviews, study guides, and audio briefings and you have a research assistant that is grounded by construction rather than by promise.",
  "maxRank": 3,
  "ranks": [
   "Have loaded sources into a notebook once",
   "Build source-grounded notebooks for real projects",
   "Turn curated sources into guides, briefs, and overviews"
  ],
  "levelUp": "Build a notebook for something you genuinely need to learn — a contract, a codebase's docs, a course — and quiz it, checking citations as you go. Then try the generated overview and audio formats to see which ones your brain actually retains.",
  "resources": [
   {
    "t": "NotebookLM",
    "u": "https://notebooklm.google/"
   },
   {
    "t": "NotebookLM Help",
    "u": "https://support.google.com/notebooklm"
   }
  ]
 },
 "U9": {
  "long": "Deep Research modes take a question, browse for many minutes across dozens of sources, and return a cited report. The output looks authoritative because it is formatted like a literature review; whether it is authoritative depends on the sources it picked, which is why auditing them is part of the skill, not an optional extra.",
  "maxRank": 3,
  "ranks": [
   "Have run a Deep Research query once",
   "Scope research briefs and audit the citations",
   "Delegate multi-step research, catching weak sourcing fast"
  ],
  "levelUp": "Write your next research request as a brief — scope, what counts as a good source, what to exclude — instead of a one-liner. When the report lands, spot-check three citations before believing any conclusion built on them.",
  "resources": [
   {
    "t": "Introducing deep research",
    "u": "https://openai.com/index/introducing-deep-research/"
   },
   {
    "t": "Gemini Deep Research",
    "u": "https://gemini.google/overview/deep-research/"
   },
   {
    "t": "Claude Research",
    "u": "https://www.anthropic.com/news/research"
   }
  ]
 },
 "U10": {
  "long": "Every assistant now ships a menu: fast-cheap models for drafts, extended thinking for hard problems, research modes for anything needing sources. Picking wrong costs you either money and time (thinking mode for a haiku) or quality (fast mode for a legal question), and the menu changes every few months.",
  "maxRank": 3,
  "ranks": [
   "Have switched models or modes at least once",
   "Match model and mode to task difficulty",
   "Route work by cost, speed, and depth instinctively"
  ],
  "levelUp": "Run the same hard question through a fast model and a thinking model and study the difference — that calibrates your instincts better than any benchmark chart. Default cheap, escalate on stakes.",
  "resources": [
   {
    "t": "Extended thinking tips",
    "u": "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/extended-thinking-tips"
   },
   {
    "t": "OpenAI reasoning guide",
    "u": "https://platform.openai.com/docs/guides/reasoning"
   }
  ]
 },
 "U11": {
  "long": "Custom GPTs, Claude Projects, Gems: package instructions plus knowledge files into a reusable assistant so you stop re-explaining your context every session. The difference between a toy and a tool is usually the tenth revision of the instructions after watching real people use it.",
  "maxRank": 3,
  "ranks": [
   "Have used someone else's custom assistant",
   "Build assistants with instructions and knowledge files",
   "Maintain assistants that other people rely on"
  ],
  "levelUp": "Take a prompt you paste more than once a week and turn it into a custom assistant with your reference docs attached. Then watch someone else use it and revise the instructions based on where it disappointed them.",
  "resources": [
   {
    "t": "Creating and editing GPTs",
    "u": "https://help.openai.com/en/articles/8554397-creating-and-editing-gpts"
   },
   {
    "t": "Claude Projects",
    "u": "https://support.claude.com/en/articles/9517075-what-are-projects"
   }
  ]
 },
 "U12": {
  "long": "IDE copilots autocomplete lines, and inline chat rewrites functions — professional AI-assisted engineering, as distinct from vibe coding, means reading every suggestion like it came from a fast intern with no memory of your codebase's conventions. Accepting without reviewing is how plausible bugs ship.",
  "maxRank": 3,
  "ranks": [
   "Have accepted a few autocomplete suggestions",
   "Use copilot and inline chat daily, reviewing diffs",
   "Drive large changes in the IDE, catching bad suggestions"
  ],
  "levelUp": "Turn the copilot on for all real work for a month, but adopt a rule: never accept a suggestion you could not explain in review. Practice inline-chat refactors on code with tests so you learn what it silently breaks.",
  "resources": [
   {
    "t": "GitHub Copilot docs",
    "u": "https://docs.github.com/en/copilot"
   },
   {
    "t": "Simon Willison on AI-assisted programming",
    "u": "https://simonwillison.net/tags/ai-assisted-programming/"
   }
  ]
 },
 "U13": {
  "long": "Vibe coding — describing what you want and accepting the code without reading it — is a legitimate and delightful way to build personal tools and prototypes. The skill is knowing the boundary: the moment real users, real data, or real money are involved, prompted-and-unreviewed stops being an acceptable engineering standard.",
  "maxRank": 3,
  "ranks": [
   "Have described an app and watched it appear",
   "Ship small personal tools by prompting alone",
   "Know exactly when vibe-grade code must not ship"
  ],
  "levelUp": "Build three throwaway tools for actual annoyances in your life — a converter, a tracker, a dashboard. Then write down, for one of them, everything you would have to fix before letting a stranger use it; that list is the boundary.",
  "resources": [
   {
    "t": "Not all AI programming is vibe coding",
    "u": "https://simonwillison.net/2025/Mar/19/vibe-coding/"
   },
   {
    "t": "Beyond Vibe Coding",
    "u": "https://simonwillison.net/2025/Sep/4/beyond-vibe-coding/"
   }
  ]
 },
 "U14": {
  "long": "MCP became the standard socket for wiring assistants into your actual tools — calendar, files, databases, CRMs — via connectors. The interesting part is no longer whether it can connect but what you let it do once connected: every permission you grant is something an agent can now do on a bad day too.",
  "maxRank": 3,
  "ranks": [
   "Have enabled a connector once",
   "Wire assistants to your apps through MCP connectors",
   "Manage permissions and data flow across many connectors"
  ],
  "levelUp": "Connect one genuinely useful tool — calendar or file storage — and use it for a week, then review exactly what access you granted and prune. Read the MCP intro so connectors stop being magic and start being architecture.",
  "resources": [
   {
    "t": "Model Context Protocol",
    "u": "https://modelcontextprotocol.io/"
   },
   {
    "t": "MCP getting started",
    "u": "https://modelcontextprotocol.io/docs/getting-started/intro"
   }
  ]
 },
 "U15": {
  "long": "Terminal agents like Claude Code and Codex CLI take a spec, roam a codebase, and come back with a multi-file diff. The leverage is real and so is the failure mode: vague instructions produce confident, sprawling changes. Specs going in and diff review coming out are the two ends of the skill.",
  "maxRank": 4,
  "ranks": [
   "Have let a terminal agent make a small change",
   "Delegate scoped tasks and review every diff",
   "Write specs agents execute reliably across files",
   "Run parallel agents on real work and teach others"
  ],
  "levelUp": "Start with well-scoped tasks — a rename, a test suite, a small feature — and grade the diffs harshly. Then invest in the unglamorous parts: project context files, a spec template, and a habit of splitting big asks into checkpointed steps.",
  "resources": [
   {
    "t": "Claude Code docs",
    "u": "https://code.claude.com/docs/en/overview"
   },
   {
    "t": "Claude Code best practices",
    "u": "https://www.anthropic.com/engineering/claude-code-best-practices"
   }
  ]
 },
 "U16": {
  "long": "The trigger-action automation you already knew, now with LLM steps in the middle: classify this email, draft this reply, extract these fields. The craft is defensive — structured outputs so downstream steps do not choke, approval gates before anything irreversible, and error paths for the day the model returns something creative.",
  "maxRank": 4,
  "ranks": [
   "Have built a simple trigger-to-action automation",
   "Add LLM steps with structured, parseable output",
   "Design approval gates and error handling into flows",
   "Operate a portfolio of AI automations in production"
  ],
  "levelUp": "Automate one recurring chore end to end — inbox triage, lead enrichment — with a human approval step before anything sends. Once it survives two weeks, add structured-output validation and an error branch, then and only then remove the training wheels selectively.",
  "resources": [
   {
    "t": "n8n docs",
    "u": "https://docs.n8n.io/"
   },
   {
    "t": "Zapier Help Center",
    "u": "https://help.zapier.com/hc/en-us"
   }
  ]
 },
 "U17": {
  "long": "Agentic browsers click, type, and buy on your behalf, which makes them both the most useful and the most attackable tool in the stack — a malicious page can try to prompt-inject your agent into doing things with your logged-in sessions. Supervision, credential sandboxing, and low-stakes-first are not paranoia; they are the operating manual.",
  "maxRank": 4,
  "ranks": [
   "Have watched an agent browse for you once",
   "Delegate low-stakes web tasks under supervision",
   "Sandbox credentials and scope what agents touch",
   "Run real errands via agents and audit their trails"
  ],
  "levelUp": "Start with read-only tasks — research, form-filling you review before submit — and watch every step for the first dozen runs. Read up on prompt injection before you let an agent near anything logged in, and keep payments and primary email off-limits.",
  "resources": [
   {
    "t": "Piloting Claude for Chrome",
    "u": "https://www.anthropic.com/news/claude-for-chrome"
   },
   {
    "t": "ChatGPT agent",
    "u": "https://help.openai.com/en/articles/11752874-chatgpt-agent"
   },
   {
    "t": "Prompt injection series",
    "u": "https://simonwillison.net/series/prompt-injection/"
   }
  ]
 },
 "U18": {
  "long": "The capstone: recurring work — the Monday report, inbox triage, competitor monitoring — running on scheduled and background agents while you review outputs instead of producing them. Each run starts fresh, so the whole discipline is context design: prompts that stand alone, handoffs that carry state, and checkpoints where a human actually looks.",
  "maxRank": 5,
  "ranks": [
   "Have scheduled one recurring AI task",
   "Run a few background agents for routine work",
   "Design standalone prompts and clean context handoffs",
   "Orchestrate scheduled fleets with review checkpoints",
   "Run your week on agents and teach the pattern"
  ],
  "levelUp": "Pick one recurring deliverable and turn it into a scheduled agent with a standalone prompt, then spend a month tuning it on real failures. Add agents one at a time, each with a defined output and a review point — an unreviewed fleet is just automated technical debt.",
  "resources": [
   {
    "t": "Multi-agent research system",
    "u": "https://www.anthropic.com/engineering/multi-agent-research-system"
   },
   {
    "t": "Scheduled tasks in ChatGPT",
    "u": "https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt"
   },
   {
    "t": "Claude Code docs",
    "u": "https://code.claude.com/docs/en/overview"
   }
  ]
 },
 "U19": {
  "long": "One person getting good at AI is a curiosity; a team sharing prompt libraries, skills, and vetted assistants is an operating advantage. The work is curation and maintenance — collecting what actually works, packaging it so colleagues can use it without a briefing, and pruning the stale stuff before it misleads someone.",
  "maxRank": 3,
  "ranks": [
   "Have shared a good prompt with a teammate",
   "Curate shared prompts, skills, and assistants",
   "Run enablement with onboarding, standards, and adoption"
  ],
  "levelUp": "Start a shared doc of five prompts or assistants that demonstrably save time, with a one-line 'when to use this' for each. Review it monthly, delete what nobody uses, and pair new teammates with one working example rather than a policy memo.",
  "resources": [
   {
    "t": "OpenAI Academy",
    "u": "https://academy.openai.com/"
   },
   {
    "t": "Claude Projects",
    "u": "https://support.claude.com/en/articles/9517075-what-are-projects"
   }
  ]
 },
 "R14": {
  "long": "Embeddings are vectors first and search infrastructure second. The same vectors that power retrieval can cluster support tickets, dedupe near-identical documents, classify with a nearest-centroid trick, drive recommendations, and flag anomalies as the points sitting far from everything else. Once you see embeddings as a general-purpose representation, half your ML backlog turns into k-NN problems.",
  "maxRank": 3,
  "ranks": [
   "Cluster a corpus with k-means over embeddings",
   "Build dedup, classification, and recommendation on one vector store",
   "Design embedding-powered analytics pipelines others reuse"
  ],
  "levelUp": "Take a messy real corpus (support tickets, logs, product reviews), embed it, and ship one non-search feature: near-duplicate detection or a UMAP-plus-HDBSCAN topic map. Then compare embedding-based classification against a fine-tuned classifier on the same labels to learn where each wins.",
  "resources": [
   {
    "t": "Sentence Transformers docs",
    "u": "https://www.sbert.net"
   },
   {
    "t": "OpenAI embeddings guide",
    "u": "https://platform.openai.com/docs/guides/embeddings"
   }
  ]
 },
 "R15": {
  "long": "Most retrieval failures are query failures: users write two vague words and expect the index to read their minds. Query transformation fixes the question before it hits the retriever — rewriting, decomposing into sub-queries, fanning out multi-query variants, or generating a hypothetical answer to embed (HyDE). It is the cheapest upgrade in the retrieval stack, which is why every agentic RAG loop starts here.",
  "maxRank": 3,
  "ranks": [
   "Rewrite user queries with an LLM before retrieval",
   "Combine multi-query expansion, decomposition, and HyDE",
   "Route queries to the right transformation automatically"
  ],
  "levelUp": "Log your worst-performing real queries, then A/B rewriting strategies against them with a fixed retriever and measure recall changes. Read the HyDE paper and implement it in an afternoon — it is shorter than most blog posts about it.",
  "resources": [
   {
    "t": "HyDE paper",
    "u": "https://arxiv.org/abs/2212.10496"
   },
   {
    "t": "Weaviate on agentic RAG",
    "u": "https://weaviate.io/blog/what-is-agentic-rag"
   }
  ]
 },
 "R16": {
  "long": "A chunk ripped out of a document forgets which company, contract, or quarter it was about, and retrieval pays the price. Contextual retrieval has an LLM prepend a short situating blurb to each chunk before embedding; late chunking gets a similar effect by embedding the whole document with a long-context embedder and pooling chunk vectors afterwards. Both attack the same disease: context amnesia at the chunk boundary.",
  "maxRank": 4,
  "ranks": [
   "Explain why isolated chunks lose meaning",
   "Implement LLM-generated chunk context with prompt caching",
   "Apply late chunking with long-context embedders",
   "Choose and tune the right approach per corpus"
  ],
  "levelUp": "Reproduce Anthropic's contextual retrieval setup on your own corpus and measure the retrieval failure rate before and after — the win varies wildly by domain. Then benchmark late chunking against it; the trade is LLM tokens at index time versus embedder context length.",
  "resources": [
   {
    "t": "Anthropic contextual retrieval",
    "u": "https://www.anthropic.com/engineering/contextual-retrieval"
   },
   {
    "t": "Jina late chunking post",
    "u": "https://jina.ai/news/late-chunking-in-long-context-embedding-models/"
   },
   {
    "t": "Late chunking paper",
    "u": "https://arxiv.org/abs/2409.04701"
   }
  ]
 },
 "R17": {
  "long": "Flat top-k over uniform chunks falls apart when the answer needs document structure or multi-hop reasoning. Parent-document retrieval searches small and returns big; RAPTOR builds a tree of recursive summaries so you can answer at any altitude; GraphRAG extracts an entity graph and community summaries so 'how do these twelve things connect' becomes answerable. Structure is expensive to build and it shows up exactly when flat retrieval embarrasses you.",
  "maxRank": 4,
  "ranks": [
   "Implement parent-document (small-to-big) retrieval",
   "Build a RAPTOR-style hierarchical summary tree",
   "Run GraphRAG for multi-hop and global questions",
   "Match index structure to corpus and question type"
  ],
  "levelUp": "Write ten multi-hop questions your current pipeline fails, then build a RAPTOR tree and a GraphRAG index over the same corpus and see which failures each one fixes. Track indexing cost honestly — graph extraction burns tokens, and that number belongs in your write-up.",
  "resources": [
   {
    "t": "RAPTOR paper",
    "u": "https://arxiv.org/abs/2401.18059"
   },
   {
    "t": "GraphRAG paper",
    "u": "https://arxiv.org/abs/2404.16130"
   },
   {
    "t": "Microsoft GraphRAG docs",
    "u": "https://microsoft.github.io/graphrag/"
   }
  ]
 },
 "R18": {
  "long": "Without evaluation, every retrieval change is vibes, and vibes do not survive contact with production. RAG evaluation splits the problem cleanly: context precision and recall grade the retriever, faithfulness and answer relevance grade the generator, and a golden dataset of question-answer-source triples makes the whole thing regression-testable. This skill gates everything advanced — you cannot claim agentic RAG helped if you cannot measure it.",
  "maxRank": 4,
  "ranks": [
   "Run RAGAS metrics on a small test set",
   "Build and maintain a golden dataset for your domain",
   "Separate retrieval failures from generation failures systematically",
   "Run eval-gated CI for every retrieval change"
  ],
  "levelUp": "Hand-label 50 real queries with the passages that should have been retrieved — tedious, and worth more than any framework default. Then wire RAGAS into CI so a chunking change that tanks context recall fails the build instead of a customer.",
  "resources": [
   {
    "t": "RAGAS documentation",
    "u": "https://docs.ragas.io/en/stable/"
   },
   {
    "t": "RAGAS paper",
    "u": "https://arxiv.org/abs/2309.15217"
   }
  ]
 },
 "R19": {
  "long": "Real enterprise knowledge lives in PDFs full of tables, charts, and diagrams, and you can't grep a diagram. Multimodal retrieval sidesteps brittle OCR-and-parse pipelines by embedding page images directly — ColPali-style late-interaction over vision-language patch embeddings — so the figure and its caption stay one searchable object. In 2026 this is the default answer for slide decks, scanned contracts, and anything with a bounding box.",
  "maxRank": 3,
  "ranks": [
   "Retrieve over PDFs as page images",
   "Deploy ColPali-style late-interaction visual retrieval",
   "Build production multimodal pipelines with table and figure grounding"
  ],
  "levelUp": "Take twenty ugly PDFs — scanned, rotated, table-heavy — and benchmark a ColPali-style visual retriever against your best parse-then-embed pipeline on questions whose answers live inside figures. Storage for multi-vector patch embeddings is the gotcha; learn the pooling and quantization tricks early.",
  "resources": [
   {
    "t": "ColPali paper",
    "u": "https://arxiv.org/abs/2407.01449"
   },
   {
    "t": "Qdrant documentation",
    "u": "https://qdrant.tech/documentation/"
   }
  ]
 },
 "R20": {
  "long": "Off-the-shelf embedders think 'terminal' means a shell, your logistics corpus disagrees, and retrieval quality quietly caps out. Fine-tuning an embedder with contrastive training on domain pairs — mined hard negatives included, or the model learns nothing interesting — routinely beats switching to a bigger general-purpose model. It only pays off if your evaluation harness from RAG evaluation can prove the lift, which is why that skill comes first.",
  "maxRank": 3,
  "ranks": [
   "Generate training pairs and run a first fine-tune",
   "Mine hard negatives and train with contrastive losses",
   "Own a domain-adapted embedder with eval-proven gains"
  ],
  "levelUp": "Use an LLM to synthesize query-passage pairs from your own corpus, mine hard negatives with your current retriever, and fine-tune with MultipleNegativesRankingLoss in Sentence Transformers. Evaluate on a held-out golden set, not the training distribution — that is where most published lifts evaporate.",
  "resources": [
   {
    "t": "Sentence Transformers training guide",
    "u": "https://www.sbert.net/docs/sentence_transformer/training_overview.html"
   },
   {
    "t": "E5 contrastive pretraining paper",
    "u": "https://arxiv.org/abs/2212.03533"
   }
  ]
 },
 "R21": {
  "long": "A retrieval demo becomes a retrieval system the day someone asks why yesterday's document isn't in the index. Production retrieval ops covers the unglamorous load-bearing parts: incremental indexing and freshness SLAs, index and embedding-model versioning with blue-green reindexes, latency budgets split across retrieve-rerank-generate, and semantic caching so repeat questions cost microseconds instead of tokens. Nobody tweets about this layer, which is how you know it matters.",
  "maxRank": 4,
  "ranks": [
   "Ship incremental indexing with freshness monitoring",
   "Version indexes and roll embedding models without downtime",
   "Enforce latency budgets with tuned HNSW and caching",
   "Run retrieval as a measured, on-call production service"
  ],
  "levelUp": "Instrument p50/p95 for every pipeline stage and set a freshness SLO before anyone asks for one. Then rehearse an embedding-model migration end to end — dual-write, backfill, shadow-compare, cut over — because the first real one should not be the first attempt.",
  "resources": [
   {
    "t": "Qdrant documentation",
    "u": "https://qdrant.tech/documentation/"
   },
   {
    "t": "Anthropic contextual retrieval",
    "u": "https://www.anthropic.com/engineering/contextual-retrieval"
   }
  ]
 },
 "R22": {
  "long": "Agentic RAG moves the intelligence from the pipeline to the model: the LLM decides whether to retrieve at all, rewrites the query, picks which source to hit, grades what comes back, and retries with a new plan when the evidence is thin. It descends from Self-RAG and corrective-RAG ideas but in 2026 it is simply how serious retrieval systems are built. The catch is cost and latency — every reflection step is another model call, so the eval harness decides which steps earn their keep.",
  "maxRank": 4,
  "ranks": [
   "Add a retrieve-or-not decision to a pipeline",
   "Grade retrieved context and retry with rewritten queries",
   "Orchestrate multi-source routing with reflection loops",
   "Design agentic retrieval that beats static pipelines on evals"
  ],
  "levelUp": "Convert one static pipeline: add a router that can skip retrieval, a grader that scores returned chunks, and a bounded retry loop — then prove the lift on your golden dataset and measure the added latency. Read Self-RAG to see where the grade-and-retry pattern came from.",
  "resources": [
   {
    "t": "Agentic RAG survey",
    "u": "https://arxiv.org/abs/2501.09136"
   },
   {
    "t": "Self-RAG paper",
    "u": "https://arxiv.org/abs/2310.11511"
   },
   {
    "t": "Weaviate on agentic RAG",
    "u": "https://weaviate.io/blog/what-is-agentic-rag"
   }
  ]
 },
 "R23": {
  "long": "Agentic search skips the index entirely: give the agent grep, glob, SQL, and API access, and let it hunt through live data the way an engineer would — search, read, refine, repeat. Claude Code made the pattern famous over codebases, and it generalizes to any corpus where freshness beats recall and embedding-pipeline maintenance is a tax you would rather not pay. The trade is tokens and latency per query instead of indexing cost up front; knowing which side of that trade you are on is the actual skill.",
  "maxRank": 3,
  "ranks": [
   "Let an agent grep live files instead of an index",
   "Build iterative search-read-refine loops over live sources",
   "Decide rigorously when live search beats a vector index"
  ],
  "levelUp": "Build a filesystem agent with just ripgrep and a read tool, point it at a corpus you already have indexed, and compare answer quality, freshness, latency, and token cost head to head. The interesting output is the decision rule for when each approach wins, not the agent itself.",
  "resources": [
   {
    "t": "Claude Code best practices",
    "u": "https://www.anthropic.com/engineering/claude-code-best-practices"
   },
   {
    "t": "Building effective agents",
    "u": "https://www.anthropic.com/engineering/building-effective-agents"
   }
  ]
 },
 "R24": {
  "long": "Naive RAG is dead; retrieval is doing fine, thanks for asking. The capstone skill is choosing the right tool per query class — stuff the long context, retrieve into it, search live data agentically, or hybridize — using cost, latency, freshness, and measured accuracy instead of whichever architecture is trending. Million-token windows did not kill retrieval; they turned it into a routing decision, and someone has to own that decision.",
  "maxRank": 5,
  "ranks": [
   "Compare RAG and long-context on one real task",
   "Route between retrieval and context-stuffing by query class",
   "Design hybrid systems mixing indexes, agents, and long context",
   "Defend architecture choices with cost and eval data",
   "Set retrieval strategy across an organization"
  ],
  "levelUp": "Run the self-route experiment from the RAG-vs-long-context literature on your own workload: measure accuracy per dollar for retrieval, full-context, and a router that picks per query. Then write the internal strategy doc that says which pattern serves which query class — the doc, with numbers attached, is the mastery artifact.",
  "resources": [
   {
    "t": "RAG vs long-context study",
    "u": "https://arxiv.org/abs/2407.16833"
   },
   {
    "t": "Anthropic contextual retrieval",
    "u": "https://www.anthropic.com/engineering/contextual-retrieval"
   },
   {
    "t": "Agentic RAG survey",
    "u": "https://arxiv.org/abs/2501.09136"
   }
  ]
 },
 "A17": {
  "long": "By 2026 the consensus is Agent = Model + Harness, and the harness — tools, prompts, permissions, sandboxes, feedback loops — is where most of the remaining performance lives. Harness engineering is designing that environment so a fixed model gets measurably better at the job. Model launches get the headlines; harness diffs ship the wins.",
  "maxRank": 5,
  "ranks": [
   "Tweak an existing harness's prompts and tool set",
   "Assemble a working harness from loop, tools, and sandbox",
   "Design verification loops so the model self-corrects",
   "Lift eval scores without touching the model",
   "Own a production harness that survives model swaps"
  ],
  "levelUp": "Pick one task your agent fails at and fix it without changing the model: sharper tool descriptions, a verifier step, a tighter sandbox. Measure before and after on a small eval set, or it did not happen.",
  "resources": [
   {
    "t": "Harness Engineering in 2026",
    "u": "https://www.faros.ai/blog/harness-engineering"
   },
   {
    "t": "Building Effective Agents",
    "u": "https://www.anthropic.com/engineering/building-effective-agents"
   }
  ]
 },
 "A18": {
  "long": "One lead agent decomposes the problem, spawns specialist subagents with their own context windows and tool sets, then synthesizes what comes back. Anthropic's multi-agent research system is the canonical write-up: the hard part is not spawning agents, it is writing briefs precise enough that the specialists do not all wander off and research the same thing.",
  "maxRank": 5,
  "ranks": [
   "Spawn a single subagent for a scoped task",
   "Write delegation briefs with clear objectives and boundaries",
   "Isolate subagent contexts and synthesize their outputs",
   "Match decomposition strategy to task shape",
   "Run orchestrator hierarchies that beat single-agent baselines"
  ],
  "levelUp": "Build a research orchestrator with three specialist subagents and compare it against a single agent on identical questions. Read the Anthropic multi-agent post first; most of your failure modes are already catalogued there.",
  "resources": [
   {
    "t": "Multi-Agent Research System",
    "u": "https://www.anthropic.com/engineering/multi-agent-research-system"
   },
   {
    "t": "LangGraph documentation",
    "u": "https://langchain-ai.github.io/langgraph/"
   }
  ]
 },
 "A19": {
  "long": "Fan out independent subtasks to a fleet, fan the results back in. Parallelism pays handsomely for breadth-first, read-heavy work like research, and punishes you for write-heavy work with shared state — plus Anthropic measured multi-agent setups burning roughly 15x the tokens of a single chat. Knowing when not to parallelize is the actual skill.",
  "maxRank": 4,
  "ranks": [
   "Fan out independent subtasks to parallel agents",
   "Merge parallel results without duplication or loss",
   "Judge when parallelism pays versus a single agent",
   "Operate fleets with budget caps and straggler handling"
  ],
  "levelUp": "Parallelize one research task and one refactoring task, then compare wall-clock time, token spend, and merge pain. The second one will teach you about shared mutable state the hard way.",
  "resources": [
   {
    "t": "Multi-Agent Research System",
    "u": "https://www.anthropic.com/engineering/multi-agent-research-system"
   },
   {
    "t": "Don't Build Multi-Agents",
    "u": "https://cognition.ai/blog/dont-build-multi-agents"
   }
  ]
 },
 "A20": {
  "long": "Agents coordinate by message-passing (clean interfaces, lossy handoffs) or shared state (full fidelity, merge conflicts) — the trade-off is basically distributed systems with worse spelling. For crossing organizational or vendor boundaries, the A2A protocol standardizes agent cards, task lifecycles, and handoffs so opaque agents can work together without reading each other's internals.",
  "maxRank": 4,
  "ranks": [
   "Hand off a task between two agents cleanly",
   "Choose message-passing or shared state per workload",
   "Design handoff schemas that survive context compression",
   "Wire cross-vendor agents over the A2A protocol"
  ],
  "levelUp": "Build the same two-agent workflow twice: once with message handoffs, once with a shared workspace file, and note where each breaks. Then read the A2A spec and see which problems it decided were worth standardizing.",
  "resources": [
   {
    "t": "A2A Protocol Specification",
    "u": "https://a2a-protocol.org/latest/specification/"
   },
   {
    "t": "Google A2A announcement",
    "u": "https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/"
   }
  ]
 },
 "A21": {
  "long": "Did the agent finish the task, did it take a sane path getting there, and does it do so every time — task success, trajectory evals, and pass^k reliability, respectively. tau-bench popularized pass^k after showing agents that look fine at pass@1 collapse when you demand eight consecutive successes. SWE-bench and OSWorld set the template for realistic, execution-graded tasks.",
  "maxRank": 5,
  "ranks": [
   "Score an agent on end-task success",
   "Build a task suite with programmatic graders",
   "Grade trajectories, not just final answers",
   "Measure pass^k reliability across repeated runs",
   "Design eval suites teams trust to gate releases"
  ],
  "levelUp": "Build a 20-task eval with programmatic graders for your own agent, then run every task eight times and report pass^8 alongside pass@1. The gap between those two numbers is your roadmap.",
  "resources": [
   {
    "t": "tau-bench paper",
    "u": "https://arxiv.org/abs/2406.12045"
   },
   {
    "t": "SWE-agent paper",
    "u": "https://arxiv.org/abs/2405.15793"
   },
   {
    "t": "OSWorld benchmark",
    "u": "https://os-world.github.io/"
   }
  ]
 },
 "A22": {
  "long": "Guardrails are the deterministic layer around a probabilistic core: policy checks before tool calls, budget caps, credential scoping, and blast-radius reduction for when something slips through. The organizing threat model is Simon Willison's lethal trifecta — private data, untrusted content, and an exfiltration channel; an agent with all three is one injected sentence from disaster. Asking the model nicely in the system prompt is not a guardrail.",
  "maxRank": 5,
  "ranks": [
   "Add a deny-list and spend cap to an agent",
   "Enforce policy with deterministic pre-tool-call hooks",
   "Break the lethal trifecta by removing one leg",
   "Scope credentials and sandboxes so failures stay small",
   "Design layered guardrails that survive adversarial input"
  ],
  "levelUp": "Audit one production agent for the lethal trifecta and remove a leg — usually the exfiltration channel is easiest. Then migrate every 'please don't' rule in your prompts into an enforced hook.",
  "resources": [
   {
    "t": "The Lethal Trifecta",
    "u": "https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/"
   },
   {
    "t": "Claude Code hooks reference",
    "u": "https://code.claude.com/docs/en/hooks"
   }
  ]
 },
 "A23": {
  "long": "Instead of round-tripping every tool call and its output through the context window, the agent writes code that calls tools as ordinary APIs — loops, filters, and intermediate results stay in the runtime. Anthropic's code-execution-with-MCP write-up showed a workflow dropping from 150,000 tokens to about 2,000. The context window becomes a place for decisions, not data plumbing.",
  "maxRank": 4,
  "ranks": [
   "Have the agent script a multi-step tool sequence",
   "Keep intermediate results out of the context window",
   "Expose tool catalogs as importable code APIs",
   "Cut token spend an order of magnitude on tool-heavy work"
  ],
  "levelUp": "Find an agent loop that makes twenty-plus tool calls and convert it to one generated script running in a sandbox, then compare the token bills. Start with the programmatic tool calling docs and the MCP code-execution pattern.",
  "resources": [
   {
    "t": "Programmatic tool calling docs",
    "u": "https://platform.claude.com/docs/en/agents-and-tools/tool-use/programmatic-tool-calling"
   },
   {
    "t": "Code Execution with MCP",
    "u": "https://www.anthropic.com/engineering/code-execution-with-mcp"
   }
  ]
 },
 "A24": {
  "long": "One good skill is authorship; fifty skills across twelve teams is an engineering discipline. At scale the problems become versioning, eval-gated changes, discovery, and stopping two teams from shipping conflicting instructions for the same workflow — in practice you end up running an internal package registry where the packages are folders of markdown and scripts. Progressive disclosure keeps any of it from drowning the context window.",
  "maxRank": 4,
  "ranks": [
   "Author a skill with clean progressive disclosure",
   "Eval a skill before and after every change",
   "Version and distribute skills across teams",
   "Run an internal skill registry with eval gates"
  ],
  "levelUp": "Write a skill for a real recurring workflow on your team, build a ten-case eval for it, and only then publish it. The eval is what turns a prompt folder into infrastructure.",
  "resources": [
   {
    "t": "Equipping Agents with Skills",
    "u": "https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills"
   },
   {
    "t": "Anthropic skills repository",
    "u": "https://github.com/anthropics/skills"
   }
  ]
 },
 "A25": {
  "long": "AgentOps is CI/CD where the artifact under test is an agent: eval suites run on every harness change, prompts and tools and model pins are versioned together, and risky changes canary against a slice of traffic before full rollout. OTel GenAI traces feed regression triage, because 'the agent got worse' is not a bug report. If your prompt edits ship without a pipeline, you are deploying to production by vibes.",
  "maxRank": 5,
  "ranks": [
   "Run an eval suite in CI on harness changes",
   "Version prompts, tools, and model pins together",
   "Block merges on eval regressions",
   "Canary harness changes against live traffic",
   "Operate trace-driven triage across the whole pipeline"
  ],
  "levelUp": "Wire your existing eval suite into CI this week and pin every model version your harness touches. Add canary rollouts after the first regression escapes to production — there will be one.",
  "resources": [
   {
    "t": "OTel GenAI semantic conventions",
    "u": "https://github.com/open-telemetry/semantic-conventions/tree/main/docs/gen-ai"
   },
   {
    "t": "Claude Code GitHub Actions",
    "u": "https://code.claude.com/docs/en/github-actions"
   }
  ]
 },
 "A26": {
  "long": "An hours-to-days session outlives any context window, so the agent's real memory has to live outside it: state files, checkpoints, compaction, and a written protocol for picking up where a dead session left off. Scheduled triggers wake the agent to check on long jobs instead of it burning tokens polling. Anthropic's write-up on long-running harnesses is the canonical playbook.",
  "maxRank": 4,
  "ranks": [
   "Keep an agent productive past one context window",
   "Checkpoint progress so sessions resume after crashes",
   "Schedule triggers that wake and steer the agent",
   "Run multi-day sessions with clean self-resumption"
  ],
  "levelUp": "Give an agent a task too big for one context window, make it maintain a state file and a resume protocol, then kill the process midway and watch what happens. Iterate until the kill is boring.",
  "resources": [
   {
    "t": "Long-Running Agent Harnesses",
    "u": "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents"
   },
   {
    "t": "LangGraph persistence concepts",
    "u": "https://langchain-ai.github.io/langgraph/concepts/persistence/"
   }
  ]
 },
 "A27": {
  "long": "Ambient agents run headless in the cloud — fired by schedules, webhooks, and inbox events — and humans review the output asynchronously as PRs, drafts, and reports. The bottleneck quietly moves from writing prompts to reviewing results, which is why fleets without AgentOps discipline mostly generate unread tabs. LangChain coined the term; CI-triggered coding agents made it normal.",
  "maxRank": 4,
  "ranks": [
   "Run one headless agent on a schedule",
   "Route fleet output into async human review queues",
   "Tune triggers and batching to keep review load sane",
   "Operate a fleet whose output humans actually keep up with"
  ],
  "levelUp": "Automate one recurring chore end-to-end: a headless agent that triggers on schedule and opens a PR you review over coffee. Scale the fleet only once reviewing its work is reliably faster than doing the work.",
  "resources": [
   {
    "t": "Introducing Ambient Agents",
    "u": "https://www.langchain.com/blog/introducing-ambient-agents"
   },
   {
    "t": "Claude Code GitHub Actions",
    "u": "https://code.claude.com/docs/en/github-actions"
   }
  ]
 },
 "A28": {
  "long": "The capstone: agents that mine their own failure traces, draft patches to their own harness — prompts, tools, skills — and land them only through regression eval gates. The Darwin Gödel Machine showed the loop genuinely compounds on coding benchmarks; without the eval gate, it is just automated drift with confidence. Everything below this node exists so this node does not go wrong.",
  "maxRank": 5,
  "ranks": [
   "Turn one failure trace into a harness patch",
   "Automate failure-trace mining into patch proposals",
   "Gate every self-patch behind regression evals",
   "Close the loop from proposal to landing unattended",
   "Run harnesses that improve faster than you could improve them"
  ],
  "levelUp": "Build the pipeline in stages: cluster failed trajectories weekly, have an agent draft one prompt or skill patch, and let your eval suite — never you skimming a diff at 6pm — decide if it lands. The gate is the product.",
  "resources": [
   {
    "t": "Darwin Gödel Machine paper",
    "u": "https://arxiv.org/abs/2505.22954"
   },
   {
    "t": "Harness Engineering in 2026",
    "u": "https://www.faros.ai/blog/harness-engineering"
   }
  ]
 },
 "R1": {
  "long": "Search that matches what you meant rather than what you typed. It quietly powers photo apps, email, note tools, and every 'ask your docs' feature shipped since 2023 — you have probably used it a dozen times today without noticing. The trick is realizing you can search for 'that email about the flaky deploy' instead of guessing exact words.",
  "maxRank": 2,
  "ranks": [
   "Know search can match meaning, not just words",
   "Phrase queries as ideas and get better results"
  ],
  "levelUp": "Next time a search fails, retry it as a description of what you want rather than keywords, and notice which apps handle that well. Then skim what a vector database actually does under the hood.",
  "resources": [
   {
    "t": "What is a Vector Database",
    "u": "https://qdrant.tech/articles/what-is-a-vector-database/"
   },
   {
    "t": "OpenAI Embeddings Guide",
    "u": "https://platform.openai.com/docs/guides/embeddings"
   }
  ]
 },
 "R2": {
  "long": "RAG products let you ask questions over your own documents and get answers with citations, from Claude Projects to NotebookLM to whatever your company bolted onto Confluence. The skill is not asking the question — it is judging groundedness: does the answer actually follow from the cited passages, or did the model freelance. A confident answer with irrelevant citations is the classic failure to spot.",
  "maxRank": 2,
  "ranks": [
   "Have asked questions over your own documents",
   "Check answers against cited sources before trusting them"
  ],
  "levelUp": "Upload a document you know cold and ask questions you already know the answers to, including a few the document cannot answer. Watch how the tool behaves when the evidence is not there.",
  "resources": [
   {
    "t": "Contextual Retrieval (Anthropic)",
    "u": "https://www.anthropic.com/engineering/contextual-retrieval"
   },
   {
    "t": "Original RAG Paper",
    "u": "https://arxiv.org/abs/2005.11401"
   }
  ]
 },
 "R3": {
  "long": "Grep finds exactly what you typed; semantic search finds what you meant — and each embarrasses the other in the wrong setting. Exact match wins for error codes, IDs, function names, and legal phrasing; meaning match wins for concepts, paraphrases, and 'that thing about churn'. This is why production systems in 2026 almost always run both and fuse the results.",
  "maxRank": 2,
  "ranks": [
   "Know exact match and meaning match differ",
   "Pick keyword or semantic search correctly per task"
  ],
  "levelUp": "Run the same ten queries through grep-style search and a semantic tool and note which wins each one. The pattern you find is the entire argument for hybrid search later in the tree.",
  "resources": [
   {
    "t": "Hybrid Search Explained",
    "u": "https://weaviate.io/blog/hybrid-search-explained"
   }
  ]
 },
 "R4": {
  "long": "Embeddings turn text into vectors — long lists of numbers — arranged so that similar meanings land close together. 'Car' and 'automobile' end up neighbors; 'car' and 'carburetor manual returns policy' do not. Everything downstream in this tree, from search to RAG, is geometry on top of this one idea.",
  "maxRank": 3,
  "ranks": [
   "Know text becomes vectors where distance means similarity",
   "Can explain nearest-neighbor search to a colleague",
   "Understand dimensions, embedding space geometry, and their limits"
  ],
  "levelUp": "Embed a handful of sentences with any API and print the pairwise similarities — seeing 'dog' beat 'spreadsheet' as a neighbor of 'puppy' makes it click. Then read up on what embedding dimensions do and do not encode.",
  "resources": [
   {
    "t": "OpenAI Embeddings Guide",
    "u": "https://platform.openai.com/docs/guides/embeddings"
   },
   {
    "t": "Sentence-Transformers Docs",
    "u": "https://sbert.net/docs/quickstart.html"
   },
   {
    "t": "Sentence-BERT Paper",
    "u": "https://arxiv.org/abs/1908.10084"
   }
  ]
 },
 "R5": {
  "long": "Cosine similarity and dot product are the two lines of math that answer 'how alike are these sentences'. Cosine compares direction and ignores length; dot product cares about both, which matters when your model does not normalize its vectors. In practice most modern embedding models ship normalized, making the two identical — knowing when that assumption breaks is the actual skill.",
  "maxRank": 2,
  "ranks": [
   "Know cosine similarity scores how alike texts are",
   "Have computed cosine and dot product in code"
  ],
  "levelUp": "Write the cosine formula yourself in numpy once, compare it to the library version, then check whether your embedding model normalizes output. That one check prevents a surprisingly common class of bugs.",
  "resources": [
   {
    "t": "Sentence-Transformers Quickstart",
    "u": "https://sbert.net/docs/quickstart.html"
   },
   {
    "t": "OpenAI Embeddings Guide",
    "u": "https://platform.openai.com/docs/guides/embeddings"
   }
  ]
 },
 "R6": {
  "long": "Two roads to vectors: hosted APIs (OpenAI, Cohere, Voyage, Gemini) or running an open model locally with the sentence-transformers library. APIs are three lines of code and a per-token bill; local models are free after download and keep your data home. Either way, the boring parts — batching, caching, rate limits, and never mixing models between indexing and querying — are where the real work lives.",
  "maxRank": 3,
  "ranks": [
   "Know APIs and libraries turn text into vectors",
   "Have embedded text via an API or sentence-transformers",
   "Batch, cache, and handle rate limits comfortably"
  ],
  "levelUp": "Embed the same 100 sentences with one hosted API and one local sentence-transformers model, and compare cost, speed, and neighbor quality. Then add a cache so you never pay to embed the same text twice.",
  "resources": [
   {
    "t": "Sentence-Transformers Quickstart",
    "u": "https://sbert.net/docs/quickstart.html"
   },
   {
    "t": "OpenAI Embeddings Guide",
    "u": "https://platform.openai.com/docs/guides/embeddings"
   }
  ]
 },
 "R7": {
  "long": "The rite of passage: embed a few hundred texts, hold them in a numpy array, and answer queries with brute-force cosine similarity. No database, no framework, maybe forty lines of Python — and it is genuinely fast enough below about a hundred thousand vectors. Everyone who skips this step ends up debugging a vector database without knowing what it is supposed to be doing for them.",
  "maxRank": 3,
  "ranks": [
   "Have embedded a few hundred texts and searched them",
   "Built brute-force cosine search over a real corpus",
   "Eyeball result quality and tune top-k sensibly"
  ],
  "levelUp": "Build it over something you actually care about — your notes, bookmarks, or team wiki — and run twenty real queries against it. Judging where the results disappoint teaches more than any benchmark.",
  "resources": [
   {
    "t": "HF Course: Semantic Search",
    "u": "https://huggingface.co/learn/nlp-course/chapter5/6"
   },
   {
    "t": "Sentence-Transformers Quickstart",
    "u": "https://sbert.net/docs/quickstart.html"
   }
  ]
 },
 "R8": {
  "long": "MTEB is the leaderboard everyone checks and nobody should fully trust — models are increasingly tuned to it, and the top spot changes monthly. The literate move in 2026: use MTEB to shortlist three or four candidates for your language, domain, and budget, then run a small eval on fifty queries from your own data. The small eval wins every argument.",
  "maxRank": 3,
  "ranks": [
   "Know MTEB exists and what it ranks",
   "Shortlist models by task, language, and cost",
   "Run small evals on your own data before choosing"
  ],
  "levelUp": "Collect 50 real query-document pairs from your domain and measure recall@10 for three shortlisted models. Expect the leaderboard order to shuffle — that is the lesson.",
  "resources": [
   {
    "t": "MTEB Leaderboard",
    "u": "https://huggingface.co/spaces/mteb/leaderboard"
   },
   {
    "t": "MTEB Explained",
    "u": "https://huggingface.co/blog/mteb"
   },
   {
    "t": "MTEB Paper",
    "u": "https://arxiv.org/abs/2210.07316"
   }
  ]
 },
 "R9": {
  "long": "Once brute force stops scaling, vector databases like Qdrant, Weaviate, pgvector, and Pinecone use approximate nearest neighbor indexes — usually HNSW — to search millions of vectors in milliseconds. The trade is exactness for speed, tunable with recall knobs. The parts that actually bite in production are metadata filtering, payload design, and remembering that 'approximate' occasionally means 'missing the right answer'.",
  "maxRank": 3,
  "ranks": [
   "Know ANN indexes trade exact accuracy for speed",
   "Have loaded vectors into a vector database and queried it",
   "Tune HNSW parameters, filters, and payloads in production"
  ],
  "levelUp": "Take your brute-force script's corpus, load it into Qdrant or Weaviate locally via Docker, and verify the same queries return the same neighbors. Then add metadata filters and watch what they do to recall.",
  "resources": [
   {
    "t": "What is a Vector Database",
    "u": "https://qdrant.tech/articles/what-is-a-vector-database/"
   },
   {
    "t": "HNSW Explained (Pinecone)",
    "u": "https://www.pinecone.io/learn/series/faiss/hnsw/"
   },
   {
    "t": "Weaviate Vector Index Concepts",
    "u": "https://weaviate.io/developers/weaviate/concepts/vector-index"
   }
  ]
 },
 "R10": {
  "long": "Chunking — splitting documents into embeddable pieces — is the unglamorous step that decides whether your RAG system works, and bad chunking remains the #1 failure mode. Split mid-thought and retrieval returns fragments; chunk too big and the signal drowns; ignore document structure and tables become confetti. Techniques like structure-aware splitting and contextual retrieval (prepending situating context to each chunk) exist precisely because naive fixed-size splitting fails quietly.",
  "maxRank": 4,
  "ranks": [
   "Know documents get split before embedding",
   "Have tried fixed-size versus structure-aware splitting",
   "Match chunk size and overlap to your corpus",
   "Diagnose retrieval failures back to chunking decisions"
  ],
  "levelUp": "Take one gnarly real document — headers, tables, footnotes — chunk it three ways, and inspect what retrieval returns for the same ten queries. Then read Anthropic's contextual retrieval post and try prepending chunk context.",
  "resources": [
   {
    "t": "Chunking Strategies (Pinecone)",
    "u": "https://www.pinecone.io/learn/chunking-strategies/"
   },
   {
    "t": "Contextual Retrieval (Anthropic)",
    "u": "https://www.anthropic.com/engineering/contextual-retrieval"
   }
  ]
 },
 "R11": {
  "long": "The full loop: retrieve relevant chunks, stuff them into the prompt, generate an answer that cites its sources — ideally as structured output so the citations survive parsing. Wiring a demo takes an afternoon in 2026; making it refuse gracefully when the corpus has no answer is the part that separates demos from products. Most 'RAG is broken' complaints trace back to retrieval, which traces back to chunking.",
  "maxRank": 4,
  "ranks": [
   "Can sketch retrieve, augment, generate on a whiteboard",
   "Have wired retrieval into a prompt and gotten answers",
   "Return grounded answers with citations as structured output",
   "Run a RAG pipeline in production and could teach it"
  ],
  "levelUp": "Build the pipeline end to end over your own corpus with no framework first — retrieval call, prompt template, structured citations. Then add an eval set of 30 questions, including unanswerable ones, before touching any other knob.",
  "resources": [
   {
    "t": "Original RAG Paper",
    "u": "https://arxiv.org/abs/2005.11401"
   },
   {
    "t": "Contextual Retrieval (Anthropic)",
    "u": "https://www.anthropic.com/engineering/contextual-retrieval"
   },
   {
    "t": "Qdrant Documentation",
    "u": "https://qdrant.tech/documentation/"
   }
  ]
 },
 "R12": {
  "long": "Hybrid search runs dense vectors and BM25 keyword scoring side by side, applies metadata filters, and fuses the ranked lists — usually with Reciprocal Rank Fusion, which needs no score calibration and is pleasingly hard to get wrong. Dense catches paraphrases; BM25 catches error codes, names, and jargon that embeddings fumble. In 2026 this is not an optimization, it is the default baseline; pure dense retrieval is what you apologize for later.",
  "maxRank": 4,
  "ranks": [
   "Know hybrid means dense plus BM25 plus filters",
   "Have run BM25 and dense search side by side",
   "Fuse result lists with RRF as your baseline",
   "Tune fusion weights and filters from eval results"
  ],
  "levelUp": "Take your eval set and score dense-only, BM25-only, and RRF-fused retrieval — the fused column should win, and the per-query breakdown shows exactly which query types each side rescues. Most vector databases now do the fusion server-side, so try that next.",
  "resources": [
   {
    "t": "Hybrid Search Explained",
    "u": "https://weaviate.io/blog/hybrid-search-explained"
   },
   {
    "t": "Reciprocal Rank Fusion (Elastic)",
    "u": "https://www.elastic.co/guide/en/elasticsearch/reference/current/rrf.html"
   }
  ]
 },
 "R13": {
  "long": "Rerankers are the second stage: retrieval casts a wide net for the top 50-100 candidates, then a cross-encoder reads query and document together to re-score them properly — slower per pair, far more precise. The alternative is late interaction, ColBERT-style, which keeps per-token vectors for a middle ground between bi-encoder speed and cross-encoder accuracy. It is routinely the cheapest large quality win left in a pipeline that already does hybrid search.",
  "maxRank": 4,
  "ranks": [
   "Know rerankers re-score a shortlist for precision",
   "Have added a cross-encoder over top-50 results",
   "Compare cross-encoders with ColBERT-style late interaction",
   "Balance reranker latency, cost, and precision in production"
  ],
  "levelUp": "Bolt a reranker — a sentence-transformers cross-encoder or a hosted rerank API — onto your existing pipeline and re-run your eval set; measure the precision gain against the added latency. Then read the ColBERT paper to understand the late-interaction trade-off.",
  "resources": [
   {
    "t": "Cross-Encoders (sentence-transformers)",
    "u": "https://sbert.net/docs/cross_encoder/usage/usage.html"
   },
   {
    "t": "ColBERT Paper",
    "u": "https://arxiv.org/abs/2004.12832"
   },
   {
    "t": "Cohere Rerank Overview",
    "u": "https://docs.cohere.com/docs/rerank-overview"
   }
  ]
 },
 "M1": {
  "long": "NumPy arrays and pandas DataFrames are still how data gets shaped before anything learns from it, and notebooks are still where that shaping happens. Every branch of this tree quietly assumes you can load a messy CSV, groupby it into submission, and plot the result without googling the syntax twice.",
  "maxRank": 4,
  "ranks": [
   "Can load a CSV and poke at it",
   "Filter, groupby, and merge without constant lookups",
   "Reshape and vectorize fluently, avoiding row-by-row loops",
   "Handle awkward real-world data cleanly and teach others"
  ],
  "levelUp": "Take a genuinely messy dataset (public government data works well) and clean it end to end in a notebook, forcing yourself to use vectorized operations instead of loops. Then reread the pandas user guide sections on merging and reshaping — they pay off forever.",
  "resources": [
   {
    "t": "pandas documentation",
    "u": "https://pandas.pydata.org/docs/"
   },
   {
    "t": "NumPy documentation",
    "u": "https://numpy.org/doc/stable/"
   },
   {
    "t": "Python Data Science Handbook",
    "u": "https://jakevdp.github.io/PythonDataScienceHandbook/"
   }
  ]
 },
 "M2": {
  "long": "Before any model gets trained, someone has to decide whether the problem is supervised, unsupervised, reinforcement-shaped, or not ML at all — and that last category is bigger than most roadmaps admit. Good framing means defining the prediction target, the available signal, and what a wrong answer costs before touching data.",
  "maxRank": 3,
  "ranks": [
   "Know the supervised/unsupervised/RL distinction",
   "Frame a real problem as a prediction task with a target",
   "Spot non-ML problems and reframe vague asks into testable ones"
  ],
  "levelUp": "Work through Google's problem framing course, then practice on real requests: for each 'can we use AI for this?' you hear, write down the label, the features, and the cost of being wrong. If you can't, that is your answer.",
  "resources": [
   {
    "t": "Google ML Problem Framing",
    "u": "https://developers.google.com/machine-learning/problem-framing"
   },
   {
    "t": "Rules of ML",
    "u": "https://developers.google.com/machine-learning/guides/rules-of-ml"
   }
  ]
 },
 "M3": {
  "long": "Linear and logistic regression, decision trees, k-NN, random forests — the scikit-learn fit/predict canon. These models are fast, interpretable, and embarrassingly often good enough, which is why the estimator API they popularized became the lingua franca of classical ML.",
  "maxRank": 4,
  "ranks": [
   "Have run fit and predict on a toy dataset",
   "Train and compare several model families on real data",
   "Understand what each model assumes and when it breaks",
   "Pick the right model on sight and explain its failure modes"
  ],
  "levelUp": "Train four different model families on the same real dataset and explain why their errors differ — that comparison teaches more than any single model. The scikit-learn user guide's supervised learning chapter is the reference to actually read.",
  "resources": [
   {
    "t": "scikit-learn getting started",
    "u": "https://scikit-learn.org/stable/getting_started.html"
   },
   {
    "t": "Supervised learning guide",
    "u": "https://scikit-learn.org/stable/supervised_learning.html"
   }
  ]
 },
 "M4": {
  "long": "The skill that separates people who build models from people who build models that work outside the notebook. Train/test splits, cross-validation, leakage detection, and the discipline of establishing a dumb baseline before anything clever — most published-then-retracted results skipped one of these.",
  "maxRank": 4,
  "ranks": [
   "Know why you never test on training data",
   "Use cross-validation and pick sensible metrics",
   "Catch leakage and design splits that mirror deployment",
   "Design evaluation for messy real systems, including LLM ones"
  ],
  "levelUp": "Read scikit-learn's common pitfalls page, then audit one of your old projects for leakage — you will probably find some. Practice writing the baseline-first habit: predict the mean or majority class, and make every model earn its keep against that.",
  "resources": [
   {
    "t": "Cross-validation guide",
    "u": "https://scikit-learn.org/stable/modules/cross_validation.html"
   },
   {
    "t": "scikit-learn common pitfalls",
    "u": "https://scikit-learn.org/stable/common_pitfalls.html"
   }
  ]
 },
 "M5": {
  "long": "Encodings, scaling, interactions, and domain-specific features — on tabular data this is still where most of the accuracy lives, deep learning notwithstanding. A well-crafted ratio column routinely beats an extra hundred trees, and it always beats an apology in the postmortem.",
  "maxRank": 3,
  "ranks": [
   "Encode categoricals and scale numerics correctly",
   "Build domain features that measurably lift performance",
   "Design feature pipelines that survive production data drift"
  ],
  "levelUp": "Enter a tabular Kaggle competition and watch how much of the leaderboard gap is features rather than models. Learn scikit-learn's ColumnTransformer and Pipeline so your features are computed identically at train and inference time.",
  "resources": [
   {
    "t": "Preprocessing guide",
    "u": "https://scikit-learn.org/stable/modules/preprocessing.html"
   },
   {
    "t": "Kaggle feature engineering course",
    "u": "https://www.kaggle.com/learn/feature-engineering"
   }
  ]
 },
 "M6": {
  "long": "XGBoost and LightGBM remain the reigning default for tabular data in 2026, a fact that mildly annoys everyone who predicted otherwise for a decade straight. Gradient boosted trees are fast, robust to messy features, and win on structured data often enough that skipping them is malpractice; TabPFN offers a foundation-model middle ground for small datasets.",
  "maxRank": 4,
  "ranks": [
   "Have trained an XGBoost model with defaults",
   "Tune learning rate, depth, and early stopping sensibly",
   "Diagnose overfitting and use feature importance responsibly",
   "Squeeze out competitive performance and know when trees lose"
  ],
  "levelUp": "Train XGBoost and LightGBM on the same dataset and learn what each hyperparameter actually does by breaking things deliberately. Then read the XGBoost paper for the elegant math you have been benefiting from all along.",
  "resources": [
   {
    "t": "XGBoost documentation",
    "u": "https://xgboost.readthedocs.io/"
   },
   {
    "t": "LightGBM documentation",
    "u": "https://lightgbm.readthedocs.io/"
   },
   {
    "t": "XGBoost paper",
    "u": "https://arxiv.org/abs/1603.02754"
   }
  ]
 },
 "M7": {
  "long": "Clustering, PCA, UMAP, and anomaly detection: finding structure when nobody gave you labels. This branch matters double now because embeddings turned every document, image, and user into a point in high-dimensional space, and unsupervised methods are how you make sense of that space.",
  "maxRank": 3,
  "ranks": [
   "Have run k-means and PCA on real data",
   "Choose methods deliberately and validate clusters skeptically",
   "Apply these fluently to embeddings and high-dimensional data"
  ],
  "levelUp": "Cluster the embeddings of a few thousand documents and visualize them with UMAP — it is the fastest way to build intuition for both topics at once. Be properly suspicious: try different k values and random seeds, and see how stable your beautiful clusters really are.",
  "resources": [
   {
    "t": "Clustering guide",
    "u": "https://scikit-learn.org/stable/modules/clustering.html"
   },
   {
    "t": "UMAP documentation",
    "u": "https://umap-learn.readthedocs.io/"
   }
  ]
 },
 "M8": {
  "long": "Layers, losses, and gradient descent — the realization that a neural network is just a differentiable program and backprop is just the chain rule applied with great bookkeeping. Everything in the deep branch, transformers included, is this idea wearing increasingly elaborate hats.",
  "maxRank": 4,
  "ranks": [
   "Know what layers, weights, and losses are",
   "Have trained a small net and watched loss fall",
   "Can derive backprop and implement it from scratch",
   "Reason about gradient flow and architecture choices intuitively"
  ],
  "levelUp": "Work through Karpathy's Zero to Hero series and build micrograd yourself — implementing backprop by hand in a hundred lines permanently demystifies it. The 3Blue1Brown series is the best visual intuition; d2l.ai is the reference with runnable code.",
  "resources": [
   {
    "t": "Neural Networks: Zero to Hero",
    "u": "https://karpathy.ai/zero-to-hero.html"
   },
   {
    "t": "3Blue1Brown neural networks",
    "u": "https://www.3blue1brown.com/topics/neural-networks"
   },
   {
    "t": "Dive into Deep Learning",
    "u": "https://d2l.ai/"
   }
  ]
 },
 "M9": {
  "long": "Tensors, autograd, and the training loop you will write a hundred times: forward, loss, backward, step. PyTorch won the research world and most of production with it, so fluency here is the practical toll gate to everything deeper in this branch.",
  "maxRank": 4,
  "ranks": [
   "Can create tensors and run existing example code",
   "Write a full training loop from scratch",
   "Build custom modules, datasets, and debug shape errors quickly",
   "Profile, optimize, and structure real training codebases"
  ],
  "levelUp": "Write the same training loop three times without reference material until the forward-loss-backward-step rhythm is muscle memory. Then implement a paper's model from its architecture description alone — the gap between reading and reproducing is where the skill lives.",
  "resources": [
   {
    "t": "PyTorch Learn the Basics",
    "u": "https://pytorch.org/tutorials/beginner/basics/intro.html"
   },
   {
    "t": "PyTorch tutorials",
    "u": "https://pytorch.org/tutorials/"
   }
  ]
 },
 "M10": {
  "long": "Models never see words — they see BPE subword tokens, and that detail explains a surprising share of LLM weirdness: miscounted letters, mangled arithmetic, bloated costs on non-English text. Understanding tokenization is understanding why your context window and your API bill are both smaller than they look.",
  "maxRank": 3,
  "ranks": [
   "Know text becomes tokens, not words",
   "Explain BPE and predict token-count failure modes",
   "Reason about tokenizer effects on cost, languages, and behavior"
  ],
  "levelUp": "Paste text into a tokenizer playground and build intuition for what splits where — numbers, code, and non-English text are the revealing cases. Then read the original BPE paper or build a toy BPE tokenizer; it is shorter than you would expect.",
  "resources": [
   {
    "t": "BPE paper",
    "u": "https://arxiv.org/abs/1508.07909"
   },
   {
    "t": "Hugging Face Tokenizers docs",
    "u": "https://huggingface.co/docs/tokenizers"
   }
  ]
 },
 "M11": {
  "long": "Ollama for the one-command experience, llama.cpp for control, LM Studio for a GUI — running open-weight models on your own hardware is now a mundane skill rather than a party trick. The real craft is matching model size and quantization to your RAM and patience.",
  "maxRank": 3,
  "ranks": [
   "Have run a local model with Ollama",
   "Match model size and quant to hardware sensibly",
   "Serve local models for real use, tuned for throughput"
  ],
  "levelUp": "Run a 4B, an 8B, and the largest model your machine tolerates, and compare quality against speed on your actual tasks. Learn to read the memory math: parameter count times bytes per weight, plus KV cache, is your hardware bill.",
  "resources": [
   {
    "t": "Ollama",
    "u": "https://ollama.com/"
   },
   {
    "t": "llama.cpp",
    "u": "https://github.com/ggml-org/llama.cpp"
   },
   {
    "t": "LM Studio",
    "u": "https://lmstudio.ai/"
   }
  ]
 },
 "M12": {
  "long": "The Hub is the app store of open-weight AI: models, datasets, spaces, and the model cards and licenses that tell you what you are actually allowed to ship. Pipeline in three lines is the easy part; reading a license before your lawyer does is the skill.",
  "maxRank": 3,
  "ranks": [
   "Have downloaded a model from the Hub",
   "Use pipelines and read model cards critically",
   "Navigate licenses, versions, and the ecosystem fluently"
  ],
  "levelUp": "Run three different pipeline tasks, then read the full model card and license for each model you used — including the parts about training data and permitted use. The HF Learn courses are free and go deeper than most paid alternatives.",
  "resources": [
   {
    "t": "Hugging Face Learn",
    "u": "https://huggingface.co/learn"
   },
   {
    "t": "Hub documentation",
    "u": "https://huggingface.co/docs/hub"
   }
  ]
 },
 "M13": {
  "long": "The judgment call of 2026: knowing when a $0.0001-per-prediction XGBoost model beats an LLM on accuracy, latency, cost, and auditability all at once. Tabular prediction, high-volume classification, and anything needing millisecond responses usually belong to classical ML; the LLM is for when the input is language and the rules resist being written down.",
  "maxRank": 3,
  "ranks": [
   "Know both options exist for many problems",
   "Compare cost, latency, and accuracy honestly per problem",
   "Make and defend the call, including hybrid architectures"
  ],
  "levelUp": "Take one task you would reflexively hand to an LLM and build the boring classical version — measure cost per thousand predictions for both and let the spreadsheet argue. Study hybrid patterns too: LLMs generating labels for a small fast model to learn is a common 2026 production shape.",
  "resources": [
   {
    "t": "Rules of ML",
    "u": "https://developers.google.com/machine-learning/guides/rules-of-ml"
   },
   {
    "t": "TabPFN paper",
    "u": "https://arxiv.org/abs/2207.01848"
   }
  ]
 },
 "M14": {
  "long": "Optimizers, learning-rate schedules, and the dark art of reading loss curves like tea leaves — except the tea leaves are reproducible. Knowing whether you are overfitting, underfitting, or watching a subtle bug masquerade as convergence is what separates training models from merely running training scripts.",
  "maxRank": 4,
  "ranks": [
   "Know what a loss curve should look like",
   "Diagnose overfitting and adjust regularization or data",
   "Tune optimizers, schedules, and batch sizes deliberately",
   "Debug pathological training runs from curves alone"
  ],
  "levelUp": "Read Karpathy's training recipe and actually follow it: overfit a single batch first, add complexity one verified step at a time. Deliberately break a training run five different ways and study the loss curves — you are building a mental catalog of failure signatures.",
  "resources": [
   {
    "t": "A Recipe for Training",
    "u": "https://karpathy.github.io/2019/04/25/recipe/"
   },
   {
    "t": "Dive into Deep Learning",
    "u": "https://d2l.ai/"
   }
  ]
 },
 "M15": {
  "long": "Self-attention, RoPE positional encoding, the KV cache — the architecture behind essentially every frontier model since 2017, still wearing the same trench coat. Understanding it turns LLM behavior from magic into mechanism: context limits are cache memory, generation speed is attention cost, and long-context tricks are RoPE arithmetic.",
  "maxRank": 4,
  "ranks": [
   "Know attention lets tokens look at each other",
   "Trace a forward pass through a transformer block",
   "Have implemented attention and a GPT from scratch",
   "Reason about architecture variants, KV cache, and scaling trade-offs"
  ],
  "levelUp": "Build nanoGPT-style from scratch following Karpathy's video, then read Attention Is All You Need and notice how much of it you now recognize. Next, work out why the KV cache makes generation fast and what it costs in memory — that one calculation explains half of inference engineering.",
  "resources": [
   {
    "t": "Attention Is All You Need",
    "u": "https://arxiv.org/abs/1706.03762"
   },
   {
    "t": "The Illustrated Transformer",
    "u": "https://jalammar.github.io/illustrated-transformer/"
   },
   {
    "t": "RoPE paper",
    "u": "https://arxiv.org/abs/2104.09864"
   }
  ]
 },
 "M16": {
  "long": "Squashing weights from 16 bits down to 4 or 8 trades a sliver of quality for a model that actually fits in your RAM. GGUF is the format for local CPU/GPU inference via llama.cpp and friends, while GPU serving stacks lean on formats like AWQ and FP8 — knowing which quant level degrades gracefully is the practical skill.",
  "maxRank": 3,
  "ranks": [
   "Know quantization shrinks models with some quality loss",
   "Choose quant formats and levels for a given setup",
   "Evaluate quant quality loss rigorously on your tasks"
  ],
  "levelUp": "Run the same model at Q4, Q6, and Q8 on identical prompts and find where quality visibly drops for your use case — it varies by task more than the charts suggest. The Hub's GGUF docs explain the naming scheme that currently reads like license plates.",
  "resources": [
   {
    "t": "GGUF on the Hub",
    "u": "https://huggingface.co/docs/hub/gguf"
   },
   {
    "t": "QLoRA paper",
    "u": "https://arxiv.org/abs/2305.14314"
   }
  ]
 },
 "M17": {
  "long": "Llama, Qwen, Mistral, Gemma, DeepSeek and the rest of the open-weight field, which now reshuffles roughly quarterly. The durable skill is not memorizing the current leaderboard but reading it skeptically: benchmark contamination is real, vibes-based evals are worse, and the right question is always 'good at what, on my task?'",
  "maxRank": 3,
  "ranks": [
   "Can name the major open-weight families",
   "Track releases and read benchmarks with proper suspicion",
   "Select models via your own task-specific evals"
  ],
  "levelUp": "Pick three current open-weight models and run them on twenty prompts from your actual use case — your private mini-eval will disagree with public benchmarks, and it is the one that matters. Make a habit of reading model cards for training cutoffs and license terms before adopting anything.",
  "resources": [
   {
    "t": "Ollama model library",
    "u": "https://ollama.com/library"
   },
   {
    "t": "Hugging Face models",
    "u": "https://huggingface.co/models"
   }
  ]
 },
 "M18": {
  "long": "The decision tree of applied LLM work: prompt engineering first, RAG when the model needs knowledge it does not have, fine-tuning when it needs behavior it does not have. The 2026 shorthand holds up — fine-tuning is for form, not facts — and most teams who fine-tuned for facts have since quietly built a RAG pipeline.",
  "maxRank": 4,
  "ranks": [
   "Know the prompt/RAG/fine-tune menu exists",
   "Choose the right strategy for a given gap",
   "Have built a RAG pipeline or run a LoRA fine-tune",
   "Design and evaluate full adaptation stacks in production"
  ],
  "levelUp": "Take one real task and attack it three ways — better prompting, a small RAG setup, a LoRA fine-tune on a few hundred examples — and compare cost, effort, and quality. Read the RAG and LoRA papers; both are more readable than their citation counts imply.",
  "resources": [
   {
    "t": "RAG paper",
    "u": "https://arxiv.org/abs/2005.11401"
   },
   {
    "t": "LoRA paper",
    "u": "https://arxiv.org/abs/2106.09685"
   },
   {
    "t": "PEFT documentation",
    "u": "https://huggingface.co/docs/peft"
   }
  ]
 },
 "M19": {
  "long": "Supervised fine-tuning is where a base model learns to actually hold a conversation: chat templates, loss masking on the prompt, and data that teaches behavior rather than trivia. The field's LIMA-era lesson still holds in 2026 — a few thousand carefully curated examples routinely beat millions of scraped ones. SFT is now mostly the opening move of a longer post-training pipeline, not the finale.",
  "maxRank": 4,
  "ranks": [
   "Have fine-tuned a chat model on a small dataset",
   "Apply chat templates and loss masking correctly",
   "Curate small high-signal datasets that beat scraped ones",
   "Design SFT stages within a full post-training pipeline"
  ],
  "levelUp": "Run a real SFT job with TRL or Unsloth on a 1k-example dataset you curated yourself, and inspect the tokenized batches to confirm the template and masking are right. Then A/B a hand-filtered dataset against a 10x larger scraped one and measure which wins on your eval.",
  "resources": [
   {
    "t": "Chat templating docs",
    "u": "https://huggingface.co/docs/transformers/chat_templating"
   },
   {
    "t": "LIMA: Less Is More",
    "u": "https://arxiv.org/abs/2305.11206"
   },
   {
    "t": "TRL documentation",
    "u": "https://huggingface.co/docs/trl/index"
   }
  ]
 },
 "M20": {
  "long": "LoRA freezes the base weights and trains small low-rank adapter matrices instead, cutting trainable parameters by orders of magnitude. QLoRA adds 4-bit quantization of the frozen base, which is why fine-tuning a 30B-class model on a single consumer GPU stopped being a party trick and became a Tuesday. In 2026 adapters remain the default for domain and style tuning, while behavior-heavy changes still tend to want full fine-tuning or RL.",
  "maxRank": 4,
  "ranks": [
   "Have trained your first LoRA adapter",
   "Tune rank, alpha, and target modules deliberately",
   "Run QLoRA fine-tunes of large models on one GPU",
   "Know when adapters fail and full fine-tuning wins"
  ],
  "levelUp": "Fine-tune the same model three ways — rank 8, rank 64, and all-linear-layers targeted — and eval the differences instead of trusting folklore. Then do a QLoRA run of the biggest model your GPU fits and compare it honestly against the smaller full fine-tune.",
  "resources": [
   {
    "t": "LoRA paper",
    "u": "https://arxiv.org/abs/2106.09685"
   },
   {
    "t": "QLoRA paper",
    "u": "https://arxiv.org/abs/2305.14314"
   },
   {
    "t": "PEFT documentation",
    "u": "https://huggingface.co/docs/peft/index"
   }
  ]
 },
 "M21": {
  "long": "vLLM and SGLang turned model serving into a two-horse race of open-source engines, both speaking the OpenAI-compatible API that everything else assumes. The core craft is trading throughput against latency: batch bigger for tokens-per-dollar, batch smaller for time-to-first-token. Most 'the model is slow' complaints in 2026 are really 'someone left the serving flags at defaults'.",
  "maxRank": 4,
  "ranks": [
   "Have served a model behind an OpenAI-compatible endpoint",
   "Tune vLLM or SGLang flags for your workload",
   "Trade throughput against latency with explicit SLOs",
   "Operate production serving with monitoring and autoscaling"
  ],
  "levelUp": "Serve the same model on vLLM and SGLang, benchmark both with a realistic request mix, and learn what each flag actually moved. Then define a latency SLO and tune max batch size, KV cache fraction, and scheduling until you hit it.",
  "resources": [
   {
    "t": "vLLM documentation",
    "u": "https://docs.vllm.ai/"
   },
   {
    "t": "SGLang documentation",
    "u": "https://docs.sglang.ai/"
   }
  ]
 },
 "M22": {
  "long": "Reading a leaderboard in 2026 is an exercise in applied skepticism: MMLU-class benchmarks are saturated, contamination is the default assumption, and a two-point gap usually means nothing. The differentiators now are hard reasoning sets, agentic software tasks, and long-horizon evals that models cannot memorize their way through. Benchmark literacy is knowing which numbers still carry signal and which are marketing.",
  "maxRank": 3,
  "ranks": [
   "Read a leaderboard without taking it at face value",
   "Spot saturation and contamination in reported scores",
   "Know which benchmarks still separate frontier models"
  ],
  "levelUp": "Pick one saturated benchmark and one live differentiator (say GPQA or SWE-bench-style agentic evals) and read how each is constructed, scored, and gamed. Track a few frontier releases and note which reported numbers actually predicted real-world capability.",
  "resources": [
   {
    "t": "MMLU paper",
    "u": "https://arxiv.org/abs/2009.03300"
   },
   {
    "t": "GPQA paper",
    "u": "https://arxiv.org/abs/2311.12022"
   },
   {
    "t": "SWE-bench paper",
    "u": "https://arxiv.org/abs/2310.06770"
   }
  ]
 },
 "M23": {
  "long": "Scaling laws showed that loss falls predictably with compute, parameters, and data, and Chinchilla showed most models were undertrained on data. By the mid-2020s the easy wins ran out — high-quality text is finite and the loss curve's returns went flat relative to cost — which is why the action moved to post-training, reasoning RL, and synthetic data. You still need the pretraining mental model to understand why everything downstream works the way it does.",
  "maxRank": 4,
  "ranks": [
   "Can explain loss curves and compute-optimal training",
   "Apply Chinchilla-style budgeting to model and data size",
   "Have run a small pretraining job end to end",
   "Reason about data walls and post-training-era scaling"
  ],
  "levelUp": "Read Kaplan then Chinchilla and work the compute-optimal math for a model you care about. Then pretrain a small transformer yourself on a few billion tokens — nothing teaches loss-curve intuition like watching one for a week.",
  "resources": [
   {
    "t": "Scaling Laws paper",
    "u": "https://arxiv.org/abs/2001.08361"
   },
   {
    "t": "Chinchilla paper",
    "u": "https://arxiv.org/abs/2203.15556"
   }
  ]
 },
 "M24": {
  "long": "Preference optimization teaches models what better means using pairs of chosen and rejected responses. DPO collapsed the old RLHF reward-model-plus-PPO machinery into a single stable loss, and the DPO family (DPO, ORPO, KTO) is now the standard middle act of post-training, with classic RLHF firmly in the legacy column. The hard part was never the loss function; it is getting preference data that expresses what you actually want.",
  "maxRank": 4,
  "ranks": [
   "Can explain why preference pairs beat raw demonstrations",
   "Have run DPO on a real preference dataset",
   "Choose among DPO, ORPO, and KTO by data shape",
   "Diagnose reward hacking and preference-data pathologies"
  ],
  "levelUp": "Run DPO with TRL on an open preference dataset, then build a few hundred pairs of your own and watch how much the data quality dominates the hyperparameters. Study failure cases — verbosity bias and sycophancy are preference-data artifacts you should learn to spot on sight.",
  "resources": [
   {
    "t": "DPO paper",
    "u": "https://arxiv.org/abs/2305.18290"
   },
   {
    "t": "TRL documentation",
    "u": "https://huggingface.co/docs/trl/index"
   }
  ]
 },
 "M25": {
  "long": "RLVR — reinforcement learning from verifiable rewards — swaps the learned reward model for a checker that can actually grade the answer: unit tests, math verification, exact match. GRPO, popularized by DeepSeekMath and then R1, made the optimization cheap by ranking groups of sampled responses instead of training a value network. Together they are the recipe behind essentially every 2026 reasoning model, limited mainly by what you can reliably score.",
  "maxRank": 4,
  "ranks": [
   "Can explain verifiable rewards versus learned reward models",
   "Have run GRPO on tasks with checkable answers",
   "Stabilize RLVR runs with KL control and curricula",
   "Design RLVR recipes that move frontier-style evals"
  ],
  "levelUp": "Reproduce a small GRPO run on math problems with TRL — watch response length and pass rate evolve together, which is the signature RLVR dynamic. Then read the DeepSeekMath and R1 papers closely; most of the practical recipe is in the details people skim.",
  "resources": [
   {
    "t": "DeepSeekMath GRPO paper",
    "u": "https://arxiv.org/abs/2402.03300"
   },
   {
    "t": "DeepSeek-R1 paper",
    "u": "https://arxiv.org/abs/2501.12948"
   },
   {
    "t": "Tulu 3 RLVR paper",
    "u": "https://arxiv.org/abs/2411.15124"
   }
  ]
 },
 "M26": {
  "long": "Most fine-tuning data in 2026 is written by other models: a strong teacher generates, a filter discards, a student trains. Distilling long reasoning traces into small models — the R1-distill move — remains the cheapest way to make a 7B model punch above its weight. The craft is in filtering and diversity, since unfiltered self-generated data is how you get model collapse and a very confident model with three opinions.",
  "maxRank": 4,
  "ranks": [
   "Have generated training data with a teacher model",
   "Filter and deduplicate synthetic data before training",
   "Distill reasoning traces into small student models",
   "Run scaled synthetic pipelines without model collapse"
  ],
  "levelUp": "Build a Self-Instruct-style pipeline: generate with a frontier teacher, filter with a verifier or judge, train a small student, and eval the delta. Then distill reasoning traces specifically and compare the student against its non-distilled twin on held-out hard problems.",
  "resources": [
   {
    "t": "Knowledge distillation paper",
    "u": "https://arxiv.org/abs/1503.02531"
   },
   {
    "t": "Self-Instruct paper",
    "u": "https://arxiv.org/abs/2212.10560"
   },
   {
    "t": "DeepSeek-R1 distillation",
    "u": "https://arxiv.org/abs/2501.12948"
   }
  ]
 },
 "M27": {
  "long": "Inference optimization is the study of why your GPU is idle while your users wait. Continuous batching keeps the decode step full, paged KV cache (vLLM's PagedAttention) stops memory fragmentation from eating your batch size, and speculative decoding uses a small draft model to skip ahead when the big model would have agreed anyway. These three ideas account for most of the order-of-magnitude serving gains since 2023.",
  "maxRank": 4,
  "ranks": [
   "Can explain prefill, decode, and the KV cache",
   "Measure TTFT and tokens per second properly",
   "Deploy speculative decoding and tune batching for wins",
   "Profile and remove bottlenecks across the serving stack"
  ],
  "levelUp": "Benchmark a served model while sweeping batch size and watch where prefill-bound flips to decode-bound. Then enable speculative decoding and measure the acceptance rate — it teaches you more about the technique than any blog post.",
  "resources": [
   {
    "t": "PagedAttention paper",
    "u": "https://arxiv.org/abs/2309.06180"
   },
   {
    "t": "Speculative decoding paper",
    "u": "https://arxiv.org/abs/2211.17192"
   },
   {
    "t": "vLLM documentation",
    "u": "https://docs.vllm.ai/"
   }
  ]
 },
 "M28": {
  "long": "Public benchmarks tell you almost nothing about your task, so serious teams build their own eval sets and often use an LLM as the judge. Judges are cheap and scalable but come with documented biases — position, verbosity, self-preference — that you correct with rubrics, swapped orderings, and periodic human spot-checks. Eval-driven development is the 2026 orthodoxy: no prompt, model, or pipeline change ships without a number attached.",
  "maxRank": 4,
  "ranks": [
   "Have written a task-specific eval set by hand",
   "Run an LLM judge with rubrics and spot-checks",
   "Correct for judge biases like position and verbosity",
   "Practice eval-driven development across a whole product"
  ],
  "levelUp": "Write 50 eval cases from real failures of your own system, then build a rubric-based judge and measure its agreement with your own labels before trusting it. Read Hamel Husain's evals writing and the LLM-as-judge paper for the bias catalog.",
  "resources": [
   {
    "t": "LLM-as-a-Judge paper",
    "u": "https://arxiv.org/abs/2306.05685"
   },
   {
    "t": "Hamel Husain on evals",
    "u": "https://hamel.dev/blog/posts/evals/"
   }
  ]
 },
 "M29": {
  "long": "Before SAEs and circuit tracing there is the humble toolkit: attention visualizations, linear probes on hidden states, and the logit lens, which asks what the model would predict if you stopped it at layer N. These techniques are quick, occasionally misleading, and still the fastest way to form a first hypothesis about what a model is doing. Think of them as the stethoscope before the MRI.",
  "maxRank": 3,
  "ranks": [
   "Have visualized attention patterns in a real model",
   "Use probes and the logit lens on hidden states",
   "Form and test hypotheses about model internals"
  ],
  "levelUp": "Implement the logit lens on a small open model in a notebook — it is about twenty lines — and trace how a prediction sharpens across layers. Then train a linear probe for some property and check whether the model represents it where you expected.",
  "resources": [
   {
    "t": "The logit lens",
    "u": "https://www.lesswrong.com/posts/AcKRB8wDpdaN6v6ru/interpreting-gpt-the-logit-lens"
   },
   {
    "t": "Transformer Circuits framework",
    "u": "https://transformer-circuits.pub/2021/framework/index.html"
   }
  ]
 },
 "M30": {
  "long": "Mixture-of-experts replaces each dense FFN with many experts and a router that activates only a few per token, so a model can have vast total parameters while paying compute for a fraction of them. That total-versus-active split is why nearly every frontier model in 2026 is MoE — it is simply better loss per FLOP at scale. The costs are real too: routing instability, load-balancing losses, and serving infrastructure that has to hold all those idle experts somewhere.",
  "maxRank": 4,
  "ranks": [
   "Can explain experts, routers, and sparse activation",
   "Read MoE configs: active versus total parameters",
   "Diagnose load balancing and routing collapse",
   "Reason about MoE trade-offs in training and serving"
  ],
  "levelUp": "Read Switch Transformers for the fundamentals, then the DeepSeek-V3 report for the modern recipe — fine-grained experts, shared experts, and auxiliary-loss-free balancing. Serve an open MoE model locally and note how memory and throughput behave differently from a dense model.",
  "resources": [
   {
    "t": "Switch Transformers paper",
    "u": "https://arxiv.org/abs/2101.03961"
   },
   {
    "t": "Mixtral paper",
    "u": "https://arxiv.org/abs/2401.04088"
   },
   {
    "t": "DeepSeek-V3 report",
    "u": "https://arxiv.org/abs/2412.19437"
   }
  ]
 },
 "M31": {
  "long": "Vision-language models bolt a vision encoder onto an LLM and argue about the joint in between: a simple projection layer (the LLaVA school), cross-attention (the Flamingo school), or native early fusion trained on interleaved data from scratch. By 2026 the frontier defaults to natively multimodal training, but the projector-plus-instruction-tuning recipe is still how most people build a custom VLM on a budget. Data quality in image-text pairs matters as much as it did in text SFT, which is to say: more than the architecture.",
  "maxRank": 4,
  "ranks": [
   "Can explain vision encoders and projection layers",
   "Have fine-tuned a VLM on image-text pairs",
   "Compare fusion approaches and interleaved training choices",
   "Train multimodal models that hold up on real tasks"
  ],
  "levelUp": "Fine-tune an open VLM in the LLaVA style on a domain dataset — documents or charts are a good test because they punish sloppy visual grounding. Read CLIP, Flamingo, and LLaVA in that order; the lineage explains almost every design you will meet.",
  "resources": [
   {
    "t": "CLIP paper",
    "u": "https://arxiv.org/abs/2103.00020"
   },
   {
    "t": "Flamingo paper",
    "u": "https://arxiv.org/abs/2204.14198"
   },
   {
    "t": "LLaVA paper",
    "u": "https://arxiv.org/abs/2304.08485"
   }
  ]
 },
 "M32": {
  "long": "Reasoning models discovered that you can buy accuracy at inference time: let the model think longer, sample several attempts in parallel, and pick the best. Thinking budgets are now a product dial — users and APIs choose how many tokens of deliberation a query deserves — and the s1 result showed even blunt budget-forcing works. The economics are the catch, since test-time compute is paid on every request, forever.",
  "maxRank": 4,
  "ranks": [
   "Can explain why more thinking tokens buy accuracy",
   "Tune thinking budgets against cost and latency",
   "Use parallel sampling with verifier-based selection",
   "Train models to reason via RL on long chains"
  ],
  "levelUp": "Sweep thinking budgets on a hard eval set and plot accuracy against tokens spent — the curve's knee is where your product should live. Then implement best-of-n with a verifier and compare it to just thinking longer on a single sample.",
  "resources": [
   {
    "t": "DeepSeek-R1 paper",
    "u": "https://arxiv.org/abs/2501.12948"
   },
   {
    "t": "s1: simple test-time scaling",
    "u": "https://arxiv.org/abs/2501.19393"
   }
  ]
 },
 "M33": {
  "long": "RL environments are where post-training meets the verifier problem: you can't reward what you can't score, so the environment and its checker define what the model can learn. Easy domains have exact answers; the frontier is building verifiers for messy tasks — code that must pass hidden tests, agents that must leave a system in the right state — without leaving loopholes for reward hacking. In 2026, good environments are scarcer and more valuable than good training code.",
  "maxRank": 4,
  "ranks": [
   "Can explain the verifier problem in one sentence",
   "Have built an environment with a programmatic verifier",
   "Harden verifiers against reward hacking and false positives",
   "Design environment suites that teach transferable skills"
  ],
  "levelUp": "Build one environment end to end — task generator, rollout harness, verifier — and then spend a day actively trying to cheat your own verifier before any model does. Study how Tulu 3 constructed its verifiable tasks and how SWE-bench uses tests as ground truth.",
  "resources": [
   {
    "t": "Tulu 3 RLVR paper",
    "u": "https://arxiv.org/abs/2411.15124"
   },
   {
    "t": "SWE-bench paper",
    "u": "https://arxiv.org/abs/2310.06770"
   },
   {
    "t": "TRL documentation",
    "u": "https://huggingface.co/docs/trl/index"
   }
  ]
 },
 "M34": {
  "long": "The capstone recipe of 2026: SFT on curated agent traces to teach tool syntax, RLVR on verifiable single tasks to teach correctness, then full agentic RL in multi-turn tool environments to teach judgment over long horizons. It pulls together everything upstream — MoE base models, environments, verifiers, evals, and serving infrastructure that can handle training-time rollouts. This is how coding and computer-use agents are actually made, and very few teams have run the whole pipeline.",
  "maxRank": 5,
  "ranks": [
   "Understand the SFT-to-RLVR-to-agentic-RL pipeline",
   "Have fine-tuned a model on agent tool-use traces",
   "Run RLVR on single-turn verifiable tool tasks",
   "Train agents with multi-turn RL in tool environments",
   "Own a full agentic post-training recipe at scale"
  ],
  "levelUp": "Start by SFT-ing a small model on traces from a strong agent in one environment you built, then add a verifiable reward and graduate to multi-turn RL on the same tasks. Measure with agentic benchmarks like SWE-bench-style suites, not chat evals — the failure modes are completely different.",
  "resources": [
   {
    "t": "DeepSeek-R1 paper",
    "u": "https://arxiv.org/abs/2501.12948"
   },
   {
    "t": "SWE-bench paper",
    "u": "https://arxiv.org/abs/2310.06770"
   },
   {
    "t": "TRL documentation",
    "u": "https://huggingface.co/docs/trl/index"
   }
  ]
 },
 "M35": {
  "long": "Sparse autoencoders decompose a model's activations into interpretable features, and attribution graphs trace how those features chain into circuits that produce a behavior — Anthropic's 'biology' work walked through planning, multilingual circuits, and unfaithful reasoning in a production-class model. In 2026 this is crossing from research into practice: debugging why a model does something by looking inside it, not just prompting around it. Neuronpedia makes much of this browsable without training your own SAEs.",
  "maxRank": 4,
  "ranks": [
   "Can explain what an SAE feature represents",
   "Explore features and circuits in existing SAE tooling",
   "Trace a specific model behavior to internal features",
   "Apply interp findings to debug production model behavior"
  ],
  "levelUp": "Spend an afternoon in Neuronpedia steering features on an open model, then reproduce a small SAE training run on residual-stream activations. Read Scaling Monosemanticity and the attribution-graphs biology paper — they are the field's current textbooks.",
  "resources": [
   {
    "t": "Scaling Monosemanticity",
    "u": "https://transformer-circuits.pub/2024/scaling-monosemanticity/index.html"
   },
   {
    "t": "Biology of an LLM",
    "u": "https://transformer-circuits.pub/2025/attribution-graphs/biology.html"
   },
   {
    "t": "Neuronpedia",
    "u": "https://www.neuronpedia.org/"
   }
  ]
 },
 "M36": {
  "long": "At scale, prefill and decode want different hardware profiles, so modern deployments disaggregate them onto separate GPU pools and ship the KV cache between them — the DistServe and Mooncake lineage that vLLM and SGLang now support natively. Layer on tensor, pipeline, and expert parallelism for trillion-parameter MoE models and serving becomes a distributed-systems discipline with its own failure modes. This is the skill that turns one fast GPU into a coherent fleet.",
  "maxRank": 4,
  "ranks": [
   "Can explain prefill/decode disaggregation and why it wins",
   "Run tensor and pipeline parallel serving across GPUs",
   "Operate disaggregated clusters with KV-cache transfer",
   "Design multi-node serving for frontier-scale MoE"
  ],
  "levelUp": "Serve a model with tensor parallelism across two GPUs and measure what the interconnect costs you, then set up a small prefill/decode disaggregated deployment with vLLM or SGLang. Read DistServe and Mooncake for the architecture arguments — they map directly onto today's production stacks.",
  "resources": [
   {
    "t": "DistServe paper",
    "u": "https://arxiv.org/abs/2401.09670"
   },
   {
    "t": "Mooncake paper",
    "u": "https://arxiv.org/abs/2407.00079"
   },
   {
    "t": "vLLM documentation",
    "u": "https://docs.vllm.ai/"
   }
  ]
 },
 "A1": {
  "long": "The foundational trick behind every agent: the model emits a typed function call as JSON, your code executes it, and the result goes back into context. Every provider ships it, and in 2026 it is table stakes — the interesting problems have moved up the stack to what tools you expose and how you describe them. Get this wrong and nothing above it works.",
  "maxRank": 3,
  "ranks": [
   "Know what a tool call is and why it matters",
   "Have wired a tool call round-trip in a toy project",
   "Design tool schemas that models use reliably in production"
  ],
  "levelUp": "Write a raw API script (no framework) that defines two tools, executes the model's calls, and feeds results back until the model answers. Then rewrite one tool description and watch how much behavior changes.",
  "resources": [
   {
    "t": "Claude tool use docs",
    "u": "https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview"
   },
   {
    "t": "OpenAI function calling guide",
    "u": "https://platform.openai.com/docs/guides/function-calling"
   },
   {
    "t": "Building effective agents",
    "u": "https://www.anthropic.com/engineering/building-effective-agents"
   }
  ]
 },
 "A2": {
  "long": "Constrained decoding forces the model's output to conform to a JSON Schema, so your parser never sees a rogue trailing comma again. All major APIs now support strict schema-enforced outputs natively, which turned a whole genre of retry-and-regex code into a config flag. The remaining skill is schema design: what you ask for shapes what the model thinks about.",
  "maxRank": 3,
  "ranks": [
   "Know why schema-enforced output beats prompt begging",
   "Have shipped a feature using strict JSON Schema outputs",
   "Design schemas that improve model reasoning, not just parsing"
  ],
  "levelUp": "Take a flaky prompt that says 'respond in JSON' and convert it to a strict schema with enums and descriptions on every field. Compare failure rates, then experiment with field ordering and optional fields to see how schema shape steers the model.",
  "resources": [
   {
    "t": "OpenAI structured outputs guide",
    "u": "https://platform.openai.com/docs/guides/structured-outputs"
   },
   {
    "t": "JSON Schema reference",
    "u": "https://json-schema.org/learn"
   }
  ]
 },
 "A3": {
  "long": "The core pattern of 2026: gather context, act through tools, verify the result, repeat until done or out of budget. ReAct named it back in 2022; today it is the inner loop of every coding agent and harness you touch. Understanding where loops stall, drift, or burn tokens is what separates people who use agents from people who build them.",
  "maxRank": 3,
  "ranks": [
   "Know the gather-act-verify loop and its failure modes",
   "Have implemented a bare loop with your own stop logic",
   "Diagnose stalled or drifting loops from raw transcripts"
  ],
  "levelUp": "Build the loop yourself in under 100 lines — model, tools, while-loop, stop condition — before touching any framework. Then read transcripts of a real agent session and annotate where context gathering, action, and verification actually happen.",
  "resources": [
   {
    "t": "Building effective agents",
    "u": "https://www.anthropic.com/engineering/building-effective-agents"
   },
   {
    "t": "ReAct paper",
    "u": "https://arxiv.org/abs/2210.03629"
   }
  ]
 },
 "A4": {
  "long": "The Model Context Protocol is the USB-C of the agent world: one standard interface for exposing tools, resources, and prompts to any client. Since roughly everything speaks it now, knowing the primitives — servers, clients, tools, resources — is basic literacy. The 2026-era nuance is knowing when MCP is the right layer and when a plain library call or a skill folder is cheaper.",
  "maxRank": 3,
  "ranks": [
   "Know MCP's primitives and what problem it solves",
   "Have connected an existing MCP server to an agent",
   "Choose correctly between MCP, direct APIs, and skills"
  ],
  "levelUp": "Wire two off-the-shelf MCP servers into a client you use daily and inspect the actual JSON-RPC traffic. Then read the spec's section on tools versus resources until the distinction stops feeling arbitrary.",
  "resources": [
   {
    "t": "MCP official site",
    "u": "https://modelcontextprotocol.io"
   },
   {
    "t": "Building effective agents",
    "u": "https://www.anthropic.com/engineering/building-effective-agents"
   }
  ]
 },
 "A5": {
  "long": "Anyone can decorate a function; the craft is writing tool names, descriptions, and outputs that a model actually uses well under pressure. The classic 2026 failure is token bloat — servers that dump forty tools and kilobyte responses into context and wonder why the agent got dumber. Good servers curate few, high-leverage tools and return exactly what the next step needs.",
  "maxRank": 3,
  "ranks": [
   "Have built a working MCP server from the quickstart",
   "Write tool descriptions that measurably improve agent success",
   "Design lean production servers that respect the context budget"
  ],
  "levelUp": "Build a server for a real API you use, then test it by watching an agent fumble with it and revising descriptions until it stops. Read Anthropic's tool-writing guide and cut your server's token footprint in half without losing capability.",
  "resources": [
   {
    "t": "MCP server quickstart",
    "u": "https://modelcontextprotocol.io/quickstart/server"
   },
   {
    "t": "Writing effective tools",
    "u": "https://www.anthropic.com/engineering/writing-tools-for-agents"
   },
   {
    "t": "Code execution with MCP",
    "u": "https://www.anthropic.com/engineering/code-execution-with-mcp"
   }
  ]
 },
 "A6": {
  "long": "Agent skills package procedural knowledge as folders with a SKILL.md that loads progressively — name and description first, full instructions and bundled scripts only when relevant. Now an open cross-vendor standard, they solved the problem MCP does not: teaching an agent how to do something, not just giving it levers. Cheap to write, absurdly high leverage, and mostly just good technical writing.",
  "maxRank": 3,
  "ranks": [
   "Know how progressive loading keeps skills cheap",
   "Have written a skill an agent uses correctly",
   "Maintain a skill library your whole team relies on"
  ],
  "levelUp": "Pick a task you have explained to an agent three times and turn the explanation into a SKILL.md with a crisp description line. Test whether the agent triggers it at the right moments, then iterate on the description — triggering is the hard part.",
  "resources": [
   {
    "t": "Agent Skills announcement",
    "u": "https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills"
   },
   {
    "t": "Anthropic skills repository",
    "u": "https://github.com/anthropics/skills"
   },
   {
    "t": "Simon Willison on skills",
    "u": "https://simonwillison.net/2025/Oct/16/claude-skills/"
   }
  ]
 },
 "A7": {
  "long": "Agent = Model + Harness, and this skill is the harness: picking an SDK, wiring tools, prompts, and stop conditions into something that completes real tasks. The 2026 landscape has consolidated around a few serious options — Claude Agent SDK, OpenAI Agents SDK, LangGraph — that handle the loop plumbing so you can focus on tool design and context flow. The gap between a demo agent and a dependable one lives entirely in the harness.",
  "maxRank": 4,
  "ranks": [
   "Know what a harness does beyond calling the model",
   "Have built a working agent with a current SDK",
   "Ship an agent that handles real tasks unattended",
   "Design harnesses others build production agents on"
  ],
  "levelUp": "Build the same small agent twice — once raw, once with an SDK — so you know exactly what the framework buys you. Then give it a task with a verifiable outcome and iterate on the harness, not the prompt, until it succeeds unattended.",
  "resources": [
   {
    "t": "Building with Claude Agent SDK",
    "u": "https://www.anthropic.com/engineering/building-agents-with-the-claude-agent-sdk"
   },
   {
    "t": "OpenAI Agents SDK",
    "u": "https://openai.github.io/openai-agents-python/"
   },
   {
    "t": "LangGraph docs",
    "u": "https://langchain-ai.github.io/langgraph/"
   }
  ]
 },
 "A8": {
  "long": "Loop engineering is the discipline of making agent loops terminate well: verifiable goals, iteration caps, token and dollar budgets, and explicit criteria for done versus stuck. An agent without these is a while-true loop with a credit card. In 2026 this is where most production incidents live — not in the model, but in loops that could not tell success from motion.",
  "maxRank": 4,
  "ranks": [
   "Know why loops need budgets and termination criteria",
   "Have added caps and verifiable goals to an agent",
   "Tune loop economics from real cost and success data",
   "Design loop policies that hold up across a fleet"
  ],
  "levelUp": "Instrument an agent you own with per-run token, cost, and iteration metrics, then plot success rate against loop length to find where extra iterations stop paying. Add a stuck-detector — same file edited three times, no test progress — and make it bail loudly.",
  "resources": [
   {
    "t": "Building effective agents",
    "u": "https://www.anthropic.com/engineering/building-effective-agents"
   },
   {
    "t": "Effective context engineering",
    "u": "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents"
   }
  ]
 },
 "A9": {
  "long": "The most cost-effective sentence in agent engineering: use the simplest thing that works. Deterministic workflows — fixed steps, LLM calls as functions — beat open-ended loops whenever the path is known in advance; agents earn their keep only when the path must be discovered. Most systems billed as agents in 2026 are, correctly, workflows with one agentic step.",
  "maxRank": 3,
  "ranks": [
   "Know the workflow-agent distinction and why it matters",
   "Have converted an over-agentic system into a workflow",
   "Choose the right point on the spectrum per task, defensibly"
  ],
  "levelUp": "Audit an agent you have built and list which steps actually require open-ended decisions — usually fewer than you think. Rebuild it as a pipeline with a single agentic step and compare cost, latency, and reliability.",
  "resources": [
   {
    "t": "Building effective agents",
    "u": "https://www.anthropic.com/engineering/building-effective-agents"
   },
   {
    "t": "LangGraph docs",
    "u": "https://langchain-ai.github.io/langgraph/"
   }
  ]
 },
 "A10": {
  "long": "When you do choose workflows, orchestration is control flow in ordinary code or graphs: branches, retries, fan-out, checkpoints, with LLM calls as just another step. Graph frameworks like LangGraph made this respectable, and plain code with function calls remains the underrated default. The payoff is systems you can test, resume, and reason about like normal software, because they are normal software.",
  "maxRank": 3,
  "ranks": [
   "Know the main orchestration patterns and their trade-offs",
   "Have built a multi-step pipeline with LLM calls as steps",
   "Run resumable, testable orchestration in production"
  ],
  "levelUp": "Take a prompt that does five things and split it into a graph of five nodes with typed state between them, then add checkpointing so a failure at step four does not repeat steps one through three. Write unit tests for each node with the LLM mocked.",
  "resources": [
   {
    "t": "LangGraph docs",
    "u": "https://langchain-ai.github.io/langgraph/"
   },
   {
    "t": "Building effective agents",
    "u": "https://www.anthropic.com/engineering/building-effective-agents"
   }
  ]
 },
 "A11": {
  "long": "Verification belongs inside the loop, not bolted on after: tests, linters, compilers, and judge models that check each step's output before the agent moves on. This is the single biggest lever on agent reliability in 2026 — an agent with a cheap verifier beats a smarter agent flying blind. The craft is choosing verifiers that are hard to fool and cheap to run.",
  "maxRank": 4,
  "ranks": [
   "Know why in-loop verification beats post-hoc review",
   "Have put a test or linter inside an agent's loop",
   "Combine deterministic checks with calibrated judge models",
   "Build verification stacks that make agents self-correcting"
  ],
  "levelUp": "Give a coding agent a failing test suite as its goal instead of a prose description and watch reliability jump. Then add an LLM judge for the fuzzy criteria, and validate the judge itself against a small hand-labeled set before trusting it.",
  "resources": [
   {
    "t": "Building effective agents",
    "u": "https://www.anthropic.com/engineering/building-effective-agents"
   },
   {
    "t": "LLM-as-a-judge paper",
    "u": "https://arxiv.org/abs/2306.05685"
   }
  ]
 },
 "A12": {
  "long": "Agents execute code and shell commands, so somebody has to decide what happens when they run rm -rf or curl a stranger. Sandboxing answers with containers, gVisor, and Firecracker microVMs plus explicit filesystem and network policy — deny by default, allow what the task needs. In 2026 running an agent outside a sandbox is the new pushing to prod on Friday.",
  "maxRank": 3,
  "ranks": [
   "Know the isolation options from containers to microVMs",
   "Have run an agent inside a sandbox with network policy",
   "Design layered isolation for untrusted agent workloads"
  ],
  "levelUp": "Run a coding agent inside a container with a read-only root, a scratch workspace, and an egress allowlist, then try to break out of your own policy. Read how the big harnesses do containment and steal their layering.",
  "resources": [
   {
    "t": "How we contain Claude",
    "u": "https://www.anthropic.com/engineering/how-we-contain-claude"
   },
   {
    "t": "Firecracker microVMs",
    "u": "https://firecracker-microvm.github.io/"
   },
   {
    "t": "gVisor",
    "u": "https://gvisor.dev/"
   }
  ]
 },
 "A13": {
  "long": "Permissioning decides which actions an agent takes freely, which need human approval, and which are simply off the table. The toolkit is allowlists, approval gates, and escalation paths for irreversible operations — informed by the lethal trifecta of private data, untrusted content, and external communication. Done well, humans approve the rare scary thing; done badly, they rubber-stamp everything and read nothing.",
  "maxRank": 3,
  "ranks": [
   "Know the lethal trifecta and irreversibility as the key axis",
   "Have configured allowlists and approval gates for an agent",
   "Design permission models that stay safe without approval fatigue"
  ],
  "levelUp": "Categorize every tool your agent has by reversibility and blast radius, then auto-approve the safe tier and gate only the rest. Track how often humans actually reject at your gates — a 0% rejection rate means the gate is theater.",
  "resources": [
   {
    "t": "The lethal trifecta",
    "u": "https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/"
   },
   {
    "t": "LangGraph human-in-the-loop",
    "u": "https://langchain-ai.github.io/langgraph/concepts/human_in_the_loop/"
   }
  ]
 },
 "A14": {
  "long": "Context windows end; work does not. Agent memory spans session persistence, memory files the agent edits itself, and cross-session recall — the memory-tool-plus-files pattern having largely won out over exotic vector schemes for agent work. The hard part is curation: an agent that remembers everything is as useless as one that remembers nothing, just more expensive.",
  "maxRank": 3,
  "ranks": [
   "Know the memory options from files to managed stores",
   "Have given an agent memory that survives sessions",
   "Curate long-lived memory that improves with use"
  ],
  "levelUp": "Add a memory file to an agent you use repeatedly and let it record what worked, then audit the file weekly and delete what is stale. Read the MemGPT paper for the theory, then notice how much of it collapses into good file hygiene.",
  "resources": [
   {
    "t": "Claude memory tool",
    "u": "https://platform.claude.com/docs/en/agents-and-tools/tool-use/memory-tool"
   },
   {
    "t": "MemGPT paper",
    "u": "https://arxiv.org/abs/2310.08560"
   },
   {
    "t": "Effective context engineering",
    "u": "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents"
   }
  ]
 },
 "A15": {
  "long": "When there is no API, agents drive the GUI: screenshots and virtual mouse for full computer use, DOM and accessibility trees for browsers. The 2026 rule of thumb is a hierarchy — API if it exists, DOM if it is a browser, pixels as the last resort — because each rung down costs speed and reliability. Browser agents via tools like Playwright MCP are genuinely production-grade now; general computer use is close but still likes supervision.",
  "maxRank": 3,
  "ranks": [
   "Know the screenshot-versus-DOM trade-off and the tooling",
   "Have automated a real web task with a browser agent",
   "Run GUI agents reliably despite flaky, shifting interfaces"
  ],
  "levelUp": "Automate one recurring web chore end to end with a browser agent, adding verification screenshots at each checkpoint. When it breaks — it will — study whether DOM access, better waits, or dropping to an API would have saved it.",
  "resources": [
   {
    "t": "Computer use tool docs",
    "u": "https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool"
   },
   {
    "t": "Playwright MCP",
    "u": "https://github.com/microsoft/playwright-mcp"
   }
  ]
 },
 "A16": {
  "long": "You cannot fix an agent you cannot see. Tracing captures every step — tool calls, token counts, latencies, cost — as structured spans, with OpenTelemetry's GenAI conventions emerging as the shared vocabulary and tools like Langfuse and LangSmith as the workbenches. The mature move of 2026: reading traces before touching prompts, because the bug is usually in the loop, not the words.",
  "maxRank": 3,
  "ranks": [
   "Know what step-level traces capture and why",
   "Have instrumented an agent and debugged from its traces",
   "Run tracing with cost alerts and eval feedback in production"
  ],
  "levelUp": "Instrument your agent with a tracing tool and find the single most expensive span in a typical run — it is rarely the one you expect. Then set a per-run cost alert and wire failed traces into a dataset you rerun after every harness change.",
  "resources": [
   {
    "t": "Langfuse docs",
    "u": "https://langfuse.com/docs"
   },
   {
    "t": "LangSmith docs",
    "u": "https://docs.smith.langchain.com/"
   },
   {
    "t": "OpenTelemetry for GenAI",
    "u": "https://opentelemetry.io/blog/2024/otel-generative-ai/"
   }
  ]
 }
};

// ---- goal profiles (what are you trying to get out of AI?) ----
// w: per-branch weight used to bias quiz question order + "focus next" picks
const GOALS = [
 {k:'dev', name:'Software developer', icon:'⌨️',
  blurb:'Ship code with AI: copilots, terminal agents, and eventually your own harnesses.',
  w:{F:1, U:1.1, P:1.2, A:1.6, R:1.1, M:0.6},
  keyBranches:['A','P','U'],
  angle:'For a developer, the highest-leverage lane runs through Prompt & Context into Agents & Harnesses — agentic coding pays for itself first, building your own agents comes right behind it.'},
 {k:'data', name:'Data science & ML', icon:'📊',
  blurb:'Models, evals, and pipelines — from scikit-learn to post-training.',
  w:{F:1, U:0.8, P:1, A:0.9, R:1.3, M:1.7},
  keyBranches:['M','R','P'],
  angle:'For data science work, ML & Models is the backbone and Search & Retrieval is the applied payoff — with evaluation discipline as the skill that quietly gates everything else.'},
 {k:'analyst', name:'Business & analysis', icon:'📈',
  blurb:'Research, reporting, spreadsheets, and decks — done faster and better sourced.',
  w:{F:1.2, U:1.7, P:1.4, A:0.6, R:0.8, M:0.4},
  keyBranches:['U','P','F'],
  angle:'For analysis work, Using AI and Prompt & Context are where the hours come back — file analysis, Deep Research, and custom assistants cover most of a working week.'},
 {k:'research', name:'Research & writing', icon:'✒️',
  blurb:'Deep research, grounded sources, and drafts that sound like you.',
  w:{F:1.4, U:1.5, P:1.3, A:0.5, R:1, M:0.4},
  keyBranches:['U','F','P'],
  angle:'For research and writing, Foundations keep you honest (verification habits above all) while Deep Research, AI notebooks, and grounded search do the heavy lifting.'},
 {k:'ops', name:'Automation & ops', icon:'🔗',
  blurb:'Workflows, connectors, and background agents running the recurring stuff.',
  w:{F:1.1, U:1.4, P:1.1, A:1.4, R:0.7, M:0.4},
  keyBranches:['U','A','P'],
  angle:'For automation work, the path runs from connectors and workflow automation up into permissioning and guardrails — the boring safety skills are the ones that let you automate more.'},
 {k:'curious', name:'Curious generalist', icon:'🧭',
  blurb:'You want the map, the mental models, and a taste of everything.',
  w:{F:1.5, U:1.2, P:1.1, A:0.9, R:0.9, M:0.9},
  keyBranches:['F','U','P'],
  angle:'For a generalist, Foundations are the whole game early on — every branch gets easier once the mental models are in place, and you can wander wherever curiosity points.'}
];

// ---------- build node table + graph ----------
const NODES = [], byId = {};
BRANCHES.forEach(b=>{
  RAW[b.k].forEach(r=>{
    const det = DETAIL[r[0]] || {long:r[4], maxRank:3, ranks:['Know it','Use it','Could teach it'], levelUp:'', resources:[]};
    const n = {id:r[0], name:r[1], icon:r[2], pre:r[3], d:r[4], br:b.k, c:b.c,
               long:det.long, maxRank:det.maxRank, ranks:det.ranks, levelUp:det.levelUp, resources:det.resources};
    NODES.push(n); byId[n.id] = n;
  });
});

// ancestors / descendants (transitive)
const ANC = {}, DESC = {}, UNLOCKS = {};
NODES.forEach(n=>{ ANC[n.id]=new Set(); DESC[n.id]=new Set(); UNLOCKS[n.id]=[]; });
NODES.forEach(n=>n.pre.forEach(p=>UNLOCKS[p].push(n.id)));
(function(){
  function up(id,set){ byId[id].pre.forEach(p=>{ if(!set.has(p)){ set.add(p); up(p,set); } }); }
  NODES.forEach(n=>up(n.id, ANC[n.id]));
  NODES.forEach(n=>{ ANC[n.id].forEach(a=>DESC[a].add(n.id)); });
})();
const TOTAL_RANKS = NODES.reduce((s,n)=>s+n.maxRank,0);

// topological level: 1 + max(level of prereqs) — shared by layout and quiz ordering
(function(){
  const memo = {};
  function lvl(id){
    if (memo[id]) return memo[id];
    const n = byId[id];
    memo[id] = n.pre.length ? 1 + Math.max(...n.pre.map(lvl)) : 1;
    return memo[id];
  }
  NODES.forEach(n=>{ n.level = lvl(n.id); });
})();
const MAXL = Math.max(...NODES.map(n=>n.level));
