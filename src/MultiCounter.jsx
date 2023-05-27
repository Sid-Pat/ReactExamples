import React, { useState } from 'react'

function MultiCounter() {
    const st = {border:"2px solid black"};
    const [num,setNum] = useState(0);

    console.log("rendered");

    const incrOne = () => {
        setNum((currCnt) => currCnt+1);
    }

    const incrThree = () => {
        setNum((currCnt) => currCnt+1);
        setNum((currCnt) => currCnt+2);
    }

    const setFive = () => {
        setNum(5);
    }

  return (
    <div style={st}>
        <h2>Counter : {num}</h2>
        <button onClick={incrOne}>+1</button>
        <button onClick={incrThree}>+3</button>
        <button onClick={setFive}>Set to 5</button>
    </div>
  )
}

export default MultiCounter