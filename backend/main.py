from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Enable CORS so frontend can call backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request body model
class TextRequest(BaseModel):
    text: str

# Dummy analyze route
@app.post("/analyze")
def analyze_text(request: TextRequest):
    text = request.text

    # Dummy logic for stress analysis
    if "stress" in text.lower():
        stress_level = "High"
    elif "tired" in text.lower():
        stress_level = "Medium"
    else:
        stress_level = "Low"

    return {
        "stress_level": stress_level,
        "polarity": 0.5,
        "subjectivity": 0.6,
        "suggestion": "Take a short break and relax."
    }

# Optional health check
@app.get("/")
def health_check():
    return {"status": "Backend is running"}
