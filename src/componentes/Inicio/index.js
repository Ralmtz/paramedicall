import React from 'react';
// import HeaderInicio from './FOTO-HEADER-INCIO.png'
import ImageGallery from 'react-image-gallery';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
// import estilos from '../../../node_modules'
function Inicio() {
  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

  return (
    // <div>
    //     <div className=''>
    //     {/* <h2>SOMOS TU</h2>
    //     <h2>APOYO MÉDICO</h2> */}
    //     {/* <img src={HeaderInicio} alt='Header'/> */}
    //     <h1>SECCIÓN DE INICIO</h1>

    //     </div>

    // </div>
    <div>
      <ImageGallery items={images} 
       showBullets={true}
       showIndex={true}
       showThumbnails={true}
       lazyLoad={true}
       showPlayButton={false}
       autoPlay={true}
       />

       <h2>¿Por qué lo usamos?</h2>
       <p>
       Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).
       </p>
      
    </div>
  );
}
export default Inicio;