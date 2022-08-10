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
    axios.get("https://bpltask.herokuapp.com/products").then((res)=>{
      console.log(res.data)
      setProducts(res.data)
    })
  },[])

  useEffect(()=>{
    axios.get("https://bpltask.herokuapp.com/mostsell").then((res)=>{
      console.log(res.data)
      setMostsell(res.data)
    })
  },[])

  useEffect(()=>{
    axios.get("https://bpltask.herokuapp.com/todaysrevenue").then((res)=>{
      console.log(res.data)
      setRevenue(res.data)
    })
  },[])

  return (
    <div className="App">
      <h1>Product sales</h1>
   <table>
        
          
    <tr>
      <th>Name</th>
      <th>Quantity</th>
      <th>Amount</th>
    </tr>
          
         
          {products.map((e) => {
             

             return <tr>

               <td>{e.name}</td>
                <td>{e.quantity}</td>
                <td>{e.amount}</td>
             </tr>
            
            
          })}
    
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
      <h1 className='revenue'>Todays Sales Revenue Amount: {revenue}</h1>

    </div>
  );
}

export default App;
