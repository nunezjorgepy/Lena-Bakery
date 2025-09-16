import { useRef, useState } from "react";

function FAQComponent(props) {
    const faqBtn = useRef(null);
    const faqAnswer = useRef(null);
    const [btnText, setBtnText] = useState('+')
    const { question, answer } = props.faq;

    const changeBtnText = () => {
        /* Muestra o esconde la respuesta según corresponda. CAmbia el símbolo mostrado en el botón entre + y -. */
        btnText === '+' ? setBtnText('-') : setBtnText('+');
        faqAnswer.current.classList.toggle('show-answer');
    }

    return (
        <>
            <div className="question-container">
            <div className="question">
                <div className="faq-question">{question}</div>
                <button className="faq-btn" ref={faqBtn} onClick={() => changeBtnText()}>{btnText}</button>
            </div>
            <div ref={faqAnswer} className="respuesta">
                <p className="answer-p">
                    {answer}
                </p>
            </div>
            </div>
        </>
    )
}

export default FAQComponent