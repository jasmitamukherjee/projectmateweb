import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [options,setOptions] = useState("Home")
    const handleClick=(newOption)=>{
        setOptions(newOption)
    }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to='/'>Project Mate</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to='/' onClick={()=>handleClick("Home")}>Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/login' onClick={()=>handleClick("Login")}>Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/register' onClick={()=>handleClick("Sign Up")}>Sign Up</Link>
      </li>
    
    </ul>
  </div>
</nav>
  )
}
