import React, { useContext } from 'react'
import { cartcontext } from "../../Context/ContextProvider";
export default function CartItem() {
const cart = useContext(cartcontext);
const total = cart.Items.reduce((p,c)=>{ 
  return c.price+p}
  ,0);
  console.log(total);
    return (
    <>
    <div className="container">
        <div className="row">
            <div className="col">
                <h1 className='text-center'>Cart</h1>
                 
                    <table class="table">
               
             <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">name</th>
                        <th scope="col">price</th>
                      </tr>
                    </thead>
                    <tbody>
                    { 
                 cart && cart.Items.map((item,index)=>(
                
    <tr>
      <th scope="row">{index+1}</th>
      <td>{item.name}</td>
      <td>{item.price}</td>
    </tr>
  
        ))
     
  } 
     <tr>
        <td>  <h5>Total bill = Rs:{total}</h5></td>
    </tr>
  </tbody>
             
            </table>
           
              
            </div>
        </div>
    </div>
    </>
  )
}
