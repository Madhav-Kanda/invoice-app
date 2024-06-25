import React, {useRef, useState} from 'react'
import { Link } from 'react-router-dom';
import '../login/Login.css'
import {auth} from '../../firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'

const Register = () =>{
    const fileInputRef = useRef(null)
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler = (e)=>{
        e.preventDefault()
        console.log(email,password) 
        createUserWithEmailAndPassword(auth, email, password)
        .then(newUser=>{
            console.log(newUser)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <div className='login-wrapper'>
            <div className='login-container'>
                <div className='login-boxes login-left'>

                </div>
                <div className = 'login-boxes login-right'>
                    <h2 className='login-heading'>Create Your Account</h2>
                    <form onSubmit={submitHandler}>
                        <input onChange={(e)=>{setEmail(e.target.value)}} className='login-input' type='text' placeholder='Email'/>
                        <input className='login-input' type='text' placeholder='Company Name'/>
                        <input onChange={(e)=>{setPassword(e.target.value)}} className='login-input' type='password' placeholder='Password'/>
                        <input style={{display:'none'}} className='login-input' type='file' ref={fileInputRef}/>
                        <input className='login-input' type='button' value = 'select your logo' onClick={()=>{fileInputRef.current.click()}}/>
                        <input className='login-input login-btn' type='submit'/>
                    </form>
                    <Link to='/login' className='register-link'>Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Register