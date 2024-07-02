import React, { useRef,useState } from 'react'
import {storage} from '../../firebase'
import {getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage'
import { updateProfile } from 'firebase/auth'

const Setting = () => {
    const fileInputRef = useRef(null)
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [file, setfile] = useState(null)
    const [displayName, setDisplayName] = useState('')
    const [imageUrl, setImageUrl] = useState(localStorage.getItem('photoURL'))
    const onSelectFile = (e)=>{
        setfile(e.target.files[0])
        setImageUrl(URL.createObjectURL(e.target.files[0]))
    }
    const updateLogo = ()=>{
        const fileRef = ref(storage, localStorage.getItem('photoURL'))
        console.log(fileRef._location.path_)
        const storageRef = ref(storage, fileRef._location.path_)
        uploadBytesResumable(storageRef, file)
        .then(result=>{
            window.location.reload();
        })

    }

    return (
        <div>
            <p> Setting</p>
            <div className='setting-wrapper'>
                <div className='profile-info'>
                    <img onClick={()=>{fileInputRef.current.click()}} className='pro' alt='profile-pic' src={imageUrl}/>
                    <input onChange={(e)=>{onSelectFile(e)}} style={{display:'none'}} type='file' ref={fileInputRef}/>
                    {file && <button onClick={()=>{updateLogo()}}>Update Profile Pic</button>}
                </div>
            </div>
        </div>
    )
}
export default Setting