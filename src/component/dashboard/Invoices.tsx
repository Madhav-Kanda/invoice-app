import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

interface Invoice {
  id: string;
  to: string;
  date: {
    seconds: number;
  };
  total: number;
  // Add other fields as necessary
}

const Invoices = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const q = query(collection(db, 'invoices'), where('uid', "==", localStorage.getItem('uid')));
    const querySnapshot = await getDocs(q);
    const data: Invoice[] = querySnapshot.docs.map(doc => {
      const docData = doc.data();
      return {
        id: doc.id,
        to: docData.to,
        date: docData.date,
        total: docData.total,
        // Add other fields as necessary
      } as Invoice;
    });
    setInvoices(data);
    setLoading(false);
  }

  const deleteInvoice = async (id: string) => {
    const isSure = window.confirm("Are you sure you want to delete?");
    if (isSure) {
      try {
        await deleteDoc(doc(db, 'invoices', id));
        getData();
      } catch {
        window.alert("Something went wrong!");
      }
    }
  }

  return (
    <div>
      {isLoading ? (
        <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
          <i style={{ fontSize: 30 }} className="fa-solid fa-spinner fa-spin-pulse"></i>
        </div>
      ) : (
        <div>
          {invoices.map(data => (
            <div className='invoice-box' key={data.id}>
              <p>{data.to}</p>
              <p>{new Date(data.date.seconds * 1000).toLocaleDateString()}</p>
              <p>Rs. {data.total}</p>
              <button onClick={() => { deleteInvoice(data.id) }} className='delete-btn'>
                <i className="fa-solid fa-trash"></i> Delete
              </button>
              <button onClick={() => { navigate('/dashboard/invoice-detail', { state: data }) }} className='view-btn'>
                <i className="fa-solid fa-eye"></i> View
              </button>
            </div>
          ))}
          {invoices.length < 1 && (
            <div className='no-invoice-wrapper'>
              <p>You have no invoice till now</p>
              <button onClick={() => { navigate('/dashboard/new-invoice') }}>Create New Invoice</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Invoices;
