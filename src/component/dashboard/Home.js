import React, { useState } from 'react'

const Home = () => {
    const [total, setTotal] = useState(123454)
    const [totalInvoice, setTotalInvoice] = useState(2456)
    const [totalMonthCollection, setTotalMonthCollection] = useState(4562)
    return (
        <div>
            <div className='home-first-row'>
                <div className='home-box box-1'>
                <h1>Rs {total}</h1>
                <p>Overall</p>
                </div>
                <div className='home-box box-2'>
                <h1>Rs {totalInvoice}</h1>
                <p>Invoices</p>
                </div>
                <div className='home-box box-3'>
                <h1>Rs {totalMonthCollection}</h1>
                <p>This Month</p>
                </div>
            </div>
            <div className='home-second-row'>
                <div className='chart-box'>
                    
                </div>
                <div className='recent-invoice-list'>

                </div>
            </div>
        </div>
    )
}
export default Home