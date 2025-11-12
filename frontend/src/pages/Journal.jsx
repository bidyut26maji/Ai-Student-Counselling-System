import React from "react";
import "../index.css"; // main styles for container and global look

const Journal = () => {
  const entries = [
    "Today was a good day.",
    "Feeling a bit stressed about exams.",
    "Had a relaxing walk in the evening.",
  ];

  return (
    <div className="container">
      <h2>Journal Entries</h2>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
};

export default Journal;
