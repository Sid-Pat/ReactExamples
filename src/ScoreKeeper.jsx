import React, { useState } from 'react'

function ScoreKeeper() {
  const st = {border:"2px solid black"};

  const [scr,setScr] = useState([0,0]);

  const incrScr = (pl) => {
    (pl==0)?scr[0]++:scr[1]++;
    const curScr = [...scr];
    setScr(curScr);
    
  }

  return (
    <div style={st}>
        <h2>Player-1 : {scr[0]}</h2>
        <h2>Player-2 : {scr[1]}</h2>
        <button onClick={()=>{incrScr(0)}}>PowerP-1</button>
        <button onClick={()=>{incrScr(1)}}>PowerP-2</button>
    </div>
  )
}

export default ScoreKeeper