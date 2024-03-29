import React from 'react';
import './index.css';
import LineaImg from './LINEA-VIDA-1080.svg';
import Logo from './logotipo-600x130.svg';
import iconoFB from './iconoFB.svg';
import iconoIG from './iconoIG.svg';
import iconoWPP from './iconoWPP.svg';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className='footer'>
            <footer>
                <div className='textos'>
                    <p className='p-text-1'>ANTE CUALQUIER EVENTUALIDAD </p>
                    <p className='p-text'>RECIBE EL MEJOR TRATO MÉDICO</p>
                    <div className='c-a-contactanos'>
                    <Link className='a-contactanos' to="/contacto" >CONTÁCTANOS</Link>
                    </div>
                        <img className='img-lineaVida' src={LineaImg} alt='Linea Vida' />
                </div>
            </footer>
            <div className="container-logo">
                <div className="item-logo">
                    <img className='img-logo-footer' src={Logo} alt='Logo' />
                </div>
                <div className="item-logo">
                    <a href='https://facebook.com/paramedicallSadecv' target='_blank' rel='noreferrer'><img className='img-logo-r' src={iconoFB} alt='Facebook' /></a>
                    <a href='https://instagram.com/paramedicall3' target='_blank' rel='noreferrer'><img className='img-logo-r' src={iconoIG} alt='Instagram' /></a>
                    <a href='https://wa.me/+528333855523?text=Gracias por comunicarte a PARAMEDICALL, en que podemos  ayudarte.' target='_blank' rel='noreferrer'><img className='img-logo-r' src={iconoWPP} alt='WhatsApp' /></a>
                </div>
            </div>
            {<p className='atribucion'> ©{new Date().getFullYear()} PARAMEDICALL S.A de C.V | TODOS LOS DERECHOS RESERVADOS</p>}
        </div>);
}
export default Footer;