import React from 'react'
import s1 from "../../../images/s1.png"
import s2 from "../../../images/s2.png"
import s3 from "../../../images/s3.png"
export default function index() {
  return (
    <>
    <section>
    <div className='text-center'>
        <span>Services</span>
        <h2>We Provide Best Quality Food</h2>
    </div>
    <div className='services'>
    <div className="srvices m-5">
        <img src={s1} alt=""/>
        <h3>Order</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos impedit veritatis provident adipisci a voluptatem! Omnis exercitationem alias voluptates eligendi! Officia quibusdam architecto voluptate veniam pariatur doloribus asperiores, nostrum ipsam.</p>

    </div>
    <div className="srvices m-5">
        <img src={s2} alt=""  />
        <h3>Shipping</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos impedit veritatis provident adipisci a voluptatem! Omnis exercitationem alias voluptates eligendi! Officia quibusdam architecto voluptate veniam pariatur doloribus asperiores, nostrum ipsam.</p>
        
    </div>
    <div className="srvices m-5">
        <img src={s3} alt="" />
        <h3>Delivered</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos impedit veritatis provident adipisci a voluptatem! Omnis exercitationem alias voluptates eligendi! Officia quibusdam architecto voluptate veniam pariatur doloribus asperiores, nostrum ipsam.</p>
        
    </div>
    </div>
</section>
<section>
    <div className='box'>
    <h2 className='text-center'>we make quality food Everyday</h2>
    <div className='text-center m-5'>
    <button className="btn btn-outline-danger">Let's talk</button>
    </div>
    </div>
</section>

    </>
  )
}
