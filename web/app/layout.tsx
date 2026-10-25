import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Financial AI Report",
  description: "Production-grade multi-agent financial advisory & wealth projection suite",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center font-bold text-emerald-400">
              FA
            </div>
            <div>
              <h1 className="text-base font-semibold leading-none">Financial AI Report</h1>
              <p className="text-xs text-slate-400 mt-1">MAF Graph Orchestration + LangGraph Sub-agents</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-xs">
            <span className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300">
              .NET 8 Web API
            </span>
            <span className="px-2 py-1 rounded bg-emerald-950 border border-emerald-800 text-emerald-300">
              Cosmos + Service Bus
            </span>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
