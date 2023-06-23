import React, { useState } from 'react'
import Navbar from './Navbar'
const MsgForm = () => {
    const [title,setTitle]=useState('')
    const [body,setBody]=useState('')
    function postData(){
        fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title:title,
    body:body,  

  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
  })
  .then(function(response){ 
  return response.json()})
  .then(function(data)
  {alert(data + " submitted successfully");console.log(data);
  
}).catch(error => alert('Error:', error)); 
}

const submitHandler=(e)=>{
    e.preventDefault();
    postData();
}

  return (
    <>
     <Navbar></Navbar>
    <div className="flex justify-center items-center">
    <div className="w-full max-w-xs">
  <form className="bg-blue-900 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitHandler}>
    <div className="mb-4">
      <label
        className="block text-white text-sm font-bold mb-2"
        htmlFor="Title"
      >
        Title
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
        id="Title"
        type="text"
        placeholder="Title"
        onChange={(e)=>{setTitle(e.target.value)}}
      />
    </div>
    <div className="mb-6">
      <label
        className="block text-white text-sm font-bold mb-2"
        htmlFor="Message"
      >
        Message
      </label>
      <input
        className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="message"
        type="message"
        placeholder="Hello Peter"
        onChange={(e)=>{setBody(e.target.value)}}
      />
      <p className="text-red-500 text-xs italic">Enter Your Message</p>
    </div>
    <div className="flex items-center justify-between">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Send Msg
      </button>
     
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    ©2023 Android Club. All rights reserved.
  </p>
</div>
</div>
</>
  )
}

export default MsgForm