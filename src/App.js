import logo from "./logo.svg";
import "./App.css";
import "./Assets/CSS/main.css";
// import Clicker from "./components/Clicker";
import { useState } from "react";
import ClickerView from "./components/ClickerView";

function App() {
  const [click, setClick] = useState(0);
  const [milk, setMilk] = useState(0);
  const [addValue, setAddValue] = useState(1);
  const [addMilk, setAddMilk] = useState(1);

  return (
    <div className="container">
      <div className="background">
        <div>
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/5/59/Cookie_Clicker_Logo.png"
            alt="cookie clicker logo"
          />
          <div className="milkContainer">
            <img
              className="headerCounter"
              src="https://cdn-icons-png.flaticon.com/512/112/112431.png"
              alt="milk icon"
            />
            <h1 className="milkCounter">x {milk} </h1>
          </div>
        </div>
        <ClickerView
          click={click}
          setClick={setClick}
          milk={milk}
          setMilk={setMilk}
          addValue={addValue}
          setAddValue={setAddValue}
          addMilk={addMilk}
          setAddMilk={setAddMilk}
        />
      </div>
    </div>
  );
}

export default App;
