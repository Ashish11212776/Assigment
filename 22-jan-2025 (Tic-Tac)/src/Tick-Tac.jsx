import Square from "./Components/Square.jsx";
import { useState } from "react";
import "./Tic-Tac.css"
export default function TickTac() {
   const [SquareVal,setSquareVal]=useState(Array(9).fill(null));
   const [isNext,setisNext]=useState(true);
   const CalculateWinner=(SquareVal)=>{
    const lines = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left
    [2, 4, 6], // Diagonal from top-right
  ];
  for(let line of lines){
    const [a,b,c]=line;
    if(SquareVal[a]&& SquareVal[a]===SquareVal[b]&& SquareVal[a]===SquareVal[c]){
        return SquareVal[a];
    }
  }
  return null;
   }
   const winner=CalculateWinner(SquareVal);
   const handleClick=(index)=>{
      if (SquareVal[index] || CalculateWinner(SquareVal) ) {
      return; // Prevent further action
       }
      const SquareValCopy=SquareVal.slice();
      SquareValCopy[index]=isNext ? 'X':'O';
     setSquareVal(SquareValCopy);
     setisNext(!isNext);
 
   }
  return (
   <>
   <div className="container">
   <h1>Tic-Toc Game</h1>
   <div className="board">
    <Square value={SquareVal[0]} ClickSubmit={() => handleClick(0)}/>
     <Square value={SquareVal[1]} ClickSubmit={() => handleClick(1)}/>
     <Square value={SquareVal[2]} ClickSubmit={() => handleClick(2)}/>
   </div>
    <div className="board">
   <Square value={SquareVal[3]} ClickSubmit={() => handleClick(3)}/>
    <Square value={SquareVal[4]} ClickSubmit={() => handleClick(4)}/>
   <Square value={SquareVal[5]} ClickSubmit={() => handleClick(5)}/>
   </div>
    <div className="board">
     <Square value={SquareVal[6]} ClickSubmit={() => handleClick(6)}/>
    <Square value={SquareVal[7]} ClickSubmit={() => handleClick(7)}/>
     <Square value={SquareVal[8]} ClickSubmit={() => handleClick(8)}/>
   </div>
     <h2>Winner is: {winner}</h2>
   </div>
   </>
  );
}