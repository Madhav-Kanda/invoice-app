import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { auth, storage, db } from '../../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';

const Register = () => {
    const fileInputRef = useRef(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const [displayName, setDisplayName] = useState('');
    const [imageUrl, setImageUrl] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const onSelectFile = (e) => {
        setFile(e.target.files[0]);
        setImageUrl(URL.createObjectURL(e.target.files[0]));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((newUser) => {
                const date = new Date().getTime();
                const storageRef = ref(storage, `${displayName + date}`);
                uploadBytesResumable(storageRef, file)
                    .then((res) => {
                        console.log(res);
                        getDownloadURL(storageRef)
                            .then((downloadedUrl) => {
                                console.log(downloadedUrl);
                                updateProfile(newUser.user, {
                                    displayName: displayName,
                                    photoURL: downloadedUrl
                                });
                                setDoc(doc(db, "users", newUser.user.uid), {
                                    uid: newUser.user.uid,
                                    displayName: displayName,
                                    email: email,
                                    photoURL: downloadedUrl
                                });
                                navigate('/dashboard');
                                setLoading(false);
                                localStorage.setItem('cName', displayName);
                                localStorage.setItem('photoURL', downloadedUrl);
                                localStorage.setItem('email', newUser.user.email);
                                localStorage.setItem('uid', newUser.user.uid);
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    })
                    .catch((err) => {
                        setLoading(false);
                        console.log(err);
                    });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className='login-wrapper'>
            <div className='login-container'>
                <div className='login-left'></div>
                <div className='login-right'>
                    <h2 className='login-heading'>Create Your Account</h2>
                    <form onSubmit={submitHandler}>
                        <input
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            className='login-input'
                            type='text'
                            placeholder='Email'
                        />
                        <input
                            required
                            onChange={(e) => setDisplayName(e.target.value)}
                            className='login-input'
                            type='text'
                            placeholder='Company Name'
                        />
                        <input
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            className='login-input'
                            type='password'
                            placeholder='Password'
                        />
                        <input
                            onChange={(e) => onSelectFile(e)}
                            style={{ display: 'none' }}
                            className='login-input'
                            type='file'
                            ref={fileInputRef}
                        />
                        <input
                            className='login-input'
                            type='button'
                            value='Select your logo'
                            onClick={() => { fileInputRef.current.click(); }}
                        />
                        {imageUrl != null && <img className='image-preview' src={imageUrl} alt='preview' />}
                        <button className='login-btn' type='submit'>
                            {isLoading && <i className="fa-solid fa-spinner fa-spin-pulse"></i>} Submit
                        </button>
                    </form>
                    <Link to='/login' className='register-link'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
