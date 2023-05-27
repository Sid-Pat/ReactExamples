import React from 'react'

const handleFormSubmit = (evt) => {
    evt.preventDefault();
    console.log("Form Submitted");
}

function Form() {
  return (
    <form onSubmit={handleFormSubmit}>
        <h2>This is an agreement</h2>
        <button>Submit</button>
    </form>
  )
}

export default Form