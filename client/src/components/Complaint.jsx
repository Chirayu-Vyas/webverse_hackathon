import axios from 'axios';
import React, { useState } from 'react';
import Studentlogin from './Studentlogin';
import {Link, useNavigate} from 'react-router-dom';

function Complaint() {
    const navigate = useNavigate();
    const url ="http://localhost:8000/api/v1/student/complaint/"
    const [data, setData] = useState({
      complaintType: "",
      complaintDate: "",
      complaintDescription: "",  
      complaintSeverity: "",  
      isresolved: "",
      studentId: "",
      wadernId: "",
    }
    )
    const handleSubmit1 = async (e) => {
        e.preventDefault();
        const res = await axios.post(url,{
            complaintType:data.complaintType,
            complaintDate: data.complaintDate,
            complaintDescription: data.complaintDescription,
            complaintSeverity: data.complaintSeverity,
            isresolved: data.isresolved,
            studentId: data.studentId,
            wadernId: data.wadernId,

          });
    
          console.log(res);
        
        if (res.status==200) {
            alert("Complaint Registered");
        } else {
          alert("error");
        }
      }
    return (
        <div>
        <input onChange={(e)=>handle(e)} id ="complaintType" value={data.name} placeholder="complaintType" type="text"></input>
      <input onChange={(e)=>handle(e)} id ="complaintDate" value={data.Regno} placeholder="complaintDate" type="date"></input>
      <input onChange={(e)=>handle(e)} id ="complaintDescription" value={data.block} placeholder="complaintDescription" type="text"></input>
      <input onChange={(e)=>handle(e)} id ="complaintSeverity" value={data.password} placeholder="complaintSeverity" type="text"></input>
      <input onChange={(e)=>handle(e)} id ="isresolved" value={data.roomno} placeholder="isresolved" type="text"></input>
      <input onChange={(e)=>handle(e)} id ="studentId" value={data.roomno} placeholder="studentId" type="text"></input>
      <input onChange={(e)=>handle(e)} id ="wadernId" value={data.roomno} placeholder="wadernId" type="text"></input>
      <input onChange={(e)=>handle(e)} id ="roomno" value={data.roomno} placeholder="roomno" type="text"></input>

            <form onSubmit={handleSubmit1}>
      {/* <Link to='/studentlogin'> */}
      <button type='submit'>Submit Complaint</button>
      </form>
        </div>
    )
}
export default Complaint;