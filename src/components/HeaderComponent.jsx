import './HeaderComponent.css';
import smallLogo from '../assets/small-logo.png'
import { Link } from 'react-router-dom';

function HeaderComponent() {
  return (
    <header>
        <div className="logo-container">
            <img className='header-logo' src={smallLogo} alt="Lena Bakery Logo" />
            <div className="header-company-name">Lena Bakery</div>
        </div>
        <div className="links-container">
            <Link className='header-link' to='/'>Pedinos</Link>
            <Link className='header-link' to='/'>Catálogo</Link>
            <Link className='header-link' to='/'>Q&A</Link>
            <Link className='header-link' to='/'>Contacto</Link>
        </div>
    </header>
  )
}

export default HeaderComponent