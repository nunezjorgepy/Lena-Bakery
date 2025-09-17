import './HeaderComponent.css';
import smallLogo from '../assets/small-logo.png'
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import companyData from '../constants/companyData.js';

function HeaderComponent() {
    const linksRef = useRef(null);

    const showMenu = () => {
        linksRef.current.classList.toggle('left-zero')
    }

    return (
        <header>
            <div className="header-container">
                <Link to={'/'} className="logo-container">
                    <img className='header-logo' src={smallLogo} alt="Lena Bakery Logo" />
                    <div className="header-company-name">{companyData.name}</div>
                </Link>
                <div className="links-container" ref={linksRef}>
                    <Link className='header-link' to='/buy'>Pedinos</Link>
                    <Link className='header-link' to='/catalogo'>Catálogo</Link>
                    <Link className='header-link' to='/faq'>Q&A</Link>
                    <Link className='header-link' to='/contact'>Contacto</Link>
                </div>
                <button className="menu-container" onClick={() => showMenu()}>
                    <i className="bi bi-list"></i>
                </button>
            </div>
        </header>
    )
}

export default HeaderComponent