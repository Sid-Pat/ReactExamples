import React, { useState } from 'react'
let signUp=false;
let name="";

function SignupForm() {
    const [fname,setFname] = useState("");
    const [sname,setSname] = useState("");

    const changeFname = (evt) => {
        setFname(evt.target.value);
    }

    const changeSname = (evt) => {
        setSname(evt.target.value);
    }

    const submitForm = (evt) => {
        name = fname+" "+sname;
        setFname("");
        setSname("");
        signUp=true;
    } 

  return (
    <div>
        {signUp && <h1>Hi {name} !</h1>}

        {/* First Name  */}
        <label htmlFor="fName">First Name : </label>
        <input id="fName" type='text' 
                placeholder='type ...' 
                onChange={changeFname}
                value={fname}       
        />

        <br /><br />
        {/* Last Name   */}
        <label htmlFor="sName">Last Name : </label>
        <input id="sName" type='text' 
                placeholder='type ...' 
                onChange={changeSname} 
                value={sname}       

        />

        <button onClick={submitForm}>Submit</button>

    </div>
  )
}

export default SignupForm