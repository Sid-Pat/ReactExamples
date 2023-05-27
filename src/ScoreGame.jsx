import React, { useState } from 'react'
import ScoreCard from './ScoreCard';

let gotWinner=false;

function ScoreGame({np,mxS}) {
  const [pl,setPl] = useState(new Array(np).fill(0));

  // const incrRandom = () => {
  //     return (Math.floor(Math.random()*2+1));
  // }

  const incrScr = (idx) => {
    if(gotWinner===true){
        return;
    }
    pl[idx]+=(Math.floor(Math.random()*mxS));
    if(pl[idx]>=mxS) gotWinner=true;
    setPl((orgPl) => [...orgPl]);
  }

  const resetGame = () => {
    gotWinner=false;
    setPl(new Array(np).fill(0));
  }

  return (
    <>
    <h1>Score Keeper</h1>
        <div style={{border:"2px solid black"}}>
            <ul style={{listStyleType:"none"}}>
                {pl.map((scr,id)=>{
                    return <ScoreCard id={id} scr={scr} incrScr={incrScr} mxS={mxS}/>
                })}
            </ul>
        </div>

        <button style={{border:"3px green solid"}} onClick={resetGame}>Reset</button>
    </>
  )
}

export default ScoreGame