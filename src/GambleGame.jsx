import React from 'react'

function GambleGame({val1,val2,val3}) {
    const isWin = (val1===val2 && val2===val3);
    const cl = isWin?"green":"red";
  return (
    <div>
        <h1>{val1} {val2} {val3}</h1>
        <h3 style={{color:cl}}>{ isWin? "You Win!":"You lose :( "}</h3>
        {isWin && <h2>Congrats !!!</h2>}
    </div>
  )
}

export default GambleGame