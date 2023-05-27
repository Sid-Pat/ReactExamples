import React from 'react'

function Greeter({person="Everyone",from="Anonymous"}) {
  return (
    <>
    <h1>Hi there, {person} !!!</h1>
    <h4>- from {from}</h4>
    </>
  )
}

export default Greeter