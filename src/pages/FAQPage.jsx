import { useRef } from "react";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import './FAQPage.css';


function FAQPage() {
    const faqBtn = useRef(null);

    const changeBtnText = () => {
      let faqSymbol = faqBtn.current;
      faqSymbol.innerHTML = faqSymbol.innerHTML === '+' ? '-' : '+';
    }

    return (
      <>
          <HeaderComponent />
          <main id="faq-main">
            <h2 className="buy-h2">Preguntas Frecuentes</h2>
            <div className="faq-container">
              <div className="question-container">
                <div className="question">
                  <div className="faq-question">¿Cómo conservar tus productos?</div>
                  <button className="faq-btn" ref={faqBtn} onClick={() => changeBtnText()}>+</button>
                </div>
                <div className="respuesta">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora vel natus, fugiat accusamus consectetur explicabo veritatis ullam pariatur fugit assumenda cupiditate fuga omnis aspernatur perspiciatis reiciendis nostrum nisi sunt? Facilis!
                </div>
              </div>
            </div>
          </main>
          <FooterComponent />
      </>
    )
}

export default FAQPage