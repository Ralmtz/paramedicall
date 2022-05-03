import React from 'react';
import './index.css';
import ImgContacto from './Contacto.png';
import ImgConsulta from './Consulta.png';
function Contacto() {
  return (
    <div className='container-full'>
      <div className="container-logo-encabezado">
        <img className='img-header' src={ImgContacto} alt='Siempre Listos' />
        <div className='text-encima'>
          <p className='t-1'>PONTE EN CONTACTO</p>
          <p className='t-2'>SIEMPRE LISTOS ANTE</p>
          <p className='t-3'>CUALQUIER EVENTUALIDAD</p>
        </div>
      </div>
          <div className="flex-container-ayuda">
            <div className="flex-items-ayuda">
              <h1 className='text-header'>ESTAMOS AQUÍ PARA <span className='text-ayuda'>AYUDARTE</span></h1>
            </div>
          </div>
          <div className="container-contacto">
            <div className="item-contacto">
              <h2 className='h2-contacto'>Oficina Paramedicall</h2>
              <p className='p-contacto'>Felipe Pescador 406</p>
              <p className='p-contacto'>Col. Nuevo Aeropuerto</p>
              <p className='p-contacto'>Tampico, Tamps. C.P 89337</p>
              <h2 className='h2-contacto'>Teléfono de Oficina</h2>
              <p className='p-contacto'>(833) 122 0000</p>
              <h2 className='h2-contacto'>Área Comercial</h2>
              <p className='p-contacto'>Ivonne Rocha</p>
              <p className='p-contacto'>(833) 293 5985</p>
              <p className='p-contacto'>comercial1@paramedicall.com.mx</p>
              <h2 className='h2-contacto'>Área Administrativa</h2>
              <p className='p-contacto'>Sofía Hernández González</p>
              <p className='p-contacto'>(833) 385 5523</p>
              <p className='p-contacto'>ventas@paramedicall.com.mx</p>
            </div>
            <div className="item-contacto">
              <img className='img-consulta' src={ImgConsulta} alt='Consulta' />
            </div>
          </div>
    </div>);
}
export default Contacto;