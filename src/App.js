import React, { useEffect, useState } from "react";
import "./QuotesDatabase";
import "./App.css";
import quotes from "./QuotesDatabase";

function App() {
  const [count, setCount] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );
  const [bgColor, setBgColor] = useState("blue");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let randomColor;
    do {
      randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    } while (randomColor === "#ffffff" || randomColor === bgColor);

    setCount(quotes[Math.floor(Math.random() * quotes.length)]);
    setBgColor(randomColor);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false); // Reset the submitted state after a delay
    }, 500); // Adjust the delay (in milliseconds) as needed
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: bgColor,
        height: "100vh",
        textAlign: "center",
        padding: "50px",
      }}
    >
      <div style={{ color: bgColor }} className="modal">
        <div className={submitted ? "submitted" : "text"}>
          <h1>"{count.quote}"</h1>
          <h5>-{count.author}-</h5>
        </div>
        <form onSubmit={handleSubmit}>
          <button style={{ backgroundColor: bgColor }} type="submit">
            New quote
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
