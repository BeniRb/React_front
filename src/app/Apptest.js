import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Apptest = () => {
  return (
    <div>
        <Navbar></Navbar> 
        <Outlet></Outlet>
    </div>
 
  )
}

export default Apptest