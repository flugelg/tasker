import React from 'react'
import { useNavigate } from 'react-router-dom'

const WelcomePage = () => {
    
    let navigate = useNavigate();

    return (
    <div>
        <div>Manage your tasks and time with Tasker</div>
        <button onClick={() => navigate("/home")}>Get Started</button>
    </div>
  )
}

export default WelcomePage