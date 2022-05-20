import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Choose from './components/Choose/Choose'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'



const App = () => {

  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div className=" max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
   <Routes>
     <Route path='/' element={<Home></Home>}></Route>
    
     <Route path='/choose' element={<Choose></Choose>}></Route>
   </Routes>
   </div>
  )
}

export default App
