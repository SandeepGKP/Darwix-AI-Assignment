from app.services.emotion_service import detect_emotion
from app.services.tts_service import generate_voice

def process_empathy(text: str):
    emotion, score = detect_emotion(text)

    audio_file = generate_voice(text, emotion)

    return {
        "input": text,
        "emotion": emotion,
        "confidence": score,
        "audio_file": audio_file,
        "mapping": {
            "happy": {"rate": "fast", "volume": "high"},
            "frustrated": {"rate": "slow", "volume": "low"},
            "neutral": {"rate": "normal", "volume": "medium"}
        }
    }