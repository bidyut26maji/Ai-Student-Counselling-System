import React, { useState } from "react";
import "../index.css";      // global styles
import "./LogMood.css";     // page-specific styles

const LogMood = () => {
  const [inputText, setInputText] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!inputText.trim()) {
      setError("Please write something before analyzing.");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: inputText }),
      });

      if (!res.ok) throw new Error("API request failed");

      const data = await res.json();
      setResponse(data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch response. Check backend.");
    } finally {
      setLoading(false);
    }
  };

  const getStressClass = (level) => {
    if (!level) return "";
    switch (level.toLowerCase()) {
      case "high":
        return "high";
      case "medium":
        return "medium";
      case "low":
        return "low";
      default:
        return "";
    }
  };

  return (
    <div className="container logmood-container">
      <h2>Log Your Mood</h2>
      <textarea
        className="mood-input"
        placeholder="Write about your mood here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="analyze-btn" onClick={handleSubmit} disabled={loading}>
        {loading ? "Analyzing..." : "Analyze Mood"}
      </button>

      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      {response && (
        <div className={`response-box ${getStressClass(response.stress_level)}`}>
          <p><strong>Stress Level:</strong> {response.stress_level}</p>
          <p><strong>Polarity:</strong> {response.polarity}</p>
          <p><strong>Subjectivity:</strong> {response.subjectivity}</p>
          <p><strong>Suggestion:</strong> {response.suggestion}</p>
        </div>
      )}
    </div>
  );
};

export default LogMood;
