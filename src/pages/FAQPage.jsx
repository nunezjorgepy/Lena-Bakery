import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import './FAQPage.css';
import FAQComponent from "../components/FAQComponent";


function FAQPage() {

    return (
      <>
          <HeaderComponent />
          <main id="faq-main">
            <h2 className="buy-h2">Preguntas Frecuentes</h2>
            <FAQComponent />
          </main>
          <FooterComponent />
      </>
    )
}

export default FAQPage