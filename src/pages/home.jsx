/* eslint-disable no-unused-vars */
import React from 'react'
import { CgShoppingCart } from 'react-icons/cg'
import { Link } from 'react-router-dom';
import Featuredproducts from '../components/featuredproducts';
import Newarrivals from '../components/newarrivals'
import banner from '../assets/images/banner/b17.jpg'
import banner1 from '../assets/images/banner/b10.jpg'
import blog1 from '../assets/images/blog/blog-1.jpg'
import blog2 from '../assets/images/blog/blog-2.jpg'
import blog3 from '../assets/images/blog/blog-3.jpg'
import blog4 from '../assets/images/blog/blog-4.jpg'
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
  

  {/* <section className="repair-services p-5">
    <div className="container-xxl">
      <div className="row ">
        <div className="repair-details text-center align-items-center">
          <h5 className='mb-3 text-white'>Repair Services</h5>
          <h2 className='mb-3 text-white'>On 70% Off on All Products And Accessories</h2>
          <button>Explore Now</button>
        </div>
      </div>
    </div>
  </section> */}

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
  {/* <section className="hot-deals p-5 d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-start">
    <div className="container-xxl">
      <div className="row">
        <div className="col-md-6 d-flex">
                  <div className="card m-auto mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={banner} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Hot Deals</h5>
                  <h2 className="card-text mb-2">Buy One get One free.</h2>
                  <p className="card-text mb-2"><small className="text-body-secondary">The latest best collection in our closet <br />Feel Cute with our outfits</small></p>
                  <Link to='blog'>
                  <button className='mt-4'>Learn more</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <div className="col-md-6 d-flex">
                  <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={banner1} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Season-In</h5>
                  <h2 className="card-text mb-2">All Weather Attire</h2>
                  <p className="card-text mb-2"><small className="text-body-secondary">It never matter which season it is <br />We got you covered</small></p>
                  <Link to='blog'>
                  <button className='mt-4'>Learn more</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section> */}

  

  <Newsletter />
  </>;
}

export default home