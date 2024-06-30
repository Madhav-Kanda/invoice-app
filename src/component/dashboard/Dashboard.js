import React from 'react'
import '../../component/dashboard/dashboard.css'
import {Link, Outlet} from 'react-router-dom'

const Dashboard = ()=>{
    return(
        <div className='dashboard-wrapper'>
            <div className='side-nav'>
                <div className='profile-info'>
                    <img src={localStorage.getItem('photoURL')} alt="User Profile"/>
                    <div>
                    <p>{localStorage.getItem('cName')}</p>
                    <button>logout</button>
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