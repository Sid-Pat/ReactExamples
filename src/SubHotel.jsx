import React from 'react'
import "./SubHotel.css"

function SubHotel({h}) {
  return (
    <div className='SubHotel'>
        <h2>{h.name}</h2>
        <h3>${h.price} a night</h3>
        <h4>{h.rating} ⭐</h4>
    </div>
  )
}

export default SubHotel