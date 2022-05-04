import React from 'react';
import '../base.css'
import './index.css';
import imgHeaderNosotros from './HeaderNosotros.png';
import IconoMision from './IconoMision.png';
import IconoVision from './IconoVision.png';
import paramedicoMision from './paramedicoMision.jpg';
import paramedicoVision from './paramedicoVision.jpg';
import IconosValores from './IconosValores.png';
import IconosValoresMovil from './IconosValoresMovil.png';
import ImageGallery from 'react-image-gallery';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
function nosotros() {
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
    return (<>
        <div className="container-logo-nosotros">
            <img className='img-nosotros' src={imgHeaderNosotros} alt='Header Nosotros' />
            <div className='text-encima'>
                <p className='t-1'>SOBRE NOSOTROS</p>
                <p className='t-2'>TU APOYO MÉDICO</p>
                <p className='t-3'>CUANDO LO NECESITAS</p>
            </div>
        </div>
        <div className='row'>
            <div className='col-12 col-s12 text-nosotros'>
                <p className='p-t1'>SOMOS PARA TI</p>
                <p className='p-t2'>SEGURIDAD Y SALUD</p>
                <p className='p-nosotros'>
                    Somos una empresa dedicada a brindar servicios médicos integrales, resolviendo cualquier situación de salud que se presente, ya sea del área de medicina prehospitalaria y/o del área de salud ocupacional.
                </p>
                <p className='p-nosotros'>
                    Nuestros servicios médicos están orientados en solucionar y satisfacer todas las necesidades de salud que pudieran tener nuestros clientes del sector industrial, empresarial, comercial, recreativo, deportivo y familiar.
                </p>
                <p className='p-nosotros'>
                    Hemos desarrollado una cultura laboral que nos ha permitido proveer y garantizar a nuestros clientes servicios médicos de alta calidad, con tecnología médica de vanguardia y un trato cálido y humano.
                </p>
            </div>
        </div>
        <div className='c-mision'>
            <div className='item-mision'>
                <div className='item-mision-logo'>
                    <img src={IconoMision} alt='Icono Misión' />
                    <h2 className='h2-mision'>MISIÓN</h2>
                </div>
                <p className='p-mision'>
                    <strong>Ser líderes en la presentación de servicios médicos prehospitalarios y salud ocupacional.</strong> Logrando ser la mejor opción del mercado, con altos estándares de calidad y un equipo certificado de profesionales en la salud. Consolidándonos como una empresa Rentable, Eficiente y Socialmente Responsable.
                </p>
            </div>
            <div className='item-mision'>
                <img className='img-paramedicos' src={paramedicoMision} alt='Paramédicos' />
            </div>
        </div>
        <div className='c-vision'>
            <div className='item-mision'>
                <img className='img-paramedicos' src={paramedicoVision} alt='Paramédicos' />
            </div>
            <div className='item-mision'>
                <div className='item-mision-logo'>
                    <img src={IconoVision} alt='Icono Misión' />
                    <h2 className='h2-mision'>VISIÓN</h2>
                </div>
                <p className='p-mision'>
                    <strong>Ser una empresa de clase mundial en la atención médica prehospitalaria y salud ocupacional,</strong> que garantice la sustentabilidad y el crecimiento de nuestro liderazgo a través de la innovación y mejora continúa.
                </p>
            </div>
        </div>
        <div className='c-valores'>
            <h2 className='h2-valores'>NUESTROS VALORES</h2>
            <div className='i-valores'>
                <picture>
                    <source srcset={IconosValoresMovil} media="(max-width: 600px)" />
                    <img src={IconosValores} alt="Icono Valores" />
                </picture>
            </div>
        </div>
        <div className='c-slider'>
            <p className='p-slider'>NUESTRO MEJOR SERVICIO ES OFRECER UN</p>
            <p className='p-slider'>TRATO CÁLIDO Y HUMANO</p>
            <div className='i-slider'>
                <div className='i-slider-2'>
                <ImageGallery items={images}
                    showBullets={true}
                    showIndex={true}
                    showThumbnails={true}
                    lazyLoad={true}
                    showPlayButton={false}
                    autoPlay={true}
                />
                </div>
            </div>
        </div>
    </>);
}
export default nosotros;