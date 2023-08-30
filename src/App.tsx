import { useState, useEffect } from "react";
import "./app.css";
import Header from "./Header";
import Footer from "./Footer";
import jsonData from "./Reasons.json";

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function App() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const reasons = jsonData.reasons;
  const shuffledReasons = shuffleArray(reasons);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(
        (prevIndex) => (prevIndex + 1) % shuffledReasons.length
      );
    }, 5000); // Change text every 7 seconds

    return () => clearInterval(interval);
  }, [shuffledReasons]);

  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <h5 className="reasons-title">Reasons to Live:</h5>
        <div className="reasons-content">
          {shuffledReasons[currentTextIndex]}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
