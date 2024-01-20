import React from 'react'
import images from '../../../images/home.png'
import { Link } from 'react-router-dom'
import menu from '../Menu' 
export default function index() {
  return (
    <>
    <div className='home'>
    <div>
    <h1>Full Website</h1>
    <h2>Food the most pricious thing</h2>
    <Link to="/menu"><button className="btn btn-outline-danger">Today's Menu</button></Link>
  </div>
  <div>
    <img src={images} alt="" srcset=""  style={{width:540}}/>
  </div>
  </div>
    </>
  )
}
