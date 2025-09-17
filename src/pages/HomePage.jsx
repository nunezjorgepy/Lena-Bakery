import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import './HomePage.css';
import welcomeLena from '../assets/welcome-lena.png'
import Emojis from "../components/Emojis";


function HomePage() {


    return (
        <>
        <HeaderComponent />
        {/* <div className="cien-dvw-bg-color"></div> */}
        <main className="buy-main">
            {/* Título e imagen de bienvenida */}
            <div className="welcome-title">
                <h1 className='welcome-h2'>Bienvenidos a</h1>
                <img className="welcome-img" src={welcomeLena} alt="Logo de Lena Bakery" />
            </div>

            <Emojis emoji='bread' text='No somos sólo una panadería. Tenemos un propósito.'/>

            <Emojis emoji='hearts' text='Panadería y postres sin azúcares refinadas.'/>

            <Emojis emoji='stars' text='Revisiono tus recetas favoritas para que puedas disfrutarlas.'/>
        </main>
        <FooterComponent />
        </>
    )
}

export default HomePage