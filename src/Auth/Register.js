import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'

const intialvalue={email:"",password:""}
export default function Register() {
  
const [state,setState] = useState(intialvalue)

const handelChange =(e)=>{
setState({...state,[e.target.name]:e.target.value})
}


const handelSubmit=(e)=>{
    e.preventDefault();
console.log(state)
const {email,password}=state
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("register successfully")
    // ...
  })
  .catch((error) => {

    // ..
  });
}
    return (
    <>
<div className="container">
    <div className="row">
        <div className="col">
            <div className="card w-75 mt-5">
                <h2 className='text-center'>Registeration page</h2>
             <form onSubmit={handelSubmit}>
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <input type="email" name='email' placeholder='enter your email' className='form-control mb-2'onChange={handelChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input type="password" name='password' placeholder='enter your password'  className='form-control mb-2' onChange={handelChange} />
                        </div>
                    </div>
                        <div className="text-center">
                    <button className='btn btn-success text-center'>Register now</button>
                        </div>
                </div>
                </form>
            </div>
        </div>
    </div>
</div>
    </>
  )
}
