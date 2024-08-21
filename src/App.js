import logo from "./logo.svg";
import "./App.css";
import "./Assets/CSS/main.css";
import Clicker from "./Components/Clicker";
import { useState } from "react";

function App() {
  const [click, setClick] = useState(0);
  const [milk, setMilk] = useState(0);

  return (
    <div className="container">
      <div>
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/5/59/Cookie_Clicker_Logo.png"
          alt="cookie clicker logo"
        />
        <img
          className="headerCounter"
          src="https://cdn-icons-png.flaticon.com/512/112/112431.png"
          alt="milk icon"
        />
        <h1 className="milkCounter">x {click} </h1>
      </div>
      <Clicker click={click} setClick={setClick} />
    </div>
  );
}

export default App;
