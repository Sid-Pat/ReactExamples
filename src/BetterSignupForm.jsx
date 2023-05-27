import React, { useState } from 'react'
let signUp=false;
let name="";

function SignupForm() {
    const [formData,setFormData] = useState({fname:"",sname:"",password:""});

    const handleChange = (evt) => {
        const fieldName = evt.target.name;
        const fieldValue = evt.target.value;
        // formData[fieldName] = fieldValue;
        // setFormData((curr) => { return {...curr}});

        setFormData((curr) => {
            return {
                ...curr,
                [fieldName]:fieldValue
            }
        })
    }

    const submitForm = () => {
        name = formData.fname+" "+formData.sname;
        console.log(formData.password);
        signUp=true;
        for(const key in formData){
            formData[key]="";
        }

        setFormData((curr) => {return {...curr}})
    } 

  return (
    <div>
        {signUp && <h1>Hi {name} !</h1>}

        {/* First Name  */}
        <label htmlFor="fName">First Name : </label>
        <input id="fName" type='text' 
                placeholder='first name ...' 
                onChange={handleChange}
                value={formData.fname}
                name="fname"
        />

        <br /><br />
        {/* Last Name   */}
        <label htmlFor="sName">Last Name : </label>
        <input id="sName" type='text' 
                placeholder='second name ...' 
                onChange={handleChange} 
                value={formData.sname}       
                name="sname"
        />

        <br /><br />
        {/* Password   */}
        <label htmlFor="password">Password : </label>
        <input id="pswrd" type='password' 
                placeholder='password ...' 
                onChange={handleChange} 
                value={formData.password}       
                name="password"
        />

        <br /><br />
        <button onClick={submitForm}>Submit</button>

    </div>
  )
}

export default SignupForm