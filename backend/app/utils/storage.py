from pathlib import Path
from uuid import uuid4

from fastapi import UploadFile

UPLOAD_DIR = Path("uploads")


async def save_upload(file: UploadFile) -> str:
    UPLOAD_DIR.mkdir(parents=True, exist_ok=True)
    file_id = f"{uuid4().hex}_{file.filename}"
    target = UPLOAD_DIR / file_id
    content = await file.read()
    target.write_bytes(content)
    return file_id
