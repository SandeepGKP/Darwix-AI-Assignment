import nltk

nltk.download('punkt')
nltk.download('punkt_tab')

from nltk.tokenize import sent_tokenize

def segment_text(text: str):
    return [s.strip() for s in sent_tokenize(text)]