import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [light, setLight] = useState("red"); 
  const [time, setTime] = useState(4000); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLight((prevLight) => {
        if (prevLight === "red") {
          setTime(500); 
          return "yellow";
        } else if (prevLight === "yellow") {
          setTime(3000); 
          return "green";
        } else {
          setTime(4000); 
          return "red";
        }
      });
    }, time); 

    return () => clearTimeout(timer); 
  }, [light, time]); 

  return (
    <div className="container">
      <div id="box1" className={light === "red" ? "active red" : "red"}></div>
      <div id="box2" className={light === "yellow" ? "active yellow" : "yellow"}></div>
      <div id="box3" className={light === "green" ? "active green" : "green"}></div>
      <h2>{light.toUpperCase()} - {time}ms</h2>
    </div>
  );
}

export default App;
