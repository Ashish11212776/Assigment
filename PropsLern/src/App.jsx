
import React from "react";
import Gallery from "./components/Gallery"
import { getImageUrl } from "./components/Utils";
import AchievementContext from "./components/AchivementContext.jsx"


function App() {
  const listOfPeople=[
     {
      name:"Maria Skłodowska-Curie",
      imgUrl:getImageUrl('szV5sdG'),
      profession:"physicist & cheist",
      award:"4(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
      discovered:'polonium (chemical element)'
     },
      {
      name:"Katsuko Saruhashi",
      imgUrl:getImageUrl('szV5sdG'),
      profession:" geochemist",
      award:"2(Miyake Prize for geochemistry, Tanaka Prize)",
      discovered:'a method for measuring carbon dioxide in seawater'
     },
  ];
  const Acivement=['physics','physics','physics','physics'];
    

  return (
    <>
    <AchievementContext.Provider value={Acivement}>
    <Gallery listOfPeople={listOfPeople}/>
    </AchievementContext.Provider>
    </>
  )
}

export default App
