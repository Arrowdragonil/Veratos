/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
import a6 from '../assets/images/about/a6.jpg'
import Marquee from "react-fast-marquee";
import orders from '../assets/images/icons/icon1.png'
import orders1 from '../assets/images/icons/icon2.png'
import orders2 from '../assets/images/icons/icon3.png'
import orders3 from '../assets/images/icons/icon4.png'
import orders4 from '../assets/images/icons/icon5.png'

const about = () => {
  return <>
  <section className="about-wrapper p-5 d-flex justify-content-center align-items-center">
    <div className="container-xxl">
      <div className="row">
      <div className="col-12">
          <div className="shop-details text-center align-items-center">
            <h1 className="text-white">Sobre nosotros</h1>
            <p className='text-white fs-3'>Conocenos un poco mas</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="about-us p-5">
    <div className="row">
      <div className="col-md-6">
        <img src={a6} alt="" className='img-fluid p-5' />
      </div>
      <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
        <h1><b>?Quienes somos?</b></h1>
        <p className="card-text mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quibusdam tempore unde aperiam, consectetur harum a eum error, <br /> libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?</p>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quibusdam tempore unde aperiam, consectetur harum a eum error, <br /> libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?</p>
      </div>
    </div>
  </section>
            
            <div className="col-12 p-3">
            <Marquee className='p-2 slide'>
              <div>
              <img src={orders} alt="" className='img-fluid'/>
              <p className="card-text mb-2">Fast Orders</p>
              </div>
              <div>
              <img src={orders1} alt="" className='img-fluid'/>
              <p className="card-text mb-2">Quick Shipping</p>

              </div>
              <div>
              <img src={orders2} alt="" className='img-fluid'/>
              <p className="card-text mb-2">High Saves</p>
              </div>
              <div>
              <img src={orders3} alt="" className='img-fluid'/>
              <p className="card-text">24/7 Support</p>
              </div>
              <div>
              <img src={orders4} alt="" className='img-fluid'/>
              <p className="card-text">Online Orders</p>
              </div>
            </Marquee>
            </div>
      
    
  </>;
}

export default about