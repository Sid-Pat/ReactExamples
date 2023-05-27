import React from 'react'
import SubHotel from './SubHotel'
import "./Hotel.css"

function Hotel({hotel}) {
  return (
    <>
    <div className="Hotel">
        {hotel.map((h)=>
            <SubHotel key={h.id} h={h} />
        )}
    </div>
    </>
  )
}

export default Hotel