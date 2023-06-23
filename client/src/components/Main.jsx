import axios from 'axios';
import React, { useState } from 'react';
import Studentlogin from './Studentlogin';
import {Link, useNavigate} from 'react-router-dom';

function Main() {
  const navigate = useNavigate();
  const url ="http://localhost:8000/"
  const [data, setData] = useState({
    name: "",
    Regno: "",
    block: "",
    password: "",
    roomno: "",
  }
  )

  const handleSubmit1 = async (e) => {
    e.preventDefault();
    
        navigate("/studentreg");
  }
  const handleSubmit2 = async (e) => {
    e.preventDefault();
        navigate("/facultyreg");
  }
  const handleSubmit3 = async (e) => {
    e.preventDefault();
    
    
        navigate("/wardenlogin");
  }


  return (
    <div>
    <h1>Welcome to Our University</h1>
    <div>Please Select a option</div>
    <form onSubmit={handleSubmit1}>
      <button type='submit'>Student</button>
    </form>
    <form onSubmit={handleSubmit2}>
      <button type='submit'>Faculty</button>
    </form>
    <form onSubmit={handleSubmit3}>
      <button type='submit'>Warden</button>
    </form>
    </div>
  );
}

export default Main;