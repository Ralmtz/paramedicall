import React from 'react';
import HeaderInicio from './HeaderInicio.png';
import './index.css';
import '../base.css';
import ImageGallery from 'react-image-gallery';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import LogoCliente1 from './LOGOS-CLIENTES-01.png';
import LogoCliente2 from './LOGOS-CLIENTES-02.png';
import LogoCliente3 from './LOGOS-CLIENTES-03.png';
import LogoCliente4 from './LOGOS-CLIENTES-04.png';
import LogoCliente5 from './LOGOS-CLIENTES-05.png';
import LogoCliente6 from './LOGOS-CLIENTES-06.png';
import LogoCliente7 from './LOGOS-CLIENTES-07.png';
import VideoParamedicall from './VideoParamedicall.mp4'
function Inicio() {
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

  return (
    <div>
      <div className="container-logo-encabezado">
        <img className='img-header' src={HeaderInicio} alt='Header Inicio' />
        <div className='text-encima'>
          <p className='t-1'>SEGURIDAD ES</p>
          <p className='t-2'>CONTAR CON</p>
          <p className='t-3'>PARAMEDICALL</p>
        </div>
      </div>
      <div className='c-slider-inicio'>
        <p className='p-slider-inicio'>
          CONFÍAN EN NOSOTROS
              </p>
        <div className='i-slider-inicio'>
          <div className='i-slider-2-inicio'>
            <ImageGallery
              items={images}
              showBullets={false}
              showIndex={false}
              showThumbnails={false}
              lazyLoad={true}
              showPlayButton={false}
              autoPlay={true}
              showFullscreenButton={false}
              showNav={false}
              disableSwipe={false}
            />
          </div>
        </div>
      </div>
      <div className='c-video'>
        <p>NUESTRO MEJOR SERVICIO ES OFRECER UN</p>
        <p>TRATO CÁLIDO Y HUMANO</p>
        <div className='t-video'>
          <video width="320" height="240" controls autoPlay style={{backgroundColor:'black'}}>
            <source src={VideoParamedicall} type="video/mp4" />
            {/* <source src="movie.ogg" type="video/ogg"/> */}
Your browser does not support the video tag.
</video>
        </div>
      </div>
      <div className='c-servicios-inicio'>
        <h2>BRINDAMOS LOS SIGUIENTES SERVICIOS</h2>
      </div>
    </div>
  );
}
export default Inicio;