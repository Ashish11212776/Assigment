import React from "react";

const Tab = ({ title, isActive, onClick }) => {
  return (
    <button className={isActive ? "tab active" : "tab"} onClick={onClick}>
      {title}
    </button>
  );
};

export default Tab;
