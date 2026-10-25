import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Financial Advisory Multi-Agent System
        </h2>
        <p className="mt-2 text-sm text-slate-400 max-w-2xl">
          Deterministic Math.NET projections orchestrated across three specialized agents
          (Retrieval → Analysis → Review) with automated human-in-the-loop fallback when confidence is below 0.70.
        </p>

        <div className="mt-6 flex gap-4">
          <Link
            href="/report/sample-101"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-emerald-500 transition-colors shadow-sm"
          >
            View Sample Report
          </Link>
          <a
            href="#architecture"
            className="inline-flex items-center justify-center rounded-lg bg-slate-800 border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-700 transition-colors"
          >
            System Topology
          </a>
        </div>
      </div>

      <div id="architecture" className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/50">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">Step 1</span>
          <h3 className="text-base font-semibold text-white mt-1">Retrieval Agent</h3>
          <p className="text-xs text-slate-400 mt-2">
            Fetches macro indicators, asset benchmark returns, and risk-free curves via abstracted vector store & APIs.
          </p>
        </div>
        <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/50">
          <span className="text-xs font-mono uppercase tracking-wider text-blue-400">Step 2</span>
          <h3 className="text-base font-semibold text-white mt-1">Analysis Agent</h3>
          <p className="text-xs text-slate-400 mt-2">
            Interprets Math.NET Monte Carlo projections and contextual RAG chunks via LoRA-adapted financial models.
          </p>
        </div>
        <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/50">
          <span className="text-xs font-mono uppercase tracking-wider text-purple-400">Step 3</span>
          <h3 className="text-base font-semibold text-white mt-1">Review & HITL Agent</h3>
          <p className="text-xs text-slate-400 mt-2">
            Cross-examines advice against regulatory rules. Escalates to Human Review if confidence &lt; 0.70.
          </p>
        </div>
      </div>
    </div>
  );
}
