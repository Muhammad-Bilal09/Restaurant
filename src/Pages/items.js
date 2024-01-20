import React from 'react'
import { useContext } from 'react'
import { cartcontext } from "../Context/ContextProvider"

export default function Item(props) {
  const  cart =useContext(cartcontext)
console.log(cart)
return (
<>

           <div className='cards'>
        <div className="card">
            <img src={props.img}  className="card-img-top" alt="bg-missing" />
            {/* <div className="card-body"> */}
              <p className="card-text">
                 <h4>{props.name}</h4>
                 <h3>{props.taste}</h3>
                 <span>{props.price}</span>
               </p>
              <button className="btn btn-danger" onClick={()=> cart.setItems([...cart.Items, {name:props.name,price:props.price}])}>Buy Now</button>
            </div>
          </div>
          </>
  )
}



