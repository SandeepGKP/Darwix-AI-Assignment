import pyttsx3
import os
import uuid

def generate_voice(text: str, emotion: str):
    os.makedirs("static/audio", exist_ok=True)

    filename = f"audio/{uuid.uuid4()}.mp3"   # ✅ only relative path inside static

    engine = pyttsx3.init()
    rate = 170
    volume = 1.0

    if emotion == "happy":
        rate = 200
        volume = 1.0
    elif emotion == "frustrated":
        rate = 130
        volume = 0.7

    engine.setProperty('rate', rate)
    engine.setProperty('volume', volume)

    engine.save_to_file(text, f"static/{filename}")
    engine.runAndWait()
    
    return f"http://localhost:8000/static/{filename}"
