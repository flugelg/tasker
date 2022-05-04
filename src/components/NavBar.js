import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    let navigate = useNavigate();
  return (
      <div>
        <button onClick={() => navigate("/")} className="nav-button">Home</button>
        <button onClick={() => navigate("/about")} className="nav-button">About</button>
    </div>
  )
}

export default NavBar