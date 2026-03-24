from textblob import TextBlob

def detect_emotion(text: str):
    polarity = TextBlob(text).sentiment.polarity

    if polarity > 0.3:
        return "happy", polarity
    elif polarity < -0.3:
        return "frustrated", polarity
    else:
        return "neutral", polarity