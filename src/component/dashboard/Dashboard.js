import React from 'react'
import '../../component/dashboard/dashboard.css'
import {Link, Outlet, useNavigate} from 'react-router-dom'
import {auth} from '../../firebase'
import {signOut} from 'firebase/auth'

const Dashboard = ()=>{
    const navigate = useNavigate()

    const logout = ()=>{
        signOut(auth).then(() => {
           localStorage.clear()
           navigate('/login')
          }).catch((error) => {
            console.log(error)
          });
    }
    return(
        <div className='dashboard-wrapper'>
            <div className='side-nav'>
                <div className='profile-info'>
                    <img src={localStorage.getItem('photoURL')} alt="User Profile"/>
                    <div>
                    <p>{localStorage.getItem('cName')}</p>
                    <button onClick={logout}>logout</button>
                    </div>
                </div>
                <hr/>
                <div className='menu'>
                <Link className='menu-link' to='/dashboard/home'> Home </Link>
                <Link className='menu-link' to='/dashboard/invoices'> Invoices </Link>
                <Link className='menu-link' to='/dashboard/new-invoice'> New Invoice </Link>
                <Link className='menu-link' to='/dashboard/setting'> Settings </Link>
                </div>
            </div>
            <div className='main-container'>
                <Outlet/>
            </div>
        </div>
    )
}

export default Dashboard