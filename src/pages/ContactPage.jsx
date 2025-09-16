import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import './ContactPage.css';

function ContactPage() {
  return (
    <>
        <HeaderComponent />
        <main>
            <form action="" className="contact-form">
              <h2 className="buy-h2 contact-h2">Contactanos</h2>
              <div className="contact-group">
                <label htmlFor="contact-input-name" className="contact-label">Nombre</label>
                <input id="contact-input-name" className="contact-input" required placeholder="Ingresa tu nombre"></input>
              </div>

              <div className="contact-group">
                <label htmlFor="contact-input-email" className="contact-label">Email</label>
                <input id="contact-input-email" type="email" className="contact-input" required placeholder="Ingresa tu mail"></input>
              </div>

              <div className="contact-group">
                <label htmlFor="contact-textarea" className="contact-label">Asunto</label>
                <textarea name="contact-textarea" id="contact-textarea" placeholder="¿Cuál es tu consulta?" required></textarea>
              </div>

              <button type="submit" className="contact-btn">Enviar</button>
            </form>
        </main>

        <FooterComponent />
    </>
  )
}

export default ContactPage