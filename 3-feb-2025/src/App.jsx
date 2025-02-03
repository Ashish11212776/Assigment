
import { useState } from "react";

function App() {
  const [dataList, setdataList] = useState([
    "Delhi",
    "Mumbai",
    "punjab",
    "pune",
  ]);
  const [checked, setchecked] = useState(false);

  const handleSubmit = (index) => {
    const newDataList = dataList.filter((_, i) => i !== index);
    setdataList(newDataList);
  };

  return (
    <>
      <div className="list-Container">
        {dataList.map((dataList, index) => (
          <div key={index} style={{ display: "flex" }}>
            <input type="checkbox" onClick={()=>setchecked(!checked)} />
            <li>{dataList}</li>
            {checked ? (
              <button onClick={() => handleSubmit(index)}>Delete</button>
            ) : null
              
            }
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
