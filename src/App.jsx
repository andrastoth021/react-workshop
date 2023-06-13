// use nextId() to generate a new unique ID when needed
import nextId from "./generateId";
import React, { useState } from "react";
import Dice from "./components/Dice";
import DiceRoller from "./components/DiceRoller";

function App() {
  const [roll, setRoll] = useState(0);

  const handleRoll = (num) => {
    //console.log(num);
    setRoll(num);
  }

  return (
    <div>
      <Dice number={roll}/>
      <DiceRoller onRoll={handleRoll}/>
    </div>
  );
}

export default App;
