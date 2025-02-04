import { useState } from "react";
import Dice from "./component/Dice.jsx";
function App() {
 const [numDice, setNumDice] = useState(1);
  const [rollResults, setRollResults] = useState([]);

  const rollDice = () => {
    const results = Array.from({ length: numDice }, () => Math.floor(Math.random() * 6) + 1);
    setRollResults(results);
  };

  return (
    <div className="app">
      <h2>Dice Rolle</h2>
      <input
        type="number"
        min="1"
        max="12"
        value={numDice}
        onChange={(e) => setNumDice(Math.min(12, Math.max(1, Number(e.target.value))))}
      />
      <button onClick={rollDice}>Roll</button>

      <div className="dice-container">
        {rollResults.map((value, index) => (
          <div key={index} className="dice">{value}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
