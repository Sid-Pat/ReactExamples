import React from 'react'

function ParaText({name,magic}) {
  return (
    <div>
        <p onMouseOver={magic}>{name}</p>
    </div>
  )
}

export default ParaText