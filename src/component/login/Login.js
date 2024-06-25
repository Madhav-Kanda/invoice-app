import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () =>{
    return (
        <div className='login-wrapper'>
            <div className='login-container'>
                <div className='login-boxes login-left'>

                </div>
                <div className = 'login-boxes login-right'>
                    <h2 className='login-heading'>Login</h2>
                    <form>
                        <input className='login-input' type='text' placeholder='Email'/>
                        <input className='login-input' type='password' placeholder='Password'/>
                        <input className='login-input login-btn' type='submit'/>
                    </form>
                    <Link to='/register' className='register-link'>Create an account</Link>
                </div>
            </div>
        </div>
    )
}

export default Login