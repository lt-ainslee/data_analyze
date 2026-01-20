from abc import ABC, abstractmethod
from dataclasses import dataclass
from typing import Any, Dict, List


@dataclass
class AnalysisResult:
    summary: Dict[str, Any]
    chart_config: Dict[str, Any]
    data: List[Dict[str, Any]]


class AnalysisPlugin(ABC):
    name: str
    description: str

    @abstractmethod
    def analyze(self, data_id: str, params: Dict[str, Any] | None) -> AnalysisResult:
        raise NotImplementedError

    @abstractmethod
    def parameters(self) -> Dict[str, Any]:
        raise NotImplementedError
