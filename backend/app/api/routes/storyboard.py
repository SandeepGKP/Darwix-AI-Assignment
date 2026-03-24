from fastapi import APIRouter
from app.models.pitch_schemas import PitchInput
from app.services.pitch_service import generate_storyboard

router = APIRouter()

@router.post("/generate")
def create_story(data: PitchInput):
    return generate_storyboard(data.text)