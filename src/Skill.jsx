import React from 'react'

function Skill({sk}) {
  return (
    <li 
        key={sk.id}
        style={{color:sk.completed?"green":"red", 
        textDecoration:(!sk.completed? "line-through":"none")
        }}
    >
                    
        {sk.item} - {sk.star} Completed:{sk.completed?"Y":"N"}
    </li>
  )
}

export default Skill