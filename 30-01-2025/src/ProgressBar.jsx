
import { useState,useEffect } from "react";
const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

 useEffect(() => {
    let interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval); 
          return 100;
        }
        return prev + 5; 
      });
    }, 100);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;