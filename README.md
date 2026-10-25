# Financial AI Report Platform

Production-grade Financial AI Report generation engine orchestrating deterministic projections with Math.NET Numerics, multi-agent evaluation via Microsoft Agent Framework (.NET) and LangGraph (Python), Azure Cosmos DB persistence, and human-in-the-loop review.

---

## Architecture Diagram

```text
                                  +-----------------------+
                                  |   Next.js 14 Client   |
                                  |   (App Router / UI)   |
                                  +-----------+-----------+
                                              | HTTPS / JSON (CorrelationId)
                                              v
+-----------------------------------------------------------------------------------------+
| .NET 8 Web API Host (Clean Architecture: Api / Application / Infrastructure / Domain)     |
|                                                                                         |
|  1. Fetch User Profile <---> Azure Cosmos DB (Container: Profiles)                     |
|  2. Deterministic Projections via Math.NET Numerics (Monte Carlo, Tax, Inflation)       |
|  3. Map projection vectors + financial context into ChatMessage[] payloads              |
|                                                                                         |
|  +-----------------------------------------------------------------------------------+  |
|  | Microsoft Agent Framework Workflow Graph (.NET Host Orchestrator)                 |  |
|  | - Graph-based superstep state machine                                              |  |
|  | - Checkpointed thread-state in Cosmos DB (Container: Checkpoints)                 |  |
|  | - Transactional Outbox pattern -> Azure Service Bus Topics & MassTransit Saga      |  |
|  +-----------------------------------------------------------------------------------+  |
+--------------------------------------------+--------------------------------------------+
                                             |
                   HTTP POST / CorrelationId | (Stateless JSON Payload)
                                             v
+-----------------------------------------------------------------------------------------+
| Python FastAPI AI Microservice (services/ai)                                            |
|                                                                                         |
|  +--------------------+      +--------------------+      +---------------------------+  |
|  |   RetrievalAgent   | ---> |   AnalysisAgent    | ---> |        ReviewAgent        |  |
|  | (Market RAG Chunks)|      | (LoRA Adapter / LLM|      | (Rule Engine + 2nd Model) |  |
|  +--------------------+      +--------------------+      +-------------+-------------+  |
|                                                                        |                |
|                                                     Confidence Check   |                |
+------------------------------------------------------------------------+----------------+
                                                                         |
                                              +--------------------------+--------------------------+
                                              |                                                     |
                                   Confidence >= 0.70                                     Confidence < 0.70
                                              |                                                     |
                                              v                                                     v
                                 +-------------------------+                           +-------------------------+
                                 |  Final Report Synthesis |                           |    HumanReviewAgent     |
                                 |  - PDF Generation       |                           |  - Approval Queue       |
                                 |  - Cosmos DB Reports    |                           |  - Manual Overrides     |
                                 +-------------------------+                           +-------------------------+
```

---

## Project Structure

```text
.
├── FinancialAI.sln                    # Root .NET Solution
├── src/
│   ├── FinancialAI.Domain/            # Domain entities, records, value objects, rules
│   ├── FinancialAI.Application/       # Use-cases, Math.NET projections, DI extensions
│   ├── FinancialAI.Infrastructure/    # Cosmos DB, Service Bus, MAF host, Outbox, PDF
│   └── FinancialAI.Api/               # ASP.NET Core Web API, /healthz, /readyz
├── tests/
│   ├── FinancialAI.UnitTests/         # Domain & math logic unit test suite
│   └── FinancialAI.EvaluationTests/   # Multi-agent replay harness & evaluation tests
├── services/
│   └── ai/                            # Python FastAPI Agent Service
│       ├── app/
│       │   ├── main.py                # FastAPI application factory & probes
│       │   ├── models/                # Pydantic v2 schemas and request contracts
│       │   ├── agents/                # LangGraph nodes (Retrieval, Analysis, Review)
│       │   ├── rag/                   # Recursive chunking, embeddings, vector search
│       │   └── lora/                  # Domain-adapted LoRA inference stubs
│       ├── tests/                     # Pytest suite with health & contract tests
│       └── pyproject.toml             # Poetry project with ruff, mypy, and pytest
├── web/                               # Next.js 14 Web Application
│   ├── app/                           # App Router (layout, page, report/[id])
│   ├── lib/                           # Typed API client with correlation tracking
│   ├── components/                    # UI component library
│   └── package.json                   # Web dependencies & scripts
├── docker-compose.yml                 # Local orchestrator (Emulators + Services)
└── .github/workflows/ci.yml           # Multi-project CI pipeline
```

---

## Quickstart & Local Setup

### 1. Prerequisites
- **.NET 8 SDK** (`dotnet --version` >= 8.0)
- **Python 3.10+** & **Poetry**
- **Node.js 20+** & **npm**
- **Docker & Docker Compose** (for emulator stack)

### 2. .NET Backend API & Tests
```bash
# Restore & build solution
dotnet restore FinancialAI.sln
dotnet build FinancialAI.sln

# Run unit tests and evaluation suite
dotnet test FinancialAI.sln
```

### 3. Python AI Service
```bash
cd services/ai

# Install dependencies
poetry install

# Run linters & typecheckers
poetry run ruff check .
poetry run mypy app

# Run tests
poetry run pytest
```

### 4. Next.js Web Client
```bash
cd web
npm install
npm run dev
```

### 5. Running the Complete Stack with Docker Compose
```bash
docker compose up -d --build
```
Health status probes:
- .NET API: `http://localhost:5000/healthz`
- Python AI Service: `http://localhost:8000/healthz`
- Web Portal: `http://localhost:3000`
