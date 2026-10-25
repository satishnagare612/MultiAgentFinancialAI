from collections.abc import AsyncGenerator
from contextlib import asynccontextmanager
from datetime import datetime, timezone
from typing import Any

from fastapi import FastAPI


@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncGenerator[None, None]:
    # Startup: Initialize RAG vector client, model connections, telemetry
    yield
    # Shutdown: Clean up connections


def create_app() -> FastAPI:
    app = FastAPI(
        title="Financial AI Agent Service",
        description="Stateless agent orchestration and inference service",
        version="0.1.0",
        lifespan=lifespan,
    )

    @app.get("/healthz", summary="Liveness probe")
    async def healthz() -> dict[str, Any]:
        return {
            "status": "healthy",
            "timestamp": datetime.now(timezone.utc).isoformat(),
        }

    @app.get("/readyz", summary="Readiness probe")
    async def readyz() -> dict[str, Any]:
        return {
            "status": "ready",
            "timestamp": datetime.now(timezone.utc).isoformat(),
        }

    return app


app = create_app()
