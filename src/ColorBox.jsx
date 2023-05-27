import React from 'react'
import "./ColorBox.css";
import { useState } from 'react';

const getRandomColor = (color) => {
  const id = Math.floor(Math.random()*color.length);
  return color[id];
}

function ColorBox({c}) {
    const [cl,useCl] = useState(getRandomColor(c));

    const changeColor = () =>{
      useCl(getRandomColor(c));
    }

    const st = {backgroundColor:cl};
  return (
    <div className='ColorBox' onClick={changeColor} style={st}></div>
  )
}

export default ColorBox;