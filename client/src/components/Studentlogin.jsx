import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Studentlogin() {
  const url ="http://localhost:8000/api/v1/student/auth/login"
  const [data, setData] = useState({
    Regno: "",
    password: "",
  }
  )
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res =     axios.post(url,{
      regNo: data.Regno,
      password: data.password,
      }).then(response=>{const token = response.data.token})

      console.log(res);
    
    if (res.status==201) {
        <div>Logged In Successfully</div>
        navigate("/studentme");
    } else {
      alert("Student Login failed");
    }
  }
  
  function handle(e){
    const newdata={...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }
  return (
    <div onSubmit={handleSubmit}>
    <form onSubmit={((e)=>SubmitEvent(e))}>
      <input onChange={(e)=>handle(e)} id ="Regno" value={data.Regno} placeholder="Regno" type="text"></input>
      <input onChange={(e)=>handle(e)} id ="password" value={data.password} placeholder="password" type="password"></input>
      Authorization: 
      <button type='submit'>Login</button>
    </form>
    </div>
  );
}

export default Studentlogin;