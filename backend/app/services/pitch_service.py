from app.services.segmentation_service import segment_text
from app.services.prompt_service import enhance_prompt
from app.services.image_service import generate_image

def generate_storyboard(text: str):
    segments = segment_text(text)

    storyboard = []

    for i, sentence in enumerate(segments):
        prompt = enhance_prompt(sentence)
        image = generate_image(prompt, i)

        storyboard.append({
            "scene": sentence,
            "enhanced_prompt": prompt.strip(),
            "image": image
        })

    return {
        "total_scenes": len(storyboard),
        "storyboard": storyboard
    }