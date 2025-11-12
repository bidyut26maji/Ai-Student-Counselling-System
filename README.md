ai-student-counselling-system/
│
├── backend/
│   ├── app.py
│   ├── mood_model.pkl
│   ├── requirements.txt
│   ├── utils/
│   │   ├── mood_detector.py
│   │   └── resource_provider.py
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│
├── README.md
└── LICENSE
# 🎓 AI-Based Student Counseling System

An intelligent chatbot designed to provide mental health support for students through Natural Language Processing (NLP) and Machine Learning. The system detects emotional states from user text and responds with supportive advice, coping strategies, or professional guidance.

---

## 🧠 Overview

University life can be stressful. Many students hesitate to reach out for help due to stigma, lack of access, or fear of judgment. This **AI-Based Student Counseling System** offers a safe, anonymous, and accessible digital platform to provide first-level emotional support.

---

## 🚀 Features

- 🗣️ Detects mood/emotion from user text input (e.g., stressed, anxious, depressed, happy, motivated, neutral)
- 💬 Provides customized advice and mental wellness resources
- ⚠️ Emergency detection for high-risk inputs (e.g., suicide or self-harm)
- 🌐 Deployed as a web app (Frontend + Flask Backend)
- 🤖 Uses NLP and Machine Learning (Logistic Regression + TF-IDF)

---

## 🧩 System Architecture

### 1️⃣ Frontend
- **Technologies:** HTML5, CSS3, JavaScript  
- **Functions:**
  - Displays a responsive chat interface  
  - Sends user messages to the backend using `fetch()`  
  - Dynamically updates AI responses in real-time  

### 2️⃣ Backend
- **Framework:** Flask (Python)  
- **Modules:**
  - `mood_detector.py`: Loads and applies the ML model for emotion classification  
  - `resource_provider.py`: Returns supportive messages and coping strategies  
  - `app.py`: Flask API endpoint that handles chat requests  

---

## 🧮 Machine Learning Model

- **Dataset:** Synthetic dataset containing labeled emotional text samples  
- **Preprocessing:** Lowercasing, punctuation removal  
- **Feature Extraction:** TF-IDF Vectorization  
- **Model:** Logistic Regression (scikit-learn)  
- **Saved Model:** `mood_model.pkl` (loaded during runtime)

---

## ⚙️ Installation and Setup

### 🔹 Step 1: Clone this Repository
```bash
git clone https://github.com/<your-username>/ai-student-counselling-system.git
cd ai-student-counselling-system
