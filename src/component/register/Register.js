import React, {useRef, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../login/Login.css'
import {auth, storage, db} from '../../firebase'
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';


const Register = () =>{
    const fileInputRef = useRef(null)
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [file, setfile] = useState(null)
    const navigate = useNavigate()
    const [displayName, setDisplayName] = useState('')
    const submitHandler = (e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then(newUser=>{
            const date = new Date().getTime()
            const storageRef = ref(storage, `${displayName + date}`)
            uploadBytesResumable(storageRef, file)
            .then(res=>{
                console.log(res)
                getDownloadURL(storageRef)
                .then(downloadedUrl=>{  
                    console.log(downloadedUrl)
                    updateProfile(newUser.user,{
                        displayName:displayName,
                        photoURL:downloadedUrl
                    })
                    setDoc(doc(db, "users", newUser.user.uid),{
                        uid:newUser.user.uid,
                        displayName:displayName,
                        email:email,
                        photoURL:downloadedUrl
                    })
                    navigate('/dashboard')
                    localStorage.setItem('cName', newUser.user.displayName)
                    localStorage.setItem('photoURL', newUser.user.photoURL)
                    localStorage.setItem('email', newUser.user.email)
                })
                .catch(err=>{
                    console.log(err)
                })
            })
            .catch(err=>{
                console.log(err)
            })
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
                        <input onChange={(e)=>{setDisplayName(e.target.value)}} className='login-input' type='text' placeholder='Company Name'/>
                        <input onChange={(e)=>{setPassword(e.target.value)}} className='login-input' type='password' placeholder='Password'/>
                        <input onChange={(e)=>{setfile(e.target.files[0])}} style={{display:'none'}} className='login-input' type='file' ref={fileInputRef}/>
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