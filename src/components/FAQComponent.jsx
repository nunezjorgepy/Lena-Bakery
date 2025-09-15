import { useRef } from "react";

function FAQComponent(props) {
    const faqBtn = useRef(null);
    const { question, answer } = props.faq;

    const changeBtnText = () => {
        let faqSymbol = faqBtn.current;
        faqSymbol.innerHTML = faqSymbol.innerHTML === '+' ? '-' : '+';
    }
    return (
        <>
            <div className="question-container">
            <div className="question">
                <div className="faq-question">{question}</div>
                <button className="faq-btn" ref={faqBtn} onClick={() => changeBtnText()}>+</button>
            </div>
            <div className="respuesta">
                {answer}
            </div>
            </div>
        </>
    )
}

export default FAQComponent