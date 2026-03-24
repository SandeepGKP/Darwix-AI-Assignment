from fastapi import APIRouter
from app.models.empathy_schemas import TextInput
from app.services.empathy_service import process_empathy

router = APIRouter()

@router.post("/speak")
def speak(data: TextInput):
    return process_empathy(data.text)