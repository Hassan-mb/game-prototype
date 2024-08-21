import React from "react";
import { useState } from "react";
import "../Assets/CSS/main.css";

export const Clicker = ({ click, setClick }) => {
  //   const [click, setClick] = useState(0);
  const updateClick = () => {
    setClick(click + 1);
    console.log("increase clicks", click);
  };
  return (
    <div>
      <div className="counter">
        <h1 className="textColor">{click}</h1>
        <h3>Cookies Eaten</h3>
        <button onClick={updateClick}>Eat Cookies!</button>
        <p>1 cookies per click</p>
      </div>
    </div>
  );
};

export default Clicker;
