import axios from 'axios';
import React, { useState } from 'react';
import Studentlogin from './Studentlogin';
import {Link, useNavigate} from 'react-router-dom';

function Wardenme() {
  const navigate = useNavigate();
  const url ="http://localhost:8000/api/v1/warden/me/"
  const [data, setData] = useState({
    block: "",  
    password: "",
  }
  )

  const handleSubmit1 = async (e) => {
    e.preventDefault();
    const res = await axios.post(url,{
      block: data.block,
      password: data.password,
      });

      console.log(res);
    
    if (res.status==200) {
        navigate("/wardencomplaint");
    } else {
      alert("Student Complaint filed");
    }
  }
  const handleSubmit2 = async (e) => {
    e.preventDefault();
    const res = await axios.post(url,{
      block: data.block,
      password: data.password,
      });

      console.log(res);
    
    if (res.status==200) {
        navigate("/wardenleave");
    } else {
      alert("Student leave filed");
    }
  }

  function submit(e){
      axios.post(url,{
        block: data.block,
        password: data.password,
        }).then(()=>{window.location=<Studentlogin/>})
  }
  function handle(e){
    const newdata={...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }
  return (
    <div>
        <div>name : {name}</div>
        <div>block: {block}</div>
    <form onSubmit={handleSubmit1}>
      {/* <Link to='/studentlogin'> */}
      <button type='submit'>complaint</button>
      {/* </Link> */}
    </form>
    <form onSubmit={handleSubmit2}>
      {/* <Link to='/studentlogin'> */}
      <button type='submit'>leave</button>
      {/* </Link> */}
    </form>
    </div>
  );
}

export default Wardenme;