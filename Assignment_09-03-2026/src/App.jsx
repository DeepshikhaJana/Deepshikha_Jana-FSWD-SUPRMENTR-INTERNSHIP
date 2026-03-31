import { useState } from "react";
import "./App.css";

function App() {
  const [mood, setMood] = useState("Happy");

  const moods = [
    {
      label: "Happy",
      emoji: "😊",
      message: "Keep smiling! You're doing great!",
    },
    {
      label: "Sad",
      emoji: "😢",
      message: "It's okay to feel sad. Tomorrow is a new day.",
    },
    {
      label: "Excited",
      emoji: "🤩",
      message: "That's awesome! Let's keep the energy high!",
    },
    { label: "Tired", emoji: "😴", message: "Take some rest. You deserve it!" },
  ];

  const currentMood = moods.find((m) => m.label === mood);

  return (
    <div className="container">
      <h1>How are you feeling today?</h1>

      <div className="mood-options">
        {moods.map((m) => (
          <button
            key={m.label}
            className={`mood-btn ${mood === m.label ? "active" : ""}`}
            onClick={() => setMood(m.label)}
          >
            {m.emoji} {m.label}
          </button>
        ))}
      </div>

      <div className="mood-display">
        <div className="emoji-large">{currentMood.emoji}</div>
        <h2>{currentMood.label}</h2>
        <p className="message">{currentMood.message}</p>
      </div>

      {/* <p className="footer">
        This app demonstrates React <code>useState</code> for dynamic UI
        updates.
      </p> */}
    </div>
  );
}

export default App;
