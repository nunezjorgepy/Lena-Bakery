import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import FAQComponent from "../components/FAQComponent";
import './FAQPage.css';
import faqList from "../constants/faqList";


function FAQPage() {

    const HTMLFaqList = faqList.map(faq => {
        return (
            <li key={faq.id}>
                <FAQComponent faq={faq}/>
            </li>
        )
    })

    return (
        <>
            <HeaderComponent />
            <main id="faq-main">
                <h2 className="buy-h2">Preguntas Frecuentes</h2>
                <ul className="faq-container">
                    {HTMLFaqList}
                </ul>
            </main>
            <FooterComponent />
        </>
    )
}

export default FAQPage