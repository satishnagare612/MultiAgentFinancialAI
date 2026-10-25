import Link from "next/link";

interface ReportPageProps {
  params: {
    id: string;
  };
}

export default function ReportPage({ params }: ReportPageProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Link
            href="/"
            className="text-xs text-slate-400 hover:text-slate-200 transition-colors"
          >
            ← Back to Dashboard
          </Link>
          <h2 className="text-xl font-bold text-white mt-2">
            Financial AI Report: <span className="font-mono text-emerald-400">#{params.id}</span>
          </h2>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 rounded bg-slate-800 border border-slate-700 text-xs font-medium text-slate-200 hover:bg-slate-700">
            Export JSON
          </button>
          <button className="px-3 py-1.5 rounded bg-emerald-600 text-xs font-medium text-white hover:bg-emerald-500">
            Download PDF
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/60">
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">
              Executive Advisory Summary
            </h3>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              Based on deterministic Monte Carlo wealth simulations (5,000 runs) and macroeconomic inflation
              adjustments, target retirement capital exhibits an 87.4% probability of achieving baseline goals.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/60">
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">
              Deterministic Math.NET Projections
            </h3>
            <div className="h-48 mt-4 rounded-lg border border-dashed border-slate-700 flex items-center justify-center text-xs text-slate-500">
              Wealth Projections & Monte Carlo Percentiles Canvas
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/60">
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">
              Agent Workflow Pipeline
            </h3>
            <ul className="mt-4 space-y-3 text-xs">
              <li className="flex items-center justify-between text-slate-300">
                <span>1. Retrieval Agent</span>
                <span className="text-emerald-400 font-medium">Completed</span>
              </li>
              <li className="flex items-center justify-between text-slate-300">
                <span>2. Analysis Agent</span>
                <span className="text-emerald-400 font-medium">Completed</span>
              </li>
              <li className="flex items-center justify-between text-slate-300">
                <span>3. Review Agent</span>
                <span className="text-emerald-400 font-medium">Confidence: 0.92</span>
              </li>
              <li className="flex items-center justify-between text-slate-500">
                <span>4. Human Review</span>
                <span>Bypassed (&gt; 0.70)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
