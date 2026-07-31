// The AI Tech Tree — shared state, inference, and helpers.
// Depends on skills-data.js (NODES, byId, ANC, DESC, GOALS, TOTAL_RANKS).

const TT = (() => {
  const KEY = 'aiTechTree.v1';

  const blank = () => ({
    goal: null,                 // GOALS key
    ranks: {},                  // id -> {r: 0..maxRank, src: 'answered'|'inferred'|'manual'}
    quiz: { started:false, done:false, asked:[], skipped:false },
    updated: null
  });

  let state = blank();
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) state = Object.assign(blank(), JSON.parse(raw));
  } catch (e) { /* private mode etc. — run in-memory */ }

  function save(){
    state.updated = new Date().toISOString();
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch(e){}
  }

  function reset(){ state = blank(); save(); }

  const entry = id => state.ranks[id] || null;
  const rankOf = id => (state.ranks[id] ? state.ranks[id].r : 0);
  const resolved = id => !!state.ranks[id];

  function setRank(id, r, src){
    r = Math.max(0, Math.min(byId[id].maxRank, r));
    state.ranks[id] = { r, src };
    save();
  }

  // Answer a quiz question. Checkpoint inference over the prereq DAG:
  //  - any real experience implies the ancestors that unlocked it,
  //  - no contact implies the descendants are still locked.
  function answer(id, r){
    const n = byId[id];
    state.ranks[id] = { r, src: 'answered' };
    if (!state.quiz.asked.includes(id)) state.quiz.asked.push(id);
    const frac = n.maxRank ? r / n.maxRank : 0;
    if (r > 0){
      ANC[id].forEach(a => {
        if (resolved(a)) return;
        const ma = byId[a].maxRank;
        const ir = Math.max(1, Math.ceil(ma * Math.min(1, frac + 0.34)));
        state.ranks[a] = { r: ir, src: 'inferred' };
      });
    } else {
      DESC[id].forEach(d => {
        if (!resolved(d)) state.ranks[d] = { r: 0, src: 'inferred' };
      });
    }
    save();
  }

  // ---- aggregate stats ----
  function branchStats(){
    const out = {};
    BRANCHES.forEach(b => out[b.k] = { k:b.k, name:b.name, c:b.c, pts:0, max:0, n:0, achieved:0, resolved:0 });
    NODES.forEach(n => {
      const s = out[n.br];
      s.max += n.maxRank; s.n++;
      const e = entry(n.id);
      if (e){ s.resolved++; s.pts += e.r; if (e.r > 0) s.achieved++; }
    });
    Object.values(out).forEach(s => s.pct = s.max ? s.pts / s.max : 0);
    return out;
  }

  function totals(){
    let pts = 0, achieved = 0, res = 0;
    NODES.forEach(n => { const e = entry(n.id); if (e){ res++; pts += e.r; if (e.r>0) achieved++; } });
    return { pts, achieved, resolved: res, unknown: NODES.length - res,
             pct: TOTAL_RANKS ? pts / TOTAL_RANKS : 0, nodes: NODES.length };
  }

  // Frontier: skills you haven't ranked (or sit at 0) whose prereqs you've all touched —
  // i.e. the next unlockable nodes, weighted by the chosen goal.
  function frontier(limit){
    const g = GOALS.find(x => x.k === state.goal);
    const cand = NODES.filter(n =>
      rankOf(n.id) === 0 &&
      n.pre.every(p => rankOf(p) > 0)
    );
    cand.sort((a,b) => {
      const wa = (g ? g.w[a.br] : 1), wb = (g ? g.w[b.br] : 1);
      // prefer goal-weighted branches, then shallower (more foundational) skills
      return (wb - wa) || (a.level - b.level) || a.id.localeCompare(b.id);
    });
    return cand.slice(0, limit || 5);
  }

  // Low-hanging rank-ups: skills started but not maxed, prereqs solid.
  function growth(limit){
    const g = GOALS.find(x => x.k === state.goal);
    const cand = NODES.filter(n => { const r = rankOf(n.id); return r > 0 && r < n.maxRank; });
    cand.sort((a,b) => {
      const wa = (g ? g.w[a.br] : 1) * (1 - rankOf(a.id)/a.maxRank);
      const wb = (g ? g.w[b.br] : 1) * (1 - rankOf(b.id)/b.maxRank);
      return wb - wa;
    });
    return cand.slice(0, limit || 5);
  }

  return { state, save, reset, entry, rankOf, resolved, setRank, answer,
           branchStats, totals, frontier, growth,
           get goal(){ return GOALS.find(x => x.k === state.goal) || null; } };
})();

// Shared masthead nav (call with current page key)
function ttNav(page){
  const t = TT.totals();
  const items = [
    ['index.html',   'tree',    'The Tree'],
    ['quiz.html',    'quiz',    t.resolved ? 'Retake quiz' : 'Take the quiz'],
    ['results.html', 'results', 'Character sheet']
  ];
  return '<nav class="tt-nav">' + items.map(([href,k,label]) =>
    k === page ? `<span class="cur">${label}</span>` : `<a href="${href}">${label}</a>`
  ).join('') + '</nav>';
}
