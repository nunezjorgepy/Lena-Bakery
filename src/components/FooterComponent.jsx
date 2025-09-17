import { Link } from 'react-router-dom';
import './FooterComponent.css';
import companyData from '../constants/companyData.js';

function FooterComponent() {
    const currentYear = new Date().getFullYear();    

    return (
        <footer id='footer'>
            <div className="footer-grid">

                {/* Description and social */}
                <div className="grid-column">
                    <h3 className='footer-h3'>{companyData.name}</h3>
                    <p className="footer-p">
                        Elaborando los mejores productos de panadería desde 2024 con ingredientes de primera calidad y recetas tradicionales.
                    </p>
                    <div className="social">
                        <Link className='footer-link' to={companyData.ig} target='_blank'>
                            <i className="bi bi-instagram"></i>
                        </Link>
                        <Link className='footer-link' to={'#'} target='_blank'>
                            <i className="bi bi-facebook"></i>
                        </Link>
                        <Link className='footer-link' to={'#'} target='_blank'>
                            <i className="bi bi-twitter-x"></i>
                        </Link>
                    </div>
                </div>

                {/* Enlaces Rápidos */}
                <div className="grid-column grid-column-links">
                    <h3 className='footer-h3'>Enlaces Rápidos</h3>
                    <Link className="footer-enlaces" to={'/buy'}>Hacer Pedido</Link>
                    <Link className="footer-enlaces" to={'/catalogo'} target='_blank'>Catálogo</Link>
                    <Link className="footer-enlaces" to={'/faq'}>Preguntas Frecuentes</Link>
                    <Link className="footer-enlaces" to={'/contact'}>Contacto</Link>
                </div>

                {/* Horarios de atención */}
                <div className="grid-column">
                    <h3 className='footer-h3'>Horarios de Atención</h3>
                    <div className="horarios">Lunes a Viernes 8:00 - 20:00</div>
                    <div className="horarios">Sábados: 8:00 - 14:00</div>
                    <div className="horarios">Domingos: Cerrado</div>
                </div>

                {/* Contacto */}
                <div className="grid-column">
                    <h3 className='footer-h3'>Contacto</h3>
                    <div className="footer-adress footer-contact">
                        <i className="bi bi-geo-alt"></i> Av. SiempreVivas 732
                    </div>
                    <div className="footer-whatsapp footer-contact">
                        <i className="bi bi-whatsapp"></i> +54 0{companyData.phone.substring(0,2)} {companyData.phone.substring(2,6)} {companyData.phone.substring(6,10)}
                    </div>
                    <div className="footer-mail footer-contact">
                        <i className="bi bi-envelope"></i> {companyData.mail}
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                @ {currentYear} Lena Bakery - Todos los derechos reservados
            </div>
        </footer>
    )
}

export default FooterComponent