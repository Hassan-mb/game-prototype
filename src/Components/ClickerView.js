import React from "react";
import { useState } from "react";
import "../Assets/CSS/main.css";
import cookieImage from "../Assets/media/5473473-removebg-preview.png";

export const ClickerView = ({
  click,
  setClick,
  setMilk,
  milk,
  addValue,
  setAddValue,
  addMilk,
  setAddMilk,
}) => {
  //   const [click, setClick] = useState(0);

  const updateClick = () => {
    setClick(click + addValue);
    setMilk(milk + addMilk);
    console.log("increase clicks", click);
    console.log("increase milk", milk);
  };

  return (
    <div>
      <div className="counter">
        <h1 className="textColor">{click}</h1>
        <h3>Cookies Eaten</h3>
        <button onClick={updateClick} className="cookieButton">
          {" "}
          <img src={cookieImage} alt="cookie button" className="imgSize" />{" "}
        </button>
        <p>1 cookies per click</p>
      </div>
      <div className="buttonsContainer">
        {click >= 100 && milk >= 100 ? (
          <button
            className="upgradeButtons"
            onClick={() => {
              setAddValue(2);
              setAddMilk(4); //quadruple the milk
              setMilk(milk - 100);
            }}
          >
            Double Your Points
          </button>
        ) : null}

        {click >= 50 && milk >= 50 ? (
          <button
            className="upgradeButtons"
            onClick={() => {
              setAddMilk(2); //double the milk
              setMilk(milk - 50);
            }}
          >
            Double Your Milk
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default ClickerView;
