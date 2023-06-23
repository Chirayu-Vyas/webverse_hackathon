import axios from 'axios';
import React, { useState } from 'react';

function FacultyReg() {
  const url ="http://localhost:8000/api/v1/faculty/auth/register"
  const [data, setData] = useState({
    name: "",
    empId: "",
    password: "",
    isHOD: "",
  }
  )
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res =     axios.post(url,{
      regNo: data.Regno,
      password: data.password,
      }).then(response=>{const token = response.data.token})

      console.log(res);
    
    if (res.status==200) {
        <div><postMessagemessage>"Faculty created successfully"</postMessagemessage></div>
        navigate("/facultylogin");
    } else {
      alert("Student Login failed");
    }
  }
  function submit(e){
      e.preventDefault();
      axios.post(url,{
        name:data.name,
        empID: data.empId,
        password: data.password,
        isHOD: data.isHOD
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
    <input onChange={(e)=>handle(e)} id ="name" value={data.name} placeholder="name" type="text"></input>
      <input onChange={(e)=>handle(e)} id ="empId" value={data.empId} placeholder="empId" type="number"></input>
      <input onChange={(e)=>handle(e)} id ="password" value={data.password} placeholder="password" type="password"></input>
      <input onChange={(e)=>handle(e)} id ="isHOD" value={data.isHOD} placeholder="isHOD" type="boolean"></input>
      <button type='submit'>Submit</button>
      <postMessagemessage>"Faculty created successfully"</postMessagemessage>
    </form>
    </div>
  );
}

export default FacultyReg;