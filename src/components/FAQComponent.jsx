import { useRef } from "react";

function FAQComponent() {
    const faqBtn = useRef(null);

    const changeBtnText = () => {
        let faqSymbol = faqBtn.current;
        faqSymbol.innerHTML = faqSymbol.innerHTML === '+' ? '-' : '+';
    }
    return (
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
    )
}

export default FAQComponent