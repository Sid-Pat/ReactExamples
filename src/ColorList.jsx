import React from 'react'

function ColorList({colors}) {
    const ele = [<p>Jikl</p>, <h1>opw</h1>, <input type="password" />]
    
  return (
    <div>
        {ele};
        <h2>Color List:</h2>
        <p>{colors}</p>
        <ol>
            {colors.map((c)=>{
                return <li style={{color:c}}>{c}</li>
            })}
        </ol>
    </div>
  )
}

export default ColorList