from fastapi import APIRouter

from app.models.requests import AnalyzeRequest
from app.models.responses import AnalyzeResponse
from app.plugins.registry import get_plugin

router = APIRouter()


@router.post("/", response_model=AnalyzeResponse)
async def run_analysis(payload: AnalyzeRequest) -> AnalyzeResponse:
    plugin = get_plugin(payload.module)
    result = plugin.analyze(payload.data_id, payload.params)
    return AnalyzeResponse(
        module=payload.module,
        summary=result.summary,
        chart_config=result.chart_config,
        data=result.data,
    )
