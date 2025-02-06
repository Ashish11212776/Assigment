import  { useState } from "react";
import Tab from './Tab.jsx'
import Panel from "./Panel.jsx";
import './App.css'

function App() {
 const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Tab 1", "Tab 2", "Tab 3"];
  const panels = [
    "Content for Tab 1",
    "Content for Tab 2",
    "Content for Tab 3",
  ];

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            title={tab}
            isActive={index === activeTab}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>
      <Panel content={panels[activeTab]} />
    </div>
  );
}

export default App;
