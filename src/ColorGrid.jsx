import React from 'react'
import ColorBox from './ColorBox'
import './ColorGrid.css'

function ColorGrid({c}) {

  return (
    <>
    <div className='grid-container'>
    <div className="grid-item">
        <ColorBox c={c} />
        <ColorBox c={c} />
        <ColorBox c={c} />
        <ColorBox c={c} />
    </div>
        
    <div className="grid-item">
        <ColorBox c={c} />
        <ColorBox c={c} />
        <ColorBox c={c} />
        <ColorBox c={c} />
    </div>

    <div className="grid-item">
        <ColorBox c={c} />
        <ColorBox c={c} />
        <ColorBox c={c} />
        <ColorBox c={c} />
    </div>

    <div className="grid-item">
        <ColorBox c={c} />
        <ColorBox c={c} />
        <ColorBox c={c} />
        <ColorBox c={c} />
    </div>

    </div>

    </>
  )
}

export default ColorGrid;