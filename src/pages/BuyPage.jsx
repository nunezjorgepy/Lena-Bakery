import './BuyPage.css';
import HeaderComponent from "../components/HeaderComponent";
import AddedProduct from '../components/AddedProduct';

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ProductContext } from '../context/product.context';


function BuyPage() {
  const { HTMLProducts, HTMLAddedProducts, HTMLTotal, message } = useContext(ProductContext);
  
  return (
    <div className="max-container">
        <HeaderComponent />
        <main className="buy-main">
          <div className="get-to-order-continaer">
            <span className='get-to-span buy-h2'>Tu pedido</span>
            <button className="get-to-btn"><i className="bi bi-arrow-down"></i></button>
          </div>
          {/* Título */}
          <h2 className="buy-h2">Nuestros Productos</h2>

          {/* Contenedor de productos */}
          <ul className="cards-containers">
            {HTMLProducts}
          </ul>

          {/* Título */}
          <h2 className="buy-h2">Tu Pedido</h2>

          {/* Lista de agregados */}
          <div className="items-added-container">
            {/* Producto */}
            <ul>
              {HTMLAddedProducts}
            </ul>

            {/* Totales */}
            <div className="total-container">
              <h3 className="total-h3">Total: </h3>
              <div className="total-cart-price">{HTMLTotal}</div>
            </div>

            {/* Totales */}
            <div className="whatsapp-container">
              <Link to={`https://wa.me/541136661035?text=¡Hola! ¿Cómo estas? Te quería pedir ${message} - ¡Muchas gracias!`} target='_blank' className="whatsapp">
                <i className="bi bi-whatsapp"></i>
                Envíanos tu pedido
              </Link>
            </div>
          </div>
        </main>
    </div>
  )
}

export default BuyPage