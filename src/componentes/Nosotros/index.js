import React from 'react';
import '../base.css'
import './index.css';
import imgHeaderNosotros from './FOTO-HEADER-NOSOTROS.png';
import imgHeaderNosotros700 from './FOTO-HEADER-NOSOTROS-700.png';
import IconoMision from './IconoMision.png';
import IconoVision from './IconoVision.png';
import paramedicoMision from './paramedicoMision.jpg';
import paramedicoVision from './paramedicoVision.jpg';
import IconosValores from './IconosValores.png';
import IconosValoresMovil from './IconosValoresMovil.png';
import ImageGallery from 'react-image-gallery';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import Img1 from './1.jpg';
import Img2 from './2.jpg';
import Img3 from './3.jpg';
import Img4 from './4.jpg';
import Img5 from './5.jpg';
import Img6 from './6.jpg';
import Img7 from './7.jpg';
import Img8 from './8.jpg';
import Img9 from './9.jpg';
import Img10 from './10.jpg';
import Img11 from './11.jpg';
import useWindowDimensions from '../../Helpers';

function Nosotros() {
    const { width } = useWindowDimensions();

    const images = [
        {
            original: Img1,
            thumbnail: Img1,
            originalAlt: 'FotoParamedicall',
            thumbnailAlt: 'FotoThumbnail'
        },
        {
            original: Img2,
            thumbnail: Img2,
            originalAlt: 'FotoParamedicall',
            thumbnailAlt: 'FotoThumbnail'
        },
        {
            original: Img3,
            thumbnail: Img3,
            originalAlt: 'FotoParamedicall',
            thumbnailAlt: 'FotoThumbnail'
        },
        {
            original: Img4,
            thumbnail: Img4,
            originalAlt: 'FotoParamedicall',
            thumbnailAlt: 'FotoThumbnail'
        },
        {
            original: Img5,
            thumbnail: Img5,
            originalAlt: 'FotoParamedicall',
            thumbnailAlt: 'FotoThumbnail'
        },
        {
            original: Img6,
            thumbnail: Img6,
            originalAlt: 'FotoParamedicall',
            thumbnailAlt: 'FotoThumbnail'
        },
        {
            original: Img7,
            thumbnail: Img7,
            originalAlt: 'FotoParamedicall',
            thumbnailAlt: 'FotoThumbnail'
        },
        {
            original: Img8,
            thumbnail: Img8,
            originalAlt: 'FotoParamedicall',
            thumbnailAlt: 'FotoThumbnail'
        },
        {
            original: Img9,
            thumbnail: Img9,
            originalAlt: 'FotoParamedicall',
            thumbnailAlt: 'FotoThumbnail'
        },
        {
            original: Img10,
            thumbnail: Img10,
            originalAlt: 'FotoParamedicall',
            thumbnailAlt: 'FotoThumbnail'
        },
        {
            original: Img11,
            thumbnail: Img11,
            originalAlt: 'FotoParamedicall',
            thumbnailAlt: 'FotoThumbnail'
        },

    ];
    return (<>
        <div className="container-logo-nosotros">
            <img className='img-nosotros' src={width > 450 ? imgHeaderNosotros : imgHeaderNosotros700} alt='Header Nosotros' />
            <div className='text-encima-nosotros'>
                <p className='t-1-nosotros'>SOBRE NOSOTROS</p>
                <p className='t-2-nosotros'>TU APOYO MÉDICO</p>
                <p className='t-3-nosotros'>CUANDO LO NECESITAS</p>
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
                <p className='p-nosotros'>
                    Contamos con un equipo profesional y altamente capacitado liderado por el Dr. Miguel Ángel Covarrubias Lucas responsable del servicio con más de 35 años de experiencia en la atención medica con el Titulo de Médico Cirujano otorgado por La Universidad Autónoma del Estado de Hidalgo con cedula profesional 1041791 y especialidad en Medicina Familiar y Urgencias Médicas.
                </p>
            </div>
        </div>
        <div className='row'>
            <div className='col-12 col-s12 c-fechasNosotros'>
                <div className='i-fechaNosotros'>
                    <p className='p-tituloFecha'><strong>1984</strong></p>
                    <p className='p-textFechas'>Recibió el título de médico cirujano por la Universidad Autónoma del Estado de Hidalgo, en la ciudad de Pachuca de Soto Hidalgo el día 26 de octubre de 1984.</p>
                </div>
                <div className='i-fechaNosotros'>
                    <p className='p-tituloFecha'><strong>1984 -1988</strong></p>
                    <p className='p-textFechas'>Se desarrolló como médico familiar en diversas clínicas del Instituto Mexicano de seguridad social en el programa seguridad y solidaridad social.</p>
                </div>
                <div className='i-fechaNosotros'>
                    <p className='p-tituloFecha'><strong>1988 - 1991</strong></p>
                    <p className='p-textFechas'>Realiza especialidad en Medicina Familiar en el Hospital General de Zona 3 de Ciudad Mante con calificación curricular de 13.00 puntos.</p>
                </div>
            </div>
            <div className='c-fechasNosotros'>
                <div className='i-fechaNosotros'>
                    <p className='p-tituloFecha'><strong>1991 - 1993</strong></p>
                    <p className='p-textFechas'>Labora como médico adscrito en el Hospital General de Zona número 5 de la Delegación Estatal en Morelos.</p>
                </div>
                <div className='i-fechaNosotros'>
                    <p className='p-tituloFecha'><strong>1993 - 1995</strong></p>
                    <p className='p-textFechas'>Es designado como director de la Unidad Médica Familiar número 30 de Aldama.</p>
                </div>
                <div className='i-fechaNosotros'>
                    <p className='p-tituloFecha'><strong>1995 - 2013</strong></p>
                    <p className='p-textFechas'>Labora como Medico adscrito en la unidad de emergencias del Hospital General número 77 de Ciudad Madero.</p>
                </div>
            </div>
            <div className='c-fechasNosotros' style={{ paddingBottom: '30px' }}>
                <div className='i-fechaNosotros'>
                    <p className='p-tituloFecha'><strong>2013 - Actualidad</strong></p>
                    <p className='p-textFechas'>Labora en la empresa PARAMEDICALL S.A. de C.V. como responsable del servicio y personal médico.</p>
                </div>
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
                    <source className='img-valores-movil' srcSet={IconosValoresMovil} media="(max-width: 600px)" />
                    <img className='img-valores-movil' src={IconosValores} alt="Icono Valores" />
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
                        showIndex={false}
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
export default Nosotros;