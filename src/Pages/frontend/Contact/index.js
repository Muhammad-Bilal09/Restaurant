import React from 'react'
import facebook from '../../../images/facebook.png'
import twitter from '../../../images/twitter.png'
import github from '../../../images/github.png'
import google from '../../../images/google.png'
export default function index() {
  return (
    <>
 <div className="container">
        <div className="row">
            <div className="col">
                <h1 className='text-warning text-center '>Contact</h1>
           
                <div className="card w-75 mt-5 " style={{marginLeft:"auto",marginRight:"auto"}}>
                    <h2 className='text-center '>Contact Us</h2>
                    <abbr className='text-center' title="Muhammadbilal0729@gmail.com">Contact Email</abbr>
                    <input type="text"  placeholder='Name' className='form-control mt-2'/>
                    <input type="email" placeholder='Email' className='form-control mt-2' />
                    <textarea name="" id="" cols="30" rows="5" placeholder='Message' className=' mt-2 form-control'></textarea>
                <div className='text-center'>
                <button className='btn btn-primary w-75 mt-3'  >Send Message</button>
                </div>
                </div>
            </div>
        </div>
    </div>
    
    <section className='contact'>
<div class="container">
    <div class="row">
        <div class="col">
            {/* <div className="card"> */}
            <h4>Menu Links</h4>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">services</a></li>
                <li><a href="#">contact</a></li>
            </ul>
        {/* </div> */}
        </div>
        <div class="col">
        <div className="card">
            <h4>our services</h4>
            <ul>
                <li><a href="#">Web Design</a></li>
                <li><a href="#">Web development</a></li>
                <li><a href="#">App development</a></li>
                <li><a href="#">product management</a></li>
                <li><a href="#">graphical design</a></li>
            </ul>
            </div>
        </div>
        <div class="col">
        <div className="card">
            <h4>information</h4>
            <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Delivery information</a></li>
                <li><a href="#">Privacy policy</a></li>
                <li><a href="#">term & condition</a></li>
            </ul>
    </div>
    </div>

    <div class="col">
        <div>
        {/* <h4>create account with </h4> */}
        <ul className='links'>
                <li><img href="https://www.google.com/webhp" src={google} alt="" style={{width:30, margin:5}}/></li>
                <li><img src={facebook} alt=""  style={{width:30, margin:5}} /></li>
                <li><img src={twitter} alt=""  style={{width:30, margin:5}}/></li>
                <li><img src={github} alt=""  style={{width:30, margin:5}}/></li>
            </ul>
            </div>
            </div>
</div>
</div>
</section>
    </>
  )
}
