import './BuyPage.css';
import HeaderComponent from "../components/HeaderComponent";
import AddedProduct from '../components/AddedProduct';

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ProductContext } from '../context/product.context';


function BuyPage() {
  const { HTMLProducts } = useContext(ProductContext);
  
  return (
    <div className="max-container">
        <HeaderComponent />
        <main className="buy-main">
          {/* Título */}
          <h2 className="buy-h2">Nuestros Productos</h2>

          {/* Contenedor de productos */}
          <div className="cards-containers">
            {HTMLProducts}
          </div>

          {/* Título */}
          <h2 className="buy-h2">Tu Pedido</h2>

          {/* Lista de agregados */}
          <div className="items-added-container">
            {/* Producto */}
            <AddedProduct />
            <AddedProduct />
            <AddedProduct />

            {/* Totales */}
            <div className="total-container">
              <h3 className="total-h3">Total: </h3>
              <div className="total-cart-price">$ 4500</div>
            </div>

            {/* Totales */}
            <div className="whatsapp-container">
              <Link to={'https://wa.me/541136661035?text=Hello'} target='_blank' className="whatsapp">
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