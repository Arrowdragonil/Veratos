/* eslint-disable no-unused-vars */
import React from 'react'
import { BsDiscord } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { BsTwitter } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsSlack } from 'react-icons/bs'
import playstore from '../assets/images/pay/play.jpg'
import appstore from '../assets/images/pay/app.jpg'
import visa from '../assets/images/pay/pay.png'

const footer = () => {
  return <>
  <footer className='footer p-5'>
    <div className="container-xxl">
      <div className="row justify-content-center justify-content-md-start">
        <div className="col-md-4 col-lg-4 mb-4 mb-md-0 ">
          <h2 className='footer-title mb-3'><b>Contacto</b></h2>
          <div className='mb-3'><p><b>Dirección:</b>  Av. del dos de Mayo, 49, 28934 Móstoles,
                  Madrid</p> </div>
          <div className='mb-3'><p><b>Telefonó:</b>  <a className='footer-tel' href="tel:+1234567890">916 13 58 50</a></p> </div>
          <div className='mb-4'><p><b>Hours:</b>  From 8 a.m To 6 p.m</p> </div>
        </div>
        <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
          <h2 className='footer-title mb-3'><b>Sobre nosotros</b></h2>
          <div className='mb-3'> <Link to='/about' id='footer-links'>Sobre nosostros</Link>  </div>
          <div className='mb-3'> <Link id='footer-links'>Politica de privacidad</Link>  </div>
          <div className='mb-3'> <Link id='footer-links'>Terminos y condiciones</Link>  </div>
          <div className='mb-3'> {/* <Link id='footer-links'>Fee Policy</Link> */}  </div>
        </div>
        <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
          <h2 className='footer-title mb-3'><b>Cuenta</b></h2>
          <div className='mb-3'> <Link to='/login' id='footer-links'>Perfil</Link>  </div>
          <div className='mb-3'> <Link to='/cart' id='footer-links'>Carrito</Link>  </div>
          <div className='mb-3'> <Link to='/contact' id='footer-links'>Ayuda</Link>  </div>
        </div>
        <div className="col-md-4 col-lg-4">

          <p className="mb-3">
            Metodo de pago
          </p>
          <div className="pay">
          <Link to='https://www.paypal.com/signin' target='_blank'>
          <img src={visa} alt="" />
          </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
  </>;
}

export default footer