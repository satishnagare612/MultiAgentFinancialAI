/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import {
  Activity,
  CheckCircle2,
  Cpu,
  Database,
  FileSpreadsheet,
  GitBranch,
  Layers,
  Network,
  ShieldCheck,
  Terminal,
  UserCheck,
  Server,
  Zap,
} from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<"topology" | "agents" | "tree" | "projections">("topology");
  const [selectedAgent, setSelectedAgent] = useState<string>("analysis");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 p-0.5 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <div className="h-full w-full bg-slate-950 rounded-[10px] flex items-center justify-center font-black text-emerald-400">
              FA
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold tracking-tight text-white">Financial AI Report</h1>
              <span className="px-2 py-0.5 text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full">
                SCAFFOLD COMPLETE
              </span>
            </div>
            <p className="text-xs text-slate-400">
              .NET 8 Clean Architecture • Microsoft Agent Framework • LangGraph Python Service
            </p>
          </div>
        </div>

        {/* Global System Indicators */}
        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300 font-medium">.NET 8 API:</span>
            <span className="text-emerald-400 font-mono">/healthz (200)</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-slate-300 font-medium">Python AI:</span>
            <span className="text-cyan-400 font-mono">/readyz (200)</span>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="border-b border-slate-800 bg-slate-900/40 px-6 flex gap-6 text-sm font-medium">
        <button
          onClick={() => setActiveTab("topology")}
          className={`py-3 border-b-2 flex items-center gap-2 transition-colors ${
            activeTab === "topology"
              ? "border-emerald-500 text-emerald-400 font-semibold"
              : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          <Network className="w-4 h-4" /> System Topology
        </button>
        <button
          onClick={() => setActiveTab("agents")}
          className={`py-3 border-b-2 flex items-center gap-2 transition-colors ${
            activeTab === "agents"
              ? "border-emerald-500 text-emerald-400 font-semibold"
              : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          <Zap className="w-4 h-4" /> Multi-Agent Workflow
        </button>
        <button
          onClick={() => setActiveTab("projections")}
          className={`py-3 border-b-2 flex items-center gap-2 transition-colors ${
            activeTab === "projections"
              ? "border-emerald-500 text-emerald-400 font-semibold"
              : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          <Cpu className="w-4 h-4" /> Math.NET Projections
        </button>
        <button
          onClick={() => setActiveTab("tree")}
          className={`py-3 border-b-2 flex items-center gap-2 transition-colors ${
            activeTab === "tree"
              ? "border-emerald-500 text-emerald-400 font-semibold"
              : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          <Layers className="w-4 h-4" /> Repository Skeleton
        </button>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 space-y-6">
        {activeTab === "topology" && (
          <div className="space-y-6">
            {/* Top Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60">
                <div className="flex items-center justify-between text-slate-400 text-xs">
                  <span>Backend Solution</span>
                  <Server className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="mt-2 text-xl font-bold text-white">FinancialAI.sln</div>
                <div className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 6 Projects Compiled (net8.0)
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60">
                <div className="flex items-center justify-between text-slate-400 text-xs">
                  <span>AI Microservice</span>
                  <Activity className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="mt-2 text-xl font-bold text-white">FastAPI + LangGraph</div>
                <div className="text-xs text-cyan-400 mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Ruff & Mypy Clean, Pytest Passed
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60">
                <div className="flex items-center justify-between text-slate-400 text-xs">
                  <span>Web Portal</span>
                  <FileSpreadsheet className="w-4 h-4 text-blue-400" />
                </div>
                <div className="mt-2 text-xl font-bold text-white">Next.js 14 Web</div>
                <div className="text-xs text-blue-400 mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> TypeScript Strict + Tailwind
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60">
                <div className="flex items-center justify-between text-slate-400 text-xs">
                  <span>Reliability & State</span>
                  <Database className="w-4 h-4 text-purple-400" />
                </div>
                <div className="mt-2 text-xl font-bold text-white">Outbox + Cosmos</div>
                <div className="text-xs text-purple-400 mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> MassTransit Saga Configured
                </div>
              </div>
            </div>

            {/* Architecture Flow Card */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40">
              <h2 className="text-base font-semibold text-white flex items-center gap-2">
                <Network className="w-5 h-5 text-emerald-400" /> End-to-End Execution Flow
              </h2>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-6 gap-3 relative">
                {/* Step 1 */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      STEP 1
                    </span>
                    <h3 className="text-sm font-semibold text-white mt-2">Client Request</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Next.js Web triggers report generation with correlation header.
                    </p>
                  </div>
                  <div className="text-[10px] text-emerald-400 font-mono mt-3">X-Correlation-ID</div>
                </div>

                {/* Step 2 */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      STEP 2
                    </span>
                    <h3 className="text-sm font-semibold text-white mt-2">Cosmos DB Fetch</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Fetch FinancialProfile from database container.
                    </p>
                  </div>
                  <div className="text-[10px] text-purple-400 font-mono mt-3">Partition: /userId</div>
                </div>

                {/* Step 3 */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      STEP 3
                    </span>
                    <h3 className="text-sm font-semibold text-white mt-2">Deterministic Math</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Math.NET runs Monte Carlo, tax & inflation projections.
                    </p>
                  </div>
                  <div className="text-[10px] text-emerald-400 font-mono mt-3">5,000 Iterations</div>
                </div>

                {/* Step 4 */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      STEP 4
                    </span>
                    <h3 className="text-sm font-semibold text-white mt-2">MAF Orchestrator</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      WorkflowBuilder manages supersteps & Cosmos checkpoints.
                    </p>
                  </div>
                  <div className="text-[10px] text-blue-400 font-mono mt-3">Checkpoint State</div>
                </div>

                {/* Step 5 */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      STEP 5
                    </span>
                    <h3 className="text-sm font-semibold text-white mt-2">FastAPI LangGraph</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Retrieval → Analysis (LoRA) → Review (Threshold: 0.70).
                    </p>
                  </div>
                  <div className="text-[10px] text-cyan-400 font-mono mt-3">Stateless Inference</div>
                </div>

                {/* Step 6 */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      STEP 6
                    </span>
                    <h3 className="text-sm font-semibold text-white mt-2">Report Output</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Final PDF/JSON report or Human Review escalation.
                    </p>
                  </div>
                  <div className="text-[10px] text-amber-400 font-mono mt-3">QuestPDF / JSON</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "agents" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
                Orchestrated Agent Graph
              </h2>
              <div
                onClick={() => setSelectedAgent("retrieval")}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  selectedAgent === "retrieval"
                    ? "bg-slate-900 border-emerald-500 shadow-md shadow-emerald-500/10"
                    : "bg-slate-900/40 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 font-semibold">Agent 1</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Input Provider
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mt-1">RetrievalAgent</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Queries vector store (FAISS in dev / Azure AI Search in prod) for macro indicators and rates.
                </p>
              </div>

              <div
                onClick={() => setSelectedAgent("analysis")}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  selectedAgent === "analysis"
                    ? "bg-slate-900 border-blue-500 shadow-md shadow-blue-500/10"
                    : "bg-slate-900/40 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-blue-400 font-semibold">Agent 2</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    LoRA Adapter
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mt-1">AnalysisAgent</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Synthesizes Math.NET projections with market context into narratives, risk factors & citations.
                </p>
              </div>

              <div
                onClick={() => setSelectedAgent("review")}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  selectedAgent === "review"
                    ? "bg-slate-900 border-purple-500 shadow-md shadow-purple-500/10"
                    : "bg-slate-900/40 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-purple-400 font-semibold">Agent 3</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    Confidence Gate
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mt-1">ReviewAgent</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Verifies analysis against regulatory rule set and secondary LLM judge.
                </p>
              </div>

              <div
                onClick={() => setSelectedAgent("human")}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  selectedAgent === "human"
                    ? "bg-slate-900 border-amber-500 shadow-md shadow-amber-500/10"
                    : "bg-slate-900/40 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-amber-400 font-semibold">Fallback</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    HITL
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mt-1">HumanReviewAgent</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Invoked automatically whenever ReviewAgent confidence falls below 0.70.
                </p>
              </div>
            </div>

            {/* Agent Detail Specification */}
            <div className="lg:col-span-2 p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  Agent Specification: {selectedAgent.toUpperCase()}
                </h3>
                <span className="text-xs font-mono text-slate-400">Pydantic v2 Contract</span>
              </div>

              {selectedAgent === "retrieval" && (
                <div className="space-y-4 text-xs">
                  <p className="text-slate-300">
                    Retrieves contextual financial documents and macro factors via recursive character chunking (500-token chunks with 50-token overlap).
                  </p>
                  <div className="p-4 rounded-xl bg-slate-950 font-mono text-slate-300 space-y-1">
                    <div className="text-slate-500">// Output Schema</div>
                    <div>retrieved_chunks: list[DocumentChunk]</div>
                    <div>benchmark_returns: dict[str, float]</div>
                    <div>risk_free_rate: float</div>
                    <div>retrieval_latency_ms: float</div>
                  </div>
                </div>
              )}

              {selectedAgent === "analysis" && (
                <div className="space-y-4 text-xs">
                  <p className="text-slate-300">
                    Consumes normalized projection vectors + retrieved chunks to construct an executive wealth narrative, identify downside vulnerabilities, and cite sources.
                  </p>
                  <div className="p-4 rounded-xl bg-slate-950 font-mono text-slate-300 space-y-1">
                    <div className="text-slate-500">// Output Schema</div>
                    <div>narrative_summary: str</div>
                    <div>key_risks: list[str]</div>
                    <div>cited_sources: list[str]</div>
                    <div>preliminary_confidence: float [0.0 - 1.0]</div>
                  </div>
                </div>
              )}

              {selectedAgent === "review" && (
                <div className="space-y-4 text-xs">
                  <p className="text-slate-300">
                    Strict deterministic checks (e.g. no negative assets without debt disclosure) combined with LLM-as-a-judge consistency validation.
                  </p>
                  <div className="p-4 rounded-xl bg-slate-950 font-mono text-slate-300 space-y-1">
                    <div className="text-slate-500">// Output Schema</div>
                    <div>approved: bool</div>
                    <div>issues: list[ValidationIssue]</div>
                    <div>final_confidence: float [0.0 - 1.0]</div>
                    <div>decision: "approve" | "revise" | "human_review"</div>
                  </div>
                </div>
              )}

              {selectedAgent === "human" && (
                <div className="space-y-4 text-xs">
                  <p className="text-slate-300">
                    Provides an approval / revision console for compliance officers when confidence score &lt; 0.70.
                  </p>
                  <div className="p-4 rounded-xl bg-slate-950 font-mono text-slate-300 space-y-1">
                    <div className="text-slate-500">// Output Schema</div>
                    <div>reviewer_id: str</div>
                    <div>override_decision: "approved" | "rejected"</div>
                    <div>compliance_notes: str</div>
                    <div>reviewed_at: datetime</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "projections" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-semibold text-white">Math.NET Numerics Modeling Engine</h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Deterministic financial projections computed in C# Application layer before prompt injection.
                  </p>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                  MathNet.Numerics 5.0.0
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <h3 className="text-xs font-semibold text-slate-300">Monte Carlo Simulations</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Generates 10th, 50th, and 90th percentile wealth corridors over 30-year horizons with geometric Brownian motion.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <h3 className="text-xs font-semibold text-slate-300">Tax Bracket Drag</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Simulates marginal federal + state tax liabilities across traditional, Roth, and taxable account withdrawals.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <h3 className="text-xs font-semibold text-slate-300">Inflation-Adjusted Purchasing Power</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Discounts nominal cash flows using historical CPI distribution distributions to calculate real purchasing power.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "tree" && (
          <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-emerald-400" /> Repository Skeleton Structure
              </h2>
              <span className="text-xs font-mono text-emerald-400">Verified & Compiled</span>
            </div>
            <pre className="p-5 rounded-xl bg-slate-950 font-mono text-xs text-slate-300 overflow-x-auto border border-slate-800 leading-relaxed">
{`.
├── FinancialAI.sln                          # .NET 8 Master Solution
├── src/
│   ├── FinancialAI.Domain/                  # Domain entities, records & value objects
│   │   └── FinancialAI.Domain.csproj
│   ├── FinancialAI.Application/             # MediatR, FluentValidation, Math.NET compute
│   │   ├── DependencyInjection.cs           # DI wiring: AddApplication()
│   │   └── FinancialAI.Application.csproj
│   ├── FinancialAI.Infrastructure/          # Cosmos DB, Service Bus, MAF host, PDF
│   │   ├── DependencyInjection.cs           # DI wiring: AddInfrastructure()
│   │   └── FinancialAI.Infrastructure.csproj
│   └── FinancialAI.Api/                     # ASP.NET Core Web API
│       ├── Program.cs                       # Endpoints: /healthz, /readyz, DI registry
│       ├── Dockerfile                       # Production multi-stage container
│       └── FinancialAI.Api.csproj
├── tests/
│   ├── FinancialAI.UnitTests/               # xUnit unit test suite (Passing)
│   │   └── UnitTest1.cs
│   └── FinancialAI.EvaluationTests/         # Scenario-replay & LLM-judge harness (Passing)
│       └── UnitTest1.cs
├── services/
│   └── ai/                                  # Python FastAPI Agent Service
│       ├── app/
│       │   ├── main.py                      # FastAPI app factory, /healthz, /readyz
│       │   ├── models/__init__.py           # Pydantic v2 data models
│       │   ├── agents/__init__.py           # LangGraph node declarations
│       │   ├── rag/__init__.py              # Recursive chunking & vector store
│       │   └── lora/__init__.py             # LoRA domain adapter inference
│       ├── tests/
│       │   ├── conftest.py
│       │   └── test_health.py               # Pytest health checks (Passing)
│       ├── pyproject.toml                   # Poetry, ruff, mypy, pytest configs
│       └── Dockerfile                       # Python 3.11 container
├── web/                                     # Next.js 14 App Router
│   ├── app/
│   │   ├── layout.tsx                       # Root layout & dark theme styling
│   │   ├── page.tsx                         # Advisory console & topology explorer
│   │   └── report/[id]/page.tsx             # Interactive report view & export
│   ├── lib/
│   │   ├── api.ts                           # Typed fetch client with CorrelationId
│   │   └── utils.ts                         # Tailwind merge utilities
│   ├── Dockerfile                           # Next.js production build container
│   ├── package.json                         # Next.js dependencies & scripts
│   └── tsconfig.json                        # Strict TypeScript configuration
├── .github/workflows/ci.yml                 # CI Pipeline (Build .NET, Python, Web)
├── docker-compose.yml                       # Emulators + Services orchestration
├── .editorconfig                            # Universal code formatting rules
├── .gitignore                               # .NET, Python, and Node exclusions
└── README.md                                # Architecture documentation`}
            </pre>
          </div>
        )}
      </main>
    </div>
  );
}
