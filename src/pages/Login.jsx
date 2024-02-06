import React from 'react'
import '../Style/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='login-form'>
      <div className='login-container'>
        <h1 className='login-header'>Enter your credentials</h1>
        <input className='email-log' type="email" placeholder='Enter your email...' />
        <input className='password-log' type="password" placeholder='Enter your password...' />
        <button className='login-btn'>Log in</button>
        <Link to="/"><button className='back-btn'>Back</button></Link>
      </div>
    </div>
  )
}

export default Login