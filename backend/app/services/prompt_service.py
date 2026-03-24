def enhance_prompt(sentence: str):
    base_style = "cinematic, highly detailed, ultra realistic, 4k, dramatic lighting, depth of field"

    if any(word in sentence.lower() for word in ["person", "man", "woman", "boy", "girl"]):
        style = base_style + ", portrait, natural skin tones"
    elif any(word in sentence.lower() for word in ["car", "vehicle", "bike"]):
        style = base_style + ", motion blur, dynamic angle"
    else:
        style = base_style + ", artistic composition"

    return f"{sentence}, {style}"