import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/signup.css'

const SignUp = () => {
  return (
    <div className='main'>
    <div className='main-img'></div>
      <div className='container'>
        <h3>SIGN UP</h3>
        <h3>AS CREATOR</h3>
        <form className='form-signup'>
            <input type='text'placeholder='FULL NAME'/>
            <input type='text'placeholder='EMAIL ADDRESS'/>
            <div className='sub-input'>
            <input type='text'placeholder='ENTER DIDS OR'/> 
            <button>CREATE DIDS</button>
            </div>
            <input type="text" placeholder='PASSWORD'/>
            <input type='text' placeholder='WRITE PERMISSION'/>
            <input type='text' placeholder='READ PERMISSION'/>
            <button>SIGN UP</button>
        </form>
        <h3>Already have an account? <Link to="/login">LOGIN HERE</Link></h3>
      </div>
    
    </div>
  )
}

export default SignUp
