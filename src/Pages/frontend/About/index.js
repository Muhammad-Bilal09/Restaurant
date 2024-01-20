import React from "react";
import { Link } from "react-router-dom";
import menu from '../Menu';
import images from '../../../images/about.png'
export default function index() {
  return (
    <>
    
    
    <div className="about">
      <div className="mt-5">
        <img src={images} alt="" srcset="" />
      </div>
     <div style={{marginTop:"120px"}}>
        <span >About Us</span>
        <h1>
          We Speak the good <br />
          Food Language
        </h1>
        <h6>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
          possimus voluptas neque dolorum est pariatur autem repellat temporibus
          laboriosam dolore corrupti labore quod, eos praesentium sed nam.
          Placeat, reiciendis quas!
        </h6>
        <Link to="/menu"><button className="btn btn-outline-danger">Today's Menu</button></Link>
      </div>
      </div>
    </>
  );
}
