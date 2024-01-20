import React from 'react'
import img1 from "../../../images/food1.png"
import img2 from "../../../images/food2.png"
import img3 from "../../../images/food3.png"
import Items from '../../items'
export default function index() {
  return (
    <>

  <div className='text-center'>
       <span>Food Menu</span>
       <h2>fresh taste and great price</h2> 
    </div>
    <div className='menu'>
      
        <Items img={img1} name="chicken Burgur" taste="Tasty Food" price={850}   />
      
      <Items img={img2} name="special Beef Burgur" taste="Tasty Food" price={1050}   />
      
      <Items img={img3} name="chicken fry pack" taste="Tasty Food" price={1500}  />
      
      <Items img={img1} name="chicken Burgur" taste="Tasty Food" price={550}  />
    
      <Items img={img1} name="chicken Burgur" taste="Tasty Food" price={550}  />

      <Items img={img1} name="chicken Burgur" taste="Tasty Food" price={550}  />

      <Items img={img2} name="special Beef Burgur" taste="Tasty Food" price={1050}  />
      
      <Items img={img3} name="chicken fry pack" taste="Tasty Food" price={1500}  />
      </div>












        {/* <div className='text-center'>
       <span>Food Menu</span>
       <h2>fresh taste and great price</h2> 
    </div>

    
    <div className="container">
      <div className="row">
        <div className="col">
          <div className='cards'>
        <div className="card">
            <img src={img1}  className="card-img-top" alt="bg-missing" />
            <div className="card-body">
              <p className="card-text">
                 <h4>chicken Burgur</h4>
                 <h3>Tasty Food</h3>
                 <span>$11.00</span>
               </p>
              <a href="https://mcdonalds.com.pk/" class="btn btn-danger">Buy Now</a>
            </div>
          </div>
 <div className="col">
<div className="card" style={{marginLeft:50}}>
      <img src={img2} className="card-img-top" alt="bg-missing"/>
      <div className="card-body">
        <p className="card-text">
           <h4>special Beef Burgur</h4>
           <h3>Tasty Food</h3>
           <span>$11.00</span>
         </p>
        <a href="https://mcdonalds.com.pk/" class="btn btn-danger">Buy Now</a>
      </div>
    </div>
    </div>
 <div className="col">
<div className="card">
    <img src={img3} className="card-img-top" alt="bg-missing" />
    <div className="card-body">
      <p className="card-text">
         <h4>chicken fry pack</h4>
         <h3>Tasty Food</h3>
         <span>$11.00</span>
       </p>
      <a href="https://mcdonalds.com.pk/" class="btn btn-danger">Buy Now</a>
    </div>
  </div>
  </div>
</div>
</div>
</div>
        </div> */}


    </>
  )
}
