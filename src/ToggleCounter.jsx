import React from 'react'
import { useState } from 'react';

function ToggleCounter() {

    const myStyle = {border:"solid 1px black"}

    const [emoji,setEmoji] = useState(true);

    const changeEmoji = () => setEmoji(!emoji);

    const [num,setNum] = useState(0);

    const incrNum = () => setNum(num+2);

  return (
    <div>
        <div style={myStyle}>
            <h2>{emoji?"🤪":"😎"}</h2>
            <button key="emojBtn" onClick={changeEmoji}>ChangeMyEmoji</button>
        </div>
        <br/>
        <br/>
        <div style={myStyle}>
            <h2>{num}</h2>
            <button key="incrNum" onClick={incrNum}>IncrementMyNumber</button>
        </div>
    </div>
  )
}

export default ToggleCounter