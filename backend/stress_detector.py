from textblob import TextBlob

def analyze_stress(text: str):
    blob = TextBlob(text)
    polarity = round(blob.sentiment.polarity, 2)
    subjectivity = round(blob.sentiment.subjectivity, 2)

    # Determine stress level
    if polarity < -0.3:
        stress_level = "High"
        suggestion = "Take a short break, practice deep breathing, or talk to your mentor."
    elif polarity < 0:
        stress_level = "Medium"
        suggestion = "Try a relaxing activity or note down your thoughts."
    else:
        stress_level = "Low"
        suggestion = "Keep up the positive mood! Maybe write down happy moments."

    return {
        "stress_level": stress_level,
        "polarity": polarity,
        "subjectivity": subjectivity,
        "suggestion": suggestion
    }
