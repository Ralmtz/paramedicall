import React, { useState } from 'react';
import Logo from './Logo.jpg'
import { Link } from "react-router-dom";
import useWindowDimensions from '../../Helpers'
import { FiAlignJustify } from "react-icons/fi";
import './index.css';
function Navbar() {
  const { width } = useWindowDimensions();
  const [open, setOpen] = useState(false);
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
                <Link to="/">INICIO</Link>
              </li>
              <li className='list-item'>
                <Link to="/nosotros">NOSOTROS</Link>
              </li>
              <li className='list-item'>
                <Link to="/servicios">SERVICIOS</Link>
              </li>
              <li className='list-item'>
                <Link to="/contacto">CONTACTO</Link>
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
                  <ul className='navbar-list'>
                    <li className='list-item'>
                      <Link to="/">INICIO</Link>
                    </li>
                    <li className='list-item'>
                      <Link to="/nosotros">NOSOTROS</Link>
                    </li>
                    <li className='list-item'>
                      <Link to="/servicios">SERVICIOS</Link>
                    </li>
                    <li className='list-item'>
                      <Link to="/contacto">CONTACTO</Link>
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