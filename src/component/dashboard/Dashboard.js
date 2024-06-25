import React from 'react'
import '../../component/dashboard/dashboard.css'
import {Link} from 'react-router-dom'

const Dashboard = ()=>{
    return(
        <div className='dashboard-wrapper'>
            <div className='side-nav'>
                <div className='profile-info'>
                    <img src={localStorage.getItem('photoURL')}/>
                    <div>
                    <p>{localStorage.getItem('cName')}</p>
                    <button>logout</button>
                    </div>
                </div>
                <hr/>
                <div className='menu'>
                <Link className='menu-link'> Home </Link>
                <Link className='menu-link'> Invoices </Link>
                <Link className='menu-link'> New Invoice </Link>
                <Link className='menu-link'> Settings </Link>
                </div>
            </div>
            <div className='main-container'>
                
            </div>
        </div>
    )
}

export default Dashboard