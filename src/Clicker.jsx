import React from 'react'

function Clicker({btnText,message}) {
    const handleClick = () => alert(message);
  return (
    <div>
        <button onClick={handleClick}>{btnText}</button>
    </div>
  )
}

export default Clicker