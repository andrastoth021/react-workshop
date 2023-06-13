import React from 'react';

function DiceRoller(props) {
  const onRoll = props.onRoll;

  function getRandomNumber(randNum) {
    return Math.floor(Math.random() * (6 - 1) + 1);
  }

  return (
    <div>
      <button onClick={() => onRoll(getRandomNumber())}>Roll!</button>
    </div>
  )
}

export default DiceRoller;
