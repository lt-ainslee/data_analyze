from typing import Any, Dict, Optional

from pydantic import BaseModel


class AnalyzeRequest(BaseModel):
    module: str
    data_id: str
    params: Optional[Dict[str, Any]] = None
