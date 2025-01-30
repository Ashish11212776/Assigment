import React from "react";
import { useState } from "react";
import "./Tab.css";
const Tab = () => {
  const [flag, setflag] = useState(false);
  const handleClick = (flag) => {
    setflag(flag);
  };
  return (
    <>
      <button className="btn" onClick={()=>handleClick(!flag)}>
        <div className="tab">
          {flag ? (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              deleniti quisquam explicabo est a labore perspiciatis, ab itaque
              vitae sed omnis fuga optio. Quae molestiae quia dolor deleniti
              praesentium cumque.
            </p>
          ) : (
            <p>plese trun on Tab</p>
          )}
        </div>
      </button>
    </>
  );
};

export default Tab;
