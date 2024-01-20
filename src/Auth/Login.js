import React, { useEffect, useState } from 'react'
import { signInWithEmailAndPassword,onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config/firebase'
import { Link } from 'react-router-dom'
import Register from './Register'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const intialvalue={email:"",password:""}
export default function Login() {
  
const [state,setState] = useState(intialvalue)

const handelChange =(e)=>{
setState({...state,[e.target.name]:e.target.value})
// console.log('state', state)
}
useEffect(()=>{
   
  onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          // ...
        } else {
          // User is signed out
          // ...
          toast("please enter Email:admin@user.com && Password :12345678") 
        }
      });
     
},[])

const handelSubmit=(e)=>{
    e.preventDefault();
console.log(state)
const {email,password}=state
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    toast("user login successfully")
    // ...
  })
  .catch((error) => {
    toast("please enter correct email")
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}
    return (
    <>
<div className="container">
<ToastContainer />
    <div className="row">
        <div className="col">
            <div className="card w-100" style={{marginLeft:"auto",marginRight:"auto",marginTop:"200px"}}>
                <h2 className='text-center'>Login page</h2>
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
                    <button className='btn btn-success text-center'>Login now</button>
         {/* <p className='text-center'>click here!<Link to="/register" element={<Register/>}>register here</Link></p> */}
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
