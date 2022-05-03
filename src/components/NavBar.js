import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    let navigate = useNavigate();
  return (
      <div>
        <button onClick={() => navigate("/home")}>Home</button>
        <button onClick={() => navigate("/about")}>About</button>
    </div>
  )
}

export default NavBar