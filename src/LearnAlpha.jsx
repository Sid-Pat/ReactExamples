import React, { useState } from 'react'
import {v4 as uuid} from 'uuid'

const alphabet = [];

for (let i = 97; i <= 122; i++) {
  alphabet.push({id:uuid() , ch:String.fromCharCode(i)});
}

function LearnAlpha() {
  const st = {border:"1px solid black"}

const [alp,setAlp] = useState([alphabet[0]]);

const [msg,setMsg] = useState("Let's Start");

const nextAlp = () => {
    let idx = alp.length;
    if(idx==12){
      setMsg("Great Going !")
    }
    if(idx>25){
      setMsg("Mission Completed :) ");
      return;
    }
    let lastAlp = alphabet[idx];
    setAlp((oldAlp) => [...oldAlp,lastAlp]);
}

const deleteAlp = (id) => {
  setAlp((oldAlp) => oldAlp.filter((e) => (e.id!==id)))
}

const makeStar = () => {
  setAlp((oldAlp) => oldAlp.map((x) => {
    return {...x,ch:"⭐"}
  }))
}

  return (
    <>
    <div style={st}>
        <h2>
            {alp.map((a)=> <span onClick={()=>deleteAlp(a.id)} key={a.id} style={{padding:"2px"}}>{a.ch}</span>)}
        </h2>


        <button onClick={nextAlp}>Next Alphabet</button>
    </div>

    <div>{msg}</div>
    <br></br>
    <button onClick={makeStar}>Make Everything Star</button>
    </>
  )
}

export default LearnAlpha