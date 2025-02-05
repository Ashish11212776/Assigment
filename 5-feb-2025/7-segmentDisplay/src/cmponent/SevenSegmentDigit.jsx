import React from "react";
import "./SevenSegmentClock.css";

const segmentMap = {
  0: ["A", "B", "C", "D", "E", "F"],
  1: ["B", "C"],
  2: ["A", "B", "G", "E", "D"],
  3: ["A", "B", "G", "C", "D"],
  4: ["F", "G", "B", "C"],
  5: ["A", "F", "G", "C", "D"],
  6: ["A", "F", "G", "E", "D", "C"],
  7: ["A", "B", "C"],
  8: ["A", "B", "C", "D", "E", "F", "G"],
  9: ["A", "B", "C", "D", "F", "G"],
};

function SevenSegmentDigit({ digit }) {
  return (
    <div className="seven-segment">
      {["A", "B", "C", "D", "E", "F", "G"].map((segment) => (
        <div
          key={segment}
          className={`segment ${segment} ${
            segmentMap[digit]?.includes(segment) ? "on" : "off"
          }`}
        ></div>
      ))}
    </div>
  );
}

export default SevenSegmentDigit;
