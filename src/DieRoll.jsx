import React from 'react'

function DieRoll({numSide=6}) {
    const roll = Math.floor(Math.random()*numSide)+1;
  return (
    <>
        <h2>{numSide}-sided Die Face : {roll}</h2>
    </>
  )
}

export default DieRoll