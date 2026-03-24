import requests
import os
from dotenv import load_dotenv
load_dotenv()
API_KEY = os.getenv("STABILITY_API_KEY")

def generate_image(prompt, idx):
    os.makedirs("static/images", exist_ok=True)
    filename = f"static/images/scene_{idx}.png"

    response = requests.post(
        "https://api.stability.ai/v2beta/stable-image/generate/core",
        headers={
            "Authorization": f"Bearer {API_KEY}",
            "Accept": "image/*"
        },
        files={
            "none": ("", "")  # required dummy field
        },
        data={
            "prompt": prompt,
            "output_format": "png"
        }
    )

    if response.status_code == 200:
        with open(filename, "wb") as f:
            f.write(response.content)
    else:
        raise Exception(response.text)

    return f"http://localhost:8000/static/images/scene_{idx}.png"