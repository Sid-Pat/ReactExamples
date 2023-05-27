import React, { useState } from 'react'

function UserName() {
const [usrName,setUsrName] = useState("ullu");
const changeUsrName = (evt) => {
    // console.log("changed");
    // console.log(evt.target.value);
    setUsrName(evt.target.value)
}
  return (
    <div>
        <label htmlFor="userName" >Codeforces Username : </label>
        <input type="text" placeholder='UserName' 
            value={usrName}
            onChange={changeUsrName}
            id="userName"
        />
        <button>Submit</button>
    </div>
  )
}

export default UserName