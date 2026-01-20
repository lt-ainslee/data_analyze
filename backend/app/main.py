from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import analysis, data, plugins


def create_app() -> FastAPI:
    app = FastAPI(title="Data Analyze Platform API")

    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"] ,
        allow_headers=["*"],
    )

    app.include_router(data.router, prefix="/upload", tags=["upload"])
    app.include_router(analysis.router, prefix="/analysis", tags=["analysis"])
    app.include_router(plugins.router, prefix="/plugins", tags=["plugins"])

    @app.get("/health")
    def health_check() -> dict:
        return {"status": "ok"}

    return app


app = create_app()
