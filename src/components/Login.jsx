import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/login.css'

const Login = () => {
  return (
    <div className='main'>
    <div className='main-img'></div>
      <div className='container'>
        <h3 className='h3-login'>LOG IN AS CREATOR</h3>
        <form className='form-signup'>
            <input type='text'placeholder='FULL NAME'/>
            <input type='text'placeholder='ENTER DIDS'/>
            <input type="text" placeholder='PASSWORD'/>
            <button>LOG IN</button>
        </form>
        <h3 className='h3-login'>don't have an account?  <Link to="/signup">SIGNUP HERE</Link></h3>
      </div>
    
    </div>
  )
}

export default Login
