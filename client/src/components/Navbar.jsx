import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    
<div className='flex justify-between bg-blue-950 p-6 mb-10'>
  <div className='text-red-500 font-bold text-2xl'><Link to="/">Hostel</Link></div>
  <div className='text-red-500 font-bold text-2xl'><Link to="/msg">Send A Leave Request</Link></div>
</div>

</>

  )
}

export default Navbar