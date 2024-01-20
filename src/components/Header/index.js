import React from 'react'
import { Link } from 'react-router-dom'
import { SlBasketLoaded } from "react-icons/sl";

import Home from "../../Pages/frontend/Home"
import About from "../../Pages/frontend/About"
import Contact from "../../Pages/frontend/Contact"
import Menu from "../../Pages/frontend/Menu"
import Services from "../../Pages/frontend/Services"
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase'
export default function index() {
const handellogout=()=>{
  signOut(auth)
}
  return (
    <>
            <div className="container-fluid">
            <div className="row">
                <div className="col">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
     <Link to="/" className="navbar-brand " >Food</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
           <Link  to="/" className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
         <Link to='/about' className="nav-link active" aria-current="page">About</Link>
            </li>
            <li className="nav-item">
         <Link to='/menu' className="nav-link active" aria-current="page">Menu</Link>
            </li>
            <li className="nav-item">
         <Link to='/services' className="nav-link active" aria-current="page">Services</Link>
            </li>
            <li className="nav-item">
         <Link to='/contact' className="nav-link active" aria-current="page">Contact</Link>
            </li>
            <Link to="/basket"><span className='m-5'><SlBasketLoaded/></span></Link>
          </ul>
          <form class="form-inline my-2 my-lg-0">      
      <button class="btn btn-outline-danger my-2 my-sm-0" type="submit" onClick={handellogout}>Logout</button>
    </form>
        </div>
      </div>
    </nav>
                </div>
            </div>
        </div>
    </>
  )
}
