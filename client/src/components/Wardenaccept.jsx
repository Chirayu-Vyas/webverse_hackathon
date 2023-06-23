import React, { useState } from 'react';
import axios from 'axios';

function Wardenaccept({ requestId }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const response = await axios.put(`http://localhost:8000/api/v1/warden/leave/accept/${requestId}`);
      if (response.status === 200) {
        setSubmitSuccess(true);
      }
    } catch (error) {
      console.error(error);
    }

    setIsSubmitting(false);
  };

  return (
    <div>
      <button onClick={handleSubmit} disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Accept'}
      </button>
      {submitSuccess && <p>Leave request accepted successfully.</p>}
    </div>
  );
}

export default Wardenaccept;