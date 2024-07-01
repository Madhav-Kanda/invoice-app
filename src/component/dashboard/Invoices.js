import React, { useEffect, useState } from 'react'
import {db} from '../../firebase'
import {collection, deleteDoc, doc, getDocs} from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const Invoices = () => {
    const [invoices, setInvoices] = useState([]) 
    const navigate = useNavigate()

    useEffect(()=>{
        getData()
    },[])
    const getData = async()=>{
        const querySnapshot = await getDocs(collection(db, 'invoices'));
        const data = querySnapshot.docs.map(doc=>({
            id:doc.id,
            ...doc.data()
        }))
        setInvoices(data)
    }

    const deleteInvoice = async(id)=>{
        // console.log(id)
        const isSure = window.confirm("Are you sure you want to delete?")
        if(isSure){
            try{
                await deleteDoc(doc(db, 'invoices', id))
                getData()
            }
            catch{
                window.alert("something is wrong!")
            }
        }
    }
    return (
        <div>
            {
            invoices.map(data => (
                <div className='box' key={data.id}>
                    <p> {data.to}</p>
                    <p> {new Date(data.date.seconds*1000).toLocaleDateString()}</p>
                    <p>Rs. {data.total}</p>
                    <button onClick={()=>{deleteInvoice(data.id)}} className='delete-btn'>Delete</button>
                    <button onClick={()=>{navigate('/dashboard/invoice-detail', {state:data})}} className='delete-btn view-btn'>View</button>
                </div>
            ))}
        </div>
    )
}
export default Invoices