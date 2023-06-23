import axios from 'axios';
import React, { useState } from 'react';
import Studentlogin from './Studentlogin';
import {Link, useNavigate} from 'react-router-dom';

function Roomdetail() {
  const navigate = useNavigate();
  const url ="http://localhost:8000/api/v1/student/room-details/"
  const [data, setData] = useState({
    id: "",
    roomNo: "",
    roomType: "",
    roomCapacity: "",  
    block: "",  
    isFull: "", 
  }
  )

  
  return (
    <div>
        <div>id : {id}</div>
        <div>roomNo : {roomNo}</div>
        <div>roomType : {roomType}</div>
        <div>block : {block}</div>
        <div>isFull : {isFull}</div>
    </div>
  );
}

export default Roomdetail;