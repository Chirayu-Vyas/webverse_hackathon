import { useState } from 'react'
import StudentReg from './components/StudentReg'
import Main from './components/Main'
import Studentlogin from './components/Studentlogin'
import Studentme from './components/Studentme'
import Complaint from './components/Complaint'
import Roomdetail from './components/Roomdetail'
import Messdetail from './components/Messdetail'
import Facultylogin from './components/Facultylogin'
import FacultyReg from './components/FacultyReg'
import Wardenlogin from './components/Wardenlogin'
import Wardenme from './components/Wardenme'
import WardenLeave from './components/Wardenleave'
import Wardenaccept from './components/Wardenaccept'
import Wardenreject from './components/Wardenreject'
import WardenRoomdetails from './components/WardenRoomdetail'
import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/studentreg" element={<StudentReg/>}/>
    <Route path="/studentlogin" element={<Studentlogin />} />
    <Route path="/facultylogin" element={<Facultylogin />} />
    <Route path="/studentme" element={<Studentme />} />
    <Route path="/complaint" element={<Complaint/>}/>
    <Route path="/roomdetail" element={<Roomdetail/>}/>
    <Route path="/messdetail" element={<Messdetail/>}/>
    <Route path="/facultyreg" element={<FacultyReg/>}/>
    <Route path="/wardenlogin" element={<Wardenlogin/>}/>
    <Route path="/wardenme" element={<Wardenme/>}/>
    <Route path="/wardenleave" element={<WardenLeave/>}/>
    <Route path="/wardenaccept" element={<Wardenaccept/>}/>
    <Route path="/wardenreject" element={<Wardenreject/>}/>
    <Route path="/wardenroomdetail" element={<WardenRoomdetails/>}/>





    </Routes>
  )
}

export default App
