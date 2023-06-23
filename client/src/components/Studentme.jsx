import axios from 'axios';
import React, { useState } from 'react';
import Studentlogin from './Studentlogin';
import {Link, useNavigate} from 'react-router-dom';

function Studentme() {
  const navigate = useNavigate();
  const url ="http://localhost:8000/api/v1/student/me/"
  const [data, setData] = useState({
    name: "",
    email: "",
    phonenumber: "",  
    block: "",  
    Regno: "",
    password: "",
    roomno: "",
  }
  )

  const handleSubmit1 = async (e) => {
    e.preventDefault();
      console.log(res);
    
    if (res.status==200) {
        navigate("/complaint");
    } else {
      alert("error");
    }
  }
  const handleSubmit2 = async (e) => {
    e.preventDefault();

      console.log(res);
    
    if (res.status==200) {
        navigate("/leave");
    } else {
      alert("error");
    }
  }
  const handleSubmit3 = async (e) => {
    e.preventDefault();

      console.log(res);
    
    if (res.status==200) {
        navigate("/roomdetail");
    } else {
      alert("error");
    }
  }
  const handleSubmit4 = async (e) => {
    e.preventDefault();

      console.log(res);
    
    if (res.status==200) {
        navigate("/messdetail");
    } else {
      alert("error");
    }
  }


  
  return (
    <div>
        <div>name : {name}</div>
        <div>Regno : {Regno}</div>
        <div>block : {block}</div>
        <div>password : {password}</div>
        <div>roomno : {roomno}</div>
    <form onSubmit={handleSubmit1}>
      {/* <Link to='/studentlogin'> */}
      <button type='submit'>Complaint</button>
      {/* </Link> */}
    </form>
    <form onSubmit={handleSubmit2}>
        <button type='submit'>Leave</button>
    </form>
    <form onSubmit={handleSubmit3}>
        <button type='submit'>Room Detail</button>
    </form>
    <form onSubmit={handleSubmit4}>
        <button type='submit'>Mess Detail</button>
    </form>
    </div>
  );
}

export default Studentme;