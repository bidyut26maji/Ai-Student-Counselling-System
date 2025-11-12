import React from "react";
import "../index.css"; // make sure global styles are applied

const Home = () => {
  return (
    <div className="container">
      <h2>Welcome to AI Student Counselling</h2>
      <p>
        This app helps you analyze your mood and stress levels. You can log
        your daily mood, check your stress levels, and review your journal
        entries to better understand your mental health trends.
      </p>
      <button>Get Started</button>
    </div>
  );
};

export default Home;
