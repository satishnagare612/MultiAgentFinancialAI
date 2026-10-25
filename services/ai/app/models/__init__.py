"""Pydantic v2 schemas and data transfer objects for agent contracts."""

from pydantic import BaseModel, Field


class BaseAgentPayload(BaseModel):
    """Base schema for cross-service payload verification."""

    correlation_id: str = Field(description="Distributed tracing correlation ID")
