from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_healthz_endpoint() -> None:
    response = client.get("/healthz")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "healthy"
    assert "timestamp" in data


def test_readyz_endpoint() -> None:
    response = client.get("/readyz")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "ready"
    assert "timestamp" in data
