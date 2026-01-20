from fastapi import APIRouter, UploadFile

from app.models.responses import UploadResponse
from app.utils.storage import save_upload

router = APIRouter()


@router.post("/", response_model=UploadResponse)
async def upload_file(file: UploadFile) -> UploadResponse:
    file_id = await save_upload(file)
    return UploadResponse(file_id=file_id, filename=file.filename)
