import React, { useEffect, useState } from 'react';
import { Chart } from 'chart.js/auto';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase';

const Home = () => {
    const [total, setTotal] = useState(0);
    const [totalMonthCollection, setTotalMonthCollection] = useState(4562);
    interface Invoice {
        id: string;
        to: string;
        date: {
          seconds: number;
        };
        total: number;
        // Add other fields as necessary
      }
      
    const [invoices, setInvoices] = useState<Invoice[]>([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
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
        getOverallTotal(data);
        getMonthsTotal(data);
        monthWiseCollection(data);
      }

    const getOverallTotal = (invoiceList: Invoice[]) => {
        let t = 0;
        invoiceList.forEach((data: Invoice) => {
          t += data.total;
        });
        setTotal(t);
    }

    const getMonthsTotal = (invoiceList: Invoice[]) => {
        let mt = 0;
        invoiceList.forEach((data: Invoice) => {
          if (new Date(data.date.seconds * 1000).getMonth() === new Date().getMonth()) {
            mt += data.total;
          }
        });
        setTotalMonthCollection(mt);
      }

      const monthWiseCollection = (data: Invoice[]) => {
        const chartData: { [key: string]: number } = {
          'January': 0,
          'February': 0,
          'March': 0,
          'April': 0,
          'May': 0,
          'June': 0,
          'July': 0,
          'August': 0,
          'September': 0,
          'October': 0,
          'November': 0,
          'December': 0,
        };
        data.forEach((d: Invoice) => {
            if (new Date(d.date.seconds * 1000).getFullYear() === new Date().getFullYear()) {
              chartData[new Date(d.date.seconds * 1000).toLocaleDateString('default', { month: 'long' })] += d.total;
            }
          });
          createChart(chartData);
        }

        const createChart = (chartData: { [key: string]: number }) => {
            const ctx = document.getElementById('myChart') as HTMLCanvasElement;
            new Chart(ctx, {
              type: 'bar',
              data: {
                labels: Object.keys(chartData),
                datasets: [{
                  label: 'Month wise Collection',
                  data: Object.values(chartData),
                  borderWidth: 1
                }]
              },
              options: {
                scales: {
                  y: {
                    beginAtZero: true
                  }
                }
              }
            });
          }

    return (
        <div>
            <div className='home-first-row'>
                <div className='home-box box-1'>
                    <h1 className='box-header'>Rs {total}</h1>
                    <p className='box-title'>Overall</p>
                </div>
                <div className='home-box box-2'>
                    <h1 className='box-header'>{invoices.length}</h1>
                    <p className='box-title'>Invoices</p>
                </div>
                <div className='home-box box-3'>
                    <h1 className='box-header'>Rs {totalMonthCollection}</h1>
                    <p className='box-title'>This Month</p>
                </div>
            </div>
            <div className='home-second-row'>
                <div className='chart-box'>
                    <canvas id='myChart'></canvas>
                </div>
                <div className='recent-invoice-list'>
                    <h1>Recent Invoice List</h1>
                    {invoices.slice(0, 6).map(data => (
                        <div key={data.id}>
                            <p>{data.to}</p>
                            <p>{new Date(data.date.seconds * 1000).toLocaleDateString()}</p>
                            <p>Rs {data.total}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
