import React from 'react';
import './index.css';
import LineaImg from './lineaVidaHeader.png';
import Logo from './Logo.jpg';
import iconoFB from './iconoFB.svg';
import iconoIG from './iconoIG.svg';
import iconoWPP from './iconoWPP.svg';
import useWindowDimensions from '../../Helpers'

function Navbar() {
    const { width } = useWindowDimensions();

    return (
        <div className='footer'>
            <footer>
                <div className='textos'>
                    <p className='p-text'>ANTE CUALQUIER EVENTUALIDAD </p>
                    <p className='p-text'>RECIBE EL MEJOR TRATO MÉDICO</p>
                    <br />
                    <a className='a-contactanos' href='/contacto' >CONTÁCTANOS</a>
                </div>
                <div className="container-imgLogo">
                    <div className="item-logo">
                        <img className='img-lineaVida' src={LineaImg} alt='Linea Vida' />
                    </div>
                </div>
            </footer>
            <div className="container-logo">
                <div className="item-logo">
                    <img className={width < 460 ? 'img-logo-movil' :'img-logo'} src={Logo} alt='Logo' />
                </div>
                <div className="item-logo">
                    <a href='https://facebook.com/paramedicallSadecv' target='_blank' rel='noreferrer'><img className='img-logo' src={iconoFB} alt='Logo' /></a>
                    <a href='https://instagram.com/paramedicall3' target='_blank' rel='noreferrer'><img className='img-logo' src={iconoIG} alt='Logo' /></a>
                    <a href='https://wa.me/+528331220000?text=¡Estoy+interesado+en+sus+servicios!' target='_blank' rel='noreferrer'><img className='img-logo' src={iconoWPP} alt='Logo' /></a>
                </div>
            </div>
            {<p className='atribucion'> ©{new Date().getFullYear()} PARAMEDICALL S.A de C.V | TODOS LOS DERECHOS RESERVADOS</p>}
        </div>);
}
export default Navbar;