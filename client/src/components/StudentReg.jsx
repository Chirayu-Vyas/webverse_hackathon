import axios from 'axios';
import React, { useState } from 'react';
import Studentlogin from './Studentlogin';
import {Link, useNavigate} from 'react-router-dom';

function StudentReg() {
  const navigate = useNavigate();
  const url ="http://localhost:8000/api/v1/student/auth/register"
  const [data, setData] = useState({
    name: "",
    Regno: "",
    block: "",
    password: "",
    roomno: "",
  }
  )

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(url,{
      name:data.name,
      regNo: data.Regno,
      block: data.block,
      password: data.password,
      roomNo: data.roomno.toString()
      });

      console.log(res);
    
    if (res.status==201) {
        navigate("/studentlogin");
    } else {
      alert("Student ignup failed")
    }
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
      <input onChange={(e)=>handle(e)} id ="Regno" value={data.Regno} placeholder="Regno" type="text"></input>
      <input onChange={(e)=>handle(e)} id ="block" value={data.block} placeholder="block" type="text"></input>
      <input onChange={(e)=>handle(e)} id ="password" value={data.password} placeholder="password" type="password"></input>
      <input onChange={(e)=>handle(e)} id ="roomno" value={data.roomno} placeholder="roomno" type="number"></input>
      {/* <Link to='/studentlogin'> */}
      <button type='submit'>Submit</button>
      {/* </Link> */}
    </form>
    </div>
  );
}

export default StudentReg;