import axios from 'axios';
import React, { useState } from 'react';
import Studentlogin from './Studentlogin';
import {Link, useNavigate} from 'react-router-dom';

function Roomdetail() {
  const navigate = useNavigate();
  const url ="http://localhost:8000/api/v1/student/mess-details/"
  const [data, setData] = useState({
    data: "",
  }
  )
  return (
    <div>
        <div>data : {data}</div>
    </div>
  );
}

export default Roomdetail;