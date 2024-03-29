import React, { useState } from 'react';
import Logo from './Logo.svg'
import { NavLink } from "react-router-dom";
import useWindowDimensions from '../../Helpers'
import { FiAlignJustify } from "react-icons/fi";
import './index.css';
function Navbar() {
  const { width } = useWindowDimensions();
  const [open,setOpen] =useState(false);
  
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
                <NavLink to="/"  className={({isActive})=> (isActive ? 'active' : 'noActive')}>INICIO</NavLink>
              </li>
              <li className='list-item'>
                <NavLink to="/nosotros" className={({isActive})=> (isActive ? 'active' : 'noActive')}>NOSOTROS</NavLink>
              </li>
              <li className='list-item'>
                <NavLink to="/servicios"className={({isActive})=> (isActive ? 'active' : 'noActive')} >SERVICIOS</NavLink>
              </li>
              <li className='list-item'>
                <NavLink to="/contacto" className={({isActive})=> (isActive ? 'active' : 'noActive')} >CONTACTO</NavLink>
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
                <FiAlignJustify className='icon-menu' onClick={() => setOpen(!open)} />
              </div>
            </div>
            <div>
              {
                open ? <div className='navbar-movil'>
                  <ul className='navbar-list' onClick={()=>setOpen(false)}>
                    <li className='list-item'>
                      <NavLink to="/" className={({isActive})=> (isActive ? 'active' : 'noActive')}>INICIO</NavLink>
                    </li>
                    <li className='list-item'>
                      <NavLink to="/nosotros" className={({isActive})=> (isActive ? 'active' : 'noActive')}>NOSOTROS</NavLink>
                    </li>
                    <li className='list-item'>
                      <NavLink to="/servicios" className={({isActive})=> (isActive ? 'active' : 'noActive')}>SERVICIOS</NavLink>
                    </li>
                    <li className='list-item'>
                      <NavLink to="/contacto" className={({isActive})=> (isActive ? 'active' : 'noActive')}>CONTACTO</NavLink>
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