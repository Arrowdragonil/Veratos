/* eslint-disable no-unused-vars */
import React from 'react'
import { CgShoppingCart } from 'react-icons/cg'
import { Link } from 'react-router-dom';
import Featuredproducts from '../components/featuredproducts';
import Newarrivals from '../components/newarrivals'
import Newsletter from '../components/newsletter';
import Hero from '../components/hero';


const home = () => {
  return <>
  <section className="banner">
    <div className="container-xxl">
      <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="d-flex flex-column justify-content-center ">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                  <div className='back-details'>
                  <p className='mb-3'></p>
                  <h1>L & M</h1>
                  <h2>Decoraciones</h2>

                  <p className='mb-3'>Productos de alta calida en tu tienda de confianza</p>
                  </div>
              </div>
            </div>
            
          </div>
          </div>
      </div>
    </div>
  </section>
  
  <Hero />

  <div className="pic-ctn">
    <img src="https://res.cloudinary.com/dsmjl7xs3/image/upload/v1703754966/colchon1_1_f8e1xb.jpg" alt="" className="pic" />
    <img src="https://res.cloudinary.com/dsmjl7xs3/image/upload/v1703755086/colchon2_1_j0nneq.jpg" alt="" className="pic" />
    <img src="https://res.cloudinary.com/dsmjl7xs3/image/upload/v1703755172/cortina1_1_qcyx7z.jpg" alt="" className="pic" />
    <img src="https://res.cloudinary.com/dsmjl7xs3/image/upload/v1703755255/cortina2_1_oik3bn.jpg" alt="" className="pic" />
    <img src="https://res.cloudinary.com/dsmjl7xs3/image/upload/v1703755372/sabanas_1_frms4a.jpg" alt="" className="pic" />
  </div>

  <section className="featured-products p-4">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12 text-center">
          <h1>productos de muestra</h1>
          <p></p>
        </div>
       <Featuredproducts />
      </div>
    </div>
  </section>

  <section className="new-arrivals p-4">
    <div className="container-xxl">
      <div className="row">
        <div className="d-flex align-items-center justify-content-center flex-column">
          <h1>Novedad de este mes</h1>
          <p></p>
        </div>
        <Newarrivals />
      </div>
    </div>
  </section>

  <Newsletter />
  </>;
}

export default home