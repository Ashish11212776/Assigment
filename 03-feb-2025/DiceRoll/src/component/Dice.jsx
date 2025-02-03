import React from 'react'

const Dice = ({number}) => {
    console.log(number);
  return (
    
    <div className="dice-container">
      {Array.from({ length: number }).map((_, i) => (
       
        <div key={i} className="box">

        </div>
      ))}
    </div>
    
   
  )
}

export default Dice