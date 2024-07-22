import React, { useRef, useState } from 'react';
import { storage, auth, db } from '../../firebase';
import { ref, uploadBytesResumable } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';

const Setting = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [displayName, setDisplayName] = useState(localStorage.getItem('cName') || '');
  const [imageUrl, setImageUrl] = useState(localStorage.getItem('photoURL'));

  const updateCompanyName = () => {
    if (auth.currentUser) {
      updateProfile(auth.currentUser, {
        displayName
      }).then(res => {
        localStorage.setItem('cName', displayName || '');
        const uid = localStorage.getItem('uid') || '';
        updateDoc(doc(db, "users", uid), {
          displayName
        }).then(res => {
          window.location.reload();
        });
      }).catch(err => {
        console.log(err);
      });
    }
  }

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setImageUrl(URL.createObjectURL(e.target.files[0]));
    }
  }

  const updateLogo = () => {
    const photoURL = localStorage.getItem('photoURL');
    if (photoURL && file) {
      const fileRef = ref(storage, photoURL);
      uploadBytesResumable(fileRef, file).then(result => {
        window.location.reload();
      }).catch(err => {
        console.log(err);
      });
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className='setting-wrapper'>
        <div className='profile-info update-cName'>
          <img onClick={() => { fileInputRef.current && fileInputRef.current.click() }} className='pro' alt='profile-pic' src={imageUrl || ''} />
          <input onChange={onSelectFile} style={{ display: 'none' }} type='file' ref={fileInputRef} />
          {file && <button onClick={updateLogo} style={{ width: '30%', padding: '10px', backgroundColor: 'hotpink' }}>Update Profile Pic</button>}
        </div>
        <div className='update-cName'>
          <input onChange={e => setDisplayName(e.target.value)} type='text' placeholder='Company Name' value={displayName} />
          <button onClick={updateCompanyName}>Update Company Name</button>
        </div>
      </div>
    </div>
  );
}

export default Setting;
