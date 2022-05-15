import React, { useState } from 'react';
import Logo from './Logo.svg'
import { Link } from "react-router-dom";
import useWindowDimensions from '../../Helpers'
import { FiAlignJustify } from "react-icons/fi";
import './index.css';
function Navbar() {
  const { width } = useWindowDimensions();
  const [open, setOpen] = useState(false);
  const [ruta, setRuta] = useState("/");

  console.log("ruta:",ruta);


  return (
    <div>
      {
        width > 520 ? <div className='navbar'>
          <div>
            <a href="/">
              <img className='img-logo-nav' src={Logo} alt='Logo' />
            </a>
          </div>
          <div className='navbar-list'>
            <ul>
              <li className='list-item'>
                <Link to="/" onClick={()=> setRuta("/")} style={{color: ruta === '/' && 'black'}}>INICIO</Link>
              </li>
              <li className='list-item'>
                <Link to="/nosotros"  onClick={()=> setRuta("/nosotros")} style={{color: ruta === '/nosotros' && 'black'}} >NOSOTROS</Link>
              </li>
              <li className='list-item'>
                <Link to="/servicios" onClick={()=> setRuta("/servicios")} style={{color: ruta === '/servicios' && 'black'}}>SERVICIOS</Link>
              </li>
              <li className='list-item'>
                <Link to="/contacto"  onClick={()=> setRuta("/contacto")} style={{color: ruta === '/contacto' && 'black'}}>CONTACTO</Link>
              </li>
            </ul>
          </div>
        </div>
          : <>

            <div className='navbar'>
              <div>
                <a href="/">
                  <img className='img-logo-nav' src={Logo} alt='Logo' />
                </a>
              </div>
              <div>
                <FiAlignJustify style={{ cursor: 'pointer', height: '50px', width: '50px', color: 'white' }} onClick={() => setOpen(!open)} />
              </div>
            </div>
            <div>
              {
                open ? <div className='navbar-movil'>
                  <ul className='navbar-list' onClick={()=>setOpen(false)}>
                    <li className='list-item'>
                      <Link to="/" onClick={()=> setRuta("/")} style={{color: ruta === '/' && 'black'}}>INICIO</Link>
                    </li>
                    <li className='list-item'>
                      <Link to="/nosotros" onClick={()=> setRuta("/nosotros")} style={{color: ruta === '/nosotros' && 'black'}}>NOSOTROS</Link>
                    </li>
                    <li className='list-item'>
                      <Link to="/servicios" onClick={()=> setRuta("/servicios")} style={{color: ruta === '/servicios' && 'black'}}>SERVICIOS</Link>
                    </li>
                    <li className='list-item'>
                      <Link to="/contacto" onClick={()=> setRuta("/contacto")} style={{color: ruta === '/contacto' && 'black'}}>CONTACTO</Link>
                    </li>
                  </ul>
                </div>

                  : <> </>
              }

            </div>
          </>
      }
    </div>);
}
export default Navbar;