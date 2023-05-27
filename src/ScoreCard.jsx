import React from 'react'

function ScoreCard({id,scr,incrScr,mxS}) {
  return (
    <>
    <li style={{textDecoration:"underline"}} key={id+1}>
        <span>
            <b>Player-{id+1}</b> Score:{scr}
            <button onClick={()=>incrScr(id)}>Hit</button>
            {((scr>=mxS) && <p style={{color:"green"}}>Winner Player-{id+1}!</p>)}
        </span>
    </li>
    </>
  )
}

export default ScoreCard