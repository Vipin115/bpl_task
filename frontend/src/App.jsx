import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios"

function App() {

  const [products,setProducts] = useState([])
  const [mostsell,setMostsell] = useState([])
  const [revenue,setRevenue] = useState(0)


  useEffect(()=>{
    axios.get("http://localhost:3500/products").then((res)=>{
      console.log(res.data)
      setProducts(res.data)
    })
  },[])

  useEffect(()=>{
    axios.get("http://localhost:3500/mostsell").then((res)=>{
      console.log(res.data)
      setMostsell(res.data)
    })
  },[])

  useEffect(()=>{
    axios.get("http://localhost:3500/todaysrevenue").then((res)=>{
      console.log(res.data)
      setRevenue(res.data)
    })
  },[])

  return (
    <div className="App">
      <h1>Product sales</h1>
   <table>
        
          <thead>
    <tr>
      <th>Name</th>
      <th>Quantity</th>
      <th>Amount</th>
    </tr>
          </thead>
         <tbody>
          {products.map((e) => {
             

             return <tr>

               <td>{e.name}</td>
                <td>{e.quantity}</td>
                <td>{e.amount}</td>
             </tr>
            
            
          })}
         </tbody>
         
          
      </table>
      <br /><br /><br />
      <h1>Most sell products</h1>
      <table>
        
          <thead>
    <tr>
      <th>Name</th>
      <th>Quantity</th>
      <th>Amount</th>
    </tr>
          </thead>
         <tbody>
          {mostsell.map((e) => {
             

             return <tr>

               <td>{e.name}</td>
                <td>{e.quantity}</td>
                <td>{e.amount}</td>
             </tr>
            
            
          })}
         </tbody>
         
          
      </table>

      <br /><br /><br />
      <h1>Todays Sales Revenue Amount: {revenue}</h1>

    </div>
  );
}

export default App;
