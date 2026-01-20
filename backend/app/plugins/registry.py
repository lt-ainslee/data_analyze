from typing import Dict, List

from app.models.responses import PluginInfo
from app.plugins.base import AnalysisPlugin
from app.plugins.sample import SampleSummaryPlugin

_PLUGIN_REGISTRY: Dict[str, AnalysisPlugin] = {
    "summary": SampleSummaryPlugin(),
}

_PLUGIN_STATUS: Dict[str, bool] = {
    name: True for name in _PLUGIN_REGISTRY
}


def list_plugins() -> List[PluginInfo]:
    return [
        PluginInfo(
            name=plugin.name,
            description=plugin.description,
            enabled=_PLUGIN_STATUS.get(key, False),
            parameters=plugin.parameters(),
        )
        for key, plugin in _PLUGIN_REGISTRY.items()
    ]


def get_plugin(name: str) -> AnalysisPlugin:
    plugin = _PLUGIN_REGISTRY[name]
    if not _PLUGIN_STATUS.get(name, False):
        raise KeyError("Plugin disabled")
    return plugin


def enable_plugin(name: str) -> bool:
    if name not in _PLUGIN_REGISTRY:
        return False
    _PLUGIN_STATUS[name] = True
    return True


def disable_plugin(name: str) -> bool:
    if name not in _PLUGIN_REGISTRY:
        return False
    _PLUGIN_STATUS[name] = False
    return True
