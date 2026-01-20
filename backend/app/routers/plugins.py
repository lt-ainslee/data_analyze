from fastapi import APIRouter, HTTPException

from app.models.responses import PluginListResponse, PluginStatusResponse
from app.plugins.registry import disable_plugin, enable_plugin, list_plugins

router = APIRouter()


@router.get("/", response_model=PluginListResponse)
def get_plugins() -> PluginListResponse:
    return PluginListResponse(plugins=list_plugins())


@router.post("/{name}/enable", response_model=PluginStatusResponse)
def enable(name: str) -> PluginStatusResponse:
    if not enable_plugin(name):
        raise HTTPException(status_code=404, detail="Plugin not found")
    return PluginStatusResponse(name=name, enabled=True)


@router.post("/{name}/disable", response_model=PluginStatusResponse)
def disable(name: str) -> PluginStatusResponse:
    if not disable_plugin(name):
        raise HTTPException(status_code=404, detail="Plugin not found")
    return PluginStatusResponse(name=name, enabled=False)
