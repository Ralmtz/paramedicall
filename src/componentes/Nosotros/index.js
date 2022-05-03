import React from 'react';
import '../base.css'
import './index.css';
import imgHeaderNosotros from './HeaderNosotros.png';
import IconoMision from './IconoMision.png';

function nosotros() {
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
                <img src={IconoMision} alt='Icono Misión'/>
                <h2 className='h2-mision'>MISIÓN</h2>
            </div>
            <div className='item-mision'>
                <p className='p-mision'>
                    Ser líderes en la presentación de servicios médicos prehospitalarios y salud ocupacional. Logrando ser la mejor opción del mercado, con altos estándares de calidad y un equipo certificado de profesionales en la salud. Consolidándonos como una empresa Rentable, Eficiente y Socialmente Responsable.
                </p>
            </div>
        </div>
    </>);
}
export default nosotros;