import axios from 'axios';
import React, { useState } from 'react';
import Studentlogin from './Studentlogin';
import {Link, useNavigate} from 'react-router-dom';

function Complaint() {
    const navigate = useNavigate();
    const url ="http://localhost:8000/api/v1/student/leave/"
    const [data, setData] = useState({
      leaveId: "",
      leaveType: "",
      leaveDate: "",  
      leaveTime: "",  
      leaveDuration: "",
    }
    )
    const handleSubmit1 = async (e) => {
        e.preventDefault();
        const res = await axios.post(url,{
            leaveId:data.leaveId,
            leaveType: data.leaveType,
            leaveDate: data.leaveDate,
            leaveTime: data.leaveTime,
            leaveDuration: data.leaveDuration
          });
    
          console.log(res);
        
        if (res.status==200) {
            alert("Leave Applied");
        } else {
          alert("error");
        }
      }
    return (
        <div>
        <input onChange={(e)=>handle(e)} id ="compleaveIdlaintType" value={data.name} placeholder="leaveId" type="text"></input>
      <input onChange={(e)=>handle(e)} id ="leaveType" value={data.Regno} placeholder="leaveType" type="text"></input>
      <input onChange={(e)=>handle(e)} id ="leaveDate" value={data.block} placeholder="leaveDate" type="text"></input>
      <input onChange={(e)=>handle(e)} id ="leaveTime" value={data.password} placeholder="leaveTime" type="text"></input>
      <input onChange={(e)=>handle(e)} id ="leaveDuration" value={data.roomno} placeholder="leaveDuration" type="text"></input>
            <form onSubmit={handleSubmit1}>
      {/* <Link to='/studentlogin'> */}
      <button type='submit'>Submit Leave Request</button>
      </form>
        </div>
    )
}
export default Complaint;