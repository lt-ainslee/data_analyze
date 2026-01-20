from typing import Any, Dict, List, Optional

from pydantic import BaseModel


class UploadResponse(BaseModel):
    file_id: str
    filename: Optional[str] = None


class AnalyzeResponse(BaseModel):
    module: str
    summary: Dict[str, Any]
    chart_config: Dict[str, Any]
    data: List[Dict[str, Any]]


class PluginInfo(BaseModel):
    name: str
    description: str
    enabled: bool
    parameters: Dict[str, Any]


class PluginListResponse(BaseModel):
    plugins: List[PluginInfo]


class PluginStatusResponse(BaseModel):
    name: str
    enabled: bool
