import React from 'react'
import { useState } from 'react';
import "./Toggler.css";

function Toggler() {
  
  const [isHappy, setIsHappy] = useState(true);

  const toggleEmoji = () => setIsHappy(!isHappy);

  return (
    <p className='Toggler' onClick={toggleEmoji}>
        {  isHappy ? ":)":":("}
    </p>
  )
}

export default Toggler