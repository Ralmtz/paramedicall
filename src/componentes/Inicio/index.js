import React from 'react';
import HeaderInicio from './FOTO-HEADER-INCIO.png';
import HeaderInicio700 from './FOTO-HEADER-INCIO-700.png';
import './index.css';
import '../base.css';
import ImageGallery from 'react-image-gallery';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import imgDoctor1600 from './DOCTOR-ABOUT-1600.png';
import imgDoctor700 from './DOCTOR-ABOUT-700.png';
import LogoCliente1 from './LOGOS-CLIENTES-01.png';
import LogoCliente2 from './LOGOS-CLIENTES-02.png';
import LogoCliente3 from './LOGOS-CLIENTES-03.png';
import LogoCliente4 from './LOGOS-CLIENTES-04.png';
import LogoCliente5 from './LOGOS-CLIENTES-05.png';
import LogoCliente6 from './LOGOS-CLIENTES-06.png';
import LogoCliente7 from './LOGOS-CLIENTES-07.png';
import VideoParamedicall from './VideoParamedicall.mp4'
import ImgAmbulancia from './ambulancia.png'
import useWindowDimensions from '../../Helpers';
import IconoMision from './IconoMision.png';
import LogoMovilCliente1 from './LOGOS-CLIENTES-01-MOVIL.png';
import LogoMovilCliente2 from './LOGOS-CLIENTES-02-MOVIL.png';
import LogoMovilCliente3 from './LOGOS-CLIENTES-03-MOVIL.png';
import LogoMovilCliente4 from './LOGOS-CLIENTES-04-MOVIL.png';
import LogoMovilCliente5 from './LOGOS-CLIENTES-05-MOVIL.png';
import LogoMovilCliente6 from './LOGOS-CLIENTES-06-MOVIL.png';
import LogoMovilCliente7 from './LOGOS-CLIENTES-07-MOVIL.png';
import LogoMovilCliente8 from './LOGOS-CLIENTES-08-MOVIL.png';
import LogoMovilCliente9 from './LOGOS-CLIENTES-09-MOVIL.png';
import LogoMovilCliente10 from './LOGOS-CLIENTES-10-MOVIL.png';
import { Link } from "react-router-dom";

function Inicio() {
  const { width } = useWindowDimensions();

  const images = [
    {
      original: LogoCliente1,
    },
    {
      original: LogoCliente2,
    },
    {
      original: LogoCliente3,
    },
    {
      original: LogoCliente4,
    },
    {
      original: LogoCliente5,
    },
    {
      original: LogoCliente6,
    },
    {
      original: LogoCliente7,
    },
  ];

  const imagesMovil = [
    {
      original: LogoMovilCliente1,
    },
    {
      original: LogoMovilCliente2,
    },
    {
      original: LogoMovilCliente3,
    },
    {
      original: LogoMovilCliente4,
    },
    {
      original: LogoMovilCliente5,
    },
    {
      original: LogoMovilCliente6,
    },
    {
      original: LogoMovilCliente7,
    },
    {
      original: LogoMovilCliente8,
    },
    {
      original: LogoMovilCliente9,
    },
    {
      original: LogoMovilCliente10,
    },
  ];

  return (
    <div>
      <div className="container-logo-encabezado-Inicio">
        <img className='img-header' src={width > 450 ? HeaderInicio : HeaderInicio700} alt='Header Inicio' />
        <div className='text-encima-inicio'>
          <p className='t-1-inicio'>SEGURIDAD ES</p>
          <p className='t-2-inicio'>CONTAR CON</p>
          <p className='t-3-inicio'>PARAMEDICALL</p>
        </div>
      </div>
      <div className='c-apoyoMedico'>
        <div className='i-apoyoMedico'>
          <p className='p-apoyoMedico'>SOMOS TU</p>
          <p className='p-apoyoMedico-2'>APOYO MÉDICO</p>
          <p className='p-apoyoMedico-3'>
            Empresa consolidada y comprometida con la salud y la calidad de vida de las personas, ofreciendo servicios médicos prehospitalarios y de salud ocupacional con altos estándares de calidad y un equipo certificado de profesionales en la salud.
          </p>
        </div>
        <img className='imgMedico' src={width > 800 ? imgDoctor1600 : width > 420 ? imgDoctor700 : imgDoctor700} alt='Médico' />
      </div>
      <div className='c-slider-inicio'>
        <p className='p-slider-inicio'>CONFÍAN EN NOSOTROS</p>
        <div className='i-slider-inicio'>
          <div className='i-slider-2-inicio'>
            <ImageGallery
              items={width > 600 ? images : imagesMovil}
              showBullets={false}
              showIndex={false}
              showThumbnails={false}
              lazyLoad={true}
              showPlayButton={false}
              autoPlay={true}
              showFullscreenButton={false}
              showNav={true}
              disableSwipe={false}
            />
          </div>
        </div>
      </div>
      <div className='c-video'>
        <p>NUESTRO MEJOR SERVICIO ES OFRECER UN</p>
        <p style={{ paddingBottom: '20px' }}>TRATO CÁLIDO Y HUMANO</p>
        <div className='t-video'>
          <video width={width > 600 ? width * .50 : width * .70} controls style={{ backgroundColor: 'black' }}>
            <source src={VideoParamedicall} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className='c-servicios-inicio'>
        <div className='i-serviciosInicio'>
          <img className='img-ambulancia-serv' src={ImgAmbulancia} alt='Ambulancia' />
        </div>
        <div className='i-serviciosInicio'>
          <p className='p-servicios'>BRINDAMOS LOS SIGUIENTES </p>
          <p className='p-servicios'>SERVICIOS</p>
          <div className='dividir'>
            <div className='dividir-2'>
              <div className='dividir-3'>
                <img className='img-servicios-lista' src={IconoMision} alt='flecha' />
                <div className='t-serv1'>
                  <p className='p-text-servicio'>Renta de ambulancias</p>
                  <p className='p-text-servicio'>Terapia intensiva, urgencias básicas</p>
                </div>
              </div>
              <div className='dividir-3'>
                <img className='img-servicios-lista' src={IconoMision} alt='flecha' />
                <p className='p-text-servicio'>Servicio de médico y paramédico industrial</p>
              </div>
              <div className='dividir-3'>
                <img className='img-servicios-lista' src={IconoMision} alt='flecha' />
                <p className='p-text-servicio'>Atención médica en tu domicilio (CMI)</p>
              </div>
            </div>
            <div className='dividir-2'>
              <div className='dividir-3'>
                <img className='img-servicios-lista' src={IconoMision} alt='flecha' />
                <div className='t-serv1'>
                  <p className='p-text-servicio'>Traslado de pacientes</p>
                  <p className='p-text-servicio'>Locales y foráneos</p>
                </div>
              </div>
              <div className='dividir-3'>
                <img className='img-servicios-lista' src={IconoMision} alt='flecha' />
                <p className='p-text-servicio'>Exámenes médicos</p>
              </div>
              <div className='dividir-3'>
                <img className='img-servicios-lista' src={IconoMision} alt='flecha' />
                <p className='p-text-servicio'>Servicio de atención médica a empresas (AP)</p>
              </div>
            </div>
          </div>
          <div className='c-servicios'>
            <Link className='btn-servicios' to="/servicios" >MÁS INFORMACIÓN</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Inicio;