import React from 'react'

function Header({c="pink",text,fontSz="20px"}) {
  return (
    <h1 style={{color:c, fontSize:fontSz}}>{text} to Dice Game</h1>
  )
}

export default Header