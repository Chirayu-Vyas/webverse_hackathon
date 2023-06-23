import axios from 'axios';
import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

function WardenRoomdetails() {
  const navigate = useNavigate();
  const url ="http://localhost:8000/api/v1/warden/room-details/"
  const [data, setData] = useState({
    id:"",
    name: "",
    Regno: "",
    block: "", 
    roomno: "",
    messtype: "",
    isForChange: "",
    roomId: "",  
     }
  )

 
   (
    <div>
        <div></div>
    <form onSubmit={handleSubmit}>
      {/* <Link to='/studentlogin'> */}
      <button type='submit'>Submit</button>
      {/* </Link> */}
    </form>
    </div>
  );
}

export default WardenRoomdetails;