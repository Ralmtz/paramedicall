import React from 'react';
import './index.css';
import HeaderServicios from './FOTO-HEADER-SERVICIOS.png';

function Servicios() {
    return (<div>
        <div className="container-logo-encabezado-Servicios">
            <img className='img-header' src={HeaderServicios} alt='Header Servicios' />
            <div className='text-encima'>
                <p className='t-1'>NUESTROS SERVICIOS</p>
                <p className='t-2'>SOLUCIONES INTEGRALES</p>
                <p className='t-3'>Y HUMANAS</p>
            </div>
        </div>
        <div className='c-nuestrasAmbulancias'>
            <h1 className='h1-nuestrasAmbulancias'>NUESTRAS AMBULANCIAS</h1>
            <p className='p-nuestrasAmbulancias'>
                Únicos con ambulancias de Terapia Intensiva, equipadas bajo la NOM de la Secretaría de Salud. Con unidades de reciente modelo, personal médico profesional y capacitado, estamos listos para brindar un servicio cálido, oportuno y de calidad.
            </p>
        </div>
        <div className='c-equipadasCon'>
            <h2 className='h2-equipadas'>EQUIPADAS CON</h2>
            <p className='p-dentrode'>(Dentro de las carácteristicas de terapia intensiva)</p>
            <div className='sc-equipadasCon'>
                <div className='i-equipadasCon'>
                    <ul>
                        <li>Monitor multiparamétrico</li>
                        <li> Electrocardiógrafo de 12 derivaciones</li>
                        <li> Monitor desfibrilador con marcapasos</li>
                        <li> Ventilador automático adulto y pediátrico</li>
                        <li> Infusor de presión</li>
                        <li> Doppler fetal</li>
                        <li> Pantalón neumático antishock</li>
                        <li> Equipo de inmovilización</li>
                        <li> Bomba de infusión</li>
                    </ul>
                </div>
                <div className='i-equipadasCon-2'>
                    <ul>
                        <li>Micronebulizador</li>
                        <li>Carro camilla hasta 250 kgs</li>
                        <li>Equipo de aspiración de secreciones fijo y portátil</li>
                        <li>Equipo esterilizado para atención de parto</li>
                        <li>Tanque de oxígeno fijo y portátiles</li>
                        <li>Cuadro de medicamentos: analgesia, cardiología,  inmunoalergicas, intoxicaciones, endocrinología,  neumología, electrolíticas y sustitutos de plasma, gastroenterología y neurología.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>);
}
export default Servicios;