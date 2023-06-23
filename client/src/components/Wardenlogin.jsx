import axios from 'axios';
import React, { useState } from 'react';

function Wardenlogin() {
  const url = "http://localhost:8000/api/v1/warden/auth/login"
  const [data, setData] = useState({
    block: "",
    password: "",
  }
  )
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res =     axios.post(url,{
      block: data.block,
      password: data.password,
      }).then(response=>{const token = response.data.token})

      console.log(res);
    
    if (res.status==200) {
        navigate("/wardenme");
    } else {
      alert("Student Login failed");
    }
  }
  function submit(e){
      e.preventDefault();
      axios.post(url,{
        block: data.block,
        password: data.password,
        
        }).then(()=>{window.location="/facultylogin.jsx"})
  }
  function handle(e){
    const newdata={...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }
  return (
    <div>
    <form onSubmit={handleSubmit}>
    <input onChange={(e)=>handle(e)} id ="block" value={data.name} placeholder="block" type="text"></input>
      <input onChange={(e)=>handle(e)} id ="password" value={data.password} placeholder="password" type="password"></input>
      <button type='submit'>Submit</button>
      
    </form>
    </div>
  );
}

export default Wardenlogin;