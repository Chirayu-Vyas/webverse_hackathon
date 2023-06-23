import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WardenLeave = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);

  useEffect(() => {
   
    axios.get('http://localhost:8000/api/v1/warden/leave/')
      .then(response => {
        setLeaveRequests(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleApprove = (id) => {
    // Send an API request to approve the leave request with the given ID
    axios.put(`http://localhost:8000/api/v1/warden/leave/${id}/`, { is_approved: true })
      .then(response => {
        // Update the UI to reflect the approved status
        const updatedRequests = leaveRequests.map(request => {
          if (request.id === id) {
            return { ...request, is_approved: true };
          }
          return request;
        });
        setLeaveRequests(updatedRequests);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleReject = (id) => {
    
    axios.put(`http://localhost:8000/api/v1/warden/leave/${id}/`, { is_rejected: true })
      .then(response => {
       
        const updatedRequests = leaveRequests.map(request => {
          if (request.id === id) {
            return { ...request, is_rejected: true };
          }
          return request;
        });
        setLeaveRequests(updatedRequests);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      
      <ul>
        {leaveRequests.map(request => (
          <li key={request.id}>
            <p>{request.leave_type} requested by {request.student.name}</p>
            <p>Date: {request.leave_date}, Time: {request.leave_time}, Duration: {request.leave_duration}</p>
            {!request.is_approved && !request.is_rejected && (
              <div>
                <button onClick={() => handleApprove(request.id)}>Approve</button>
                <button onClick={() => handleReject(request.id)}>Reject</button>
              </div>
            )}
            {request.is_approved && <p>Approved</p>}
            {request.is_rejected && <p>Rejected</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WardenLeave;