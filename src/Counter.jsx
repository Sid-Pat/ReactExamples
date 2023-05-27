import React from 'react'
import { useState } from 'react';

function Counter() {
  
  const [num,setNum]=useState(1);

  const changeNum = () =>{
    setNum(num+1);
  }

  return (
    <div>
        <h2>The count is: {num}</h2>
        <button onClick={changeNum}>Increment</button>
    </div>
  )
}

export default Counter