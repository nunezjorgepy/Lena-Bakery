import { Link } from 'react-router-dom';
import './FooterComponent.css';

function FooterComponent() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id='footer'>
            <div className="footer-grid">

                {/* Description and social */}
                <div className="grid-column">
                    <h3 className='footer-h3'>Lena Bakery</h3>
                    <p className="footer-p">
                        Elaborando los mejores productos de panadería desde 2024 con ingredientes de primera calidad y recetas tradicionales.
                    </p>
                    <div className="social">
                        <Link className='footer-link' to={'https://www.instagram.com/lenabkry/'} target='_blank'>
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
                    <Link className="footer-enlaces" to={'/buy'} target='_blank'>Hacer Pedido</Link>
                    <Link className="footer-enlaces" to={'/catalogo'} target='_blank'>Catálogo</Link>
                    <Link className="footer-enlaces" to={'/faq'} target='_blank'>Preguntas Frecuentes</Link>
                    <Link className="footer-enlaces" to={'/contact'} target='_blank'>Contacto</Link>
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
                        <i className="bi bi-whatsapp"></i> +54 011 3666 1035
                    </div>
                    <div className="footer-mail footer-contact">
                        <i className="bi bi-envelope"></i> info@lenabakery.com.ar
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