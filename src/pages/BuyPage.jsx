import './BuyPage.css';
import BuyProductCard from "../components/BuyProductCard"
import HeaderComponent from "../components/HeaderComponent"

import products from '../constants/product-list'
import { Link } from 'react-router-dom';


function BuyPage() {
  const HTMLProducts = products.map((product) => {
    return (
      <li key={product.id}>
        <BuyProductCard product={product}/>
      </li>
    )
  })

  
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
              <div className="item-container">
                <div className="product">
                  <div className="product-name">Medialena</div>
                  <div className="product-price">$500 c/u</div>
                </div>
                <div className="total-product-container">
                  <div className="total-quantity">3</div>
                  <div className="total-price">$ 1500</div>
                  <button className="tras-icon">
                    <i className="bi bi-trash3"></i>
                  </button>
                </div>
              </div>

              {/* Producto */}
              <div className="item-container">
                <div className="product">
                  <div className="product-name">Lemon Fit</div>
                  <div className="product-price">$3000 c/u</div>
                </div>
                <div className="total-product-container">
                  <div className="total-quantity">1</div>
                  <div className="total-price">$ 3000</div>
                  <button className="tras-icon">
                    <i className="bi bi-trash3"></i>
                  </button>
                </div>
              </div>

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