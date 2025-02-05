import React, { useState, useEffect } from "react";
import SevenSegmentDigit from "./SevenSegmentDigit";
import "./SevenSegmentClock.css";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (value) => value.toString().padStart(2, "0"); // Ensures two-digit format

  const hours = formatTime(time.getHours()); // Use `getHours()` for 24-hour format
  const minutes = formatTime(time.getMinutes());
  const seconds = formatTime(time.getSeconds());

  return (
    <div className="clock-container">
      <div className="clock">
        <SevenSegmentDigit digit={parseInt(hours[0])} />
        <SevenSegmentDigit digit={parseInt(hours[1])} />
        <div className="colon">:</div>
        <SevenSegmentDigit digit={parseInt(minutes[0])} />
        <SevenSegmentDigit digit={parseInt(minutes[1])} />
        <div className="colon">:</div>
        <SevenSegmentDigit digit={parseInt(seconds[0])} />
        <SevenSegmentDigit digit={parseInt(seconds[1])} />
      </div>
    </div>
  );
}

export default DigitalClock;
