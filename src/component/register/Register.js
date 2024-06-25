import React from 'react'
import { Link } from 'react-router-dom';
import '../login/Login.css'

const Register = () =>{
    return (
        <div className='login-wrapper'>
            <div className='login-container'>
                <div className='login-boxes login-left'>

                </div>
                <div className = 'login-boxes login-right'>
                    <h2 className='login-heading'>Create Your Account</h2>
                    <form>
                        <input className='login-input' type='text' placeholder='Email'/>
                        <input className='login-input' type='text' placeholder='Company Name'/>
                        <input className='login-input' type='password' placeholder='Password'/>
                        <input className='login-input' type='file' placeholder='Company Logo'/>
                        <input className='login-input login-btn' type='submit'/>
                    </form>
                    <Link to='/login' className='register-link'>Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Register