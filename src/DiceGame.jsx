import React from 'react'

function DiceGame() {
    const num1 = Math.floor(Math.random()*3)+1;
    const num2 = Math.floor(Math.random()*3)+1;
    const isWinner  = (num1===num2);
    const cl = {color : isWinner?"green":"red"};
  return (
    <div style={cl}>
        <h2>Game</h2>
        {(isWinner) && <h4>You Win!</h4>}
        <p>Num-1 : {num1}</p>
        <p>Num-2 : {num2}</p>
    </div>
  )
}

export default DiceGame