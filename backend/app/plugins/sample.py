from typing import Any, Dict

from app.plugins.base import AnalysisPlugin, AnalysisResult


class SampleSummaryPlugin(AnalysisPlugin):
    name = "summary"
    description = "Basic dataset summary sample plugin"

    def analyze(self, data_id: str, params: Dict[str, Any] | None) -> AnalysisResult:
        summary = {"data_id": data_id, "rows": 0, "columns": 0}
        chart_config = {
            "title": {"text": "Sample Chart"},
            "xAxis": {"type": "category", "data": ["A", "B", "C"]},
            "yAxis": {"type": "value"},
            "series": [{"data": [1, 2, 3], "type": "bar"}],
        }
        return AnalysisResult(summary=summary, chart_config=chart_config, data=[])

    def parameters(self) -> Dict[str, Any]:
        return {
            "type": "object",
            "properties": {
                "sample_rate": {
                    "type": "number",
                    "default": 1.0,
                    "description": "Fraction of rows to sample",
                }
            },
        }
