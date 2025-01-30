import { useState } from "react";
import ProgressBar from "./Progressbar";
import "./App.css";

function App() {
  const [bars, setBars] = useState([]);

  const handleClick = () => {
    const id = Date.now();
    setBars((prevBars) => [...prevBars, { id, progress: 0 }]);
  };

  return (
    <div className="bar-container">
      <button className="btn" onClick={handleClick}>
        Add
      </button>
      <div className="bars">
        {bars.map((bar) => (
          <ProgressBar key={bar.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
