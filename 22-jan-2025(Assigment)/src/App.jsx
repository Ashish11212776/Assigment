// Create a page welcome message :
// 1. Get the user name in the input field
// 2. When the button is pressed add an event that get the user name and
// creates a welcome message on the page
// 3. Add a check to ensure the length of the input is larger than 3
// characters long

import { useState } from "react";
import "./App.css";
function App() {
const [userInput,setuserInput]=useState(null);
const [name,setname]=useState("");
 const handleChange=(e)=>{
  setuserInput(e.target.value)
  e.preventDefault();
 };
 const inputsubmit=()=>{
   if(userInput && userInput.length>3){
    setname(userInput);
    setuserInput("");
   }else{
    alert("plese enter somthing");
   }
 };

  return (
      <>
      <div className="parent">
        <h1>Welcome to the page: {name}</h1>
        <div className="inputbox">
          <input type="text" placeholder="Enter your name" onChange={(event)=>(handleChange(event))}/>
          <button className="myBotton" onClick={inputsubmit}>Submit</button>
        </div>
      </div>
     </>
  )
}

export default App
