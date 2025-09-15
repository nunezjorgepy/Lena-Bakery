import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import ProductCatalogo from "../components/ProductCatalogo.jsx";

import './CatalogoPage.css';
import products from '../constants/product-list.js'

function CatalogoPage() {

  const HTMLProductCatalogo = products.map(product => {
    return (
      <li key={product.id}>
        <ProductCatalogo product={product} />
      </li>
    )
  })
  
  return (
    <>
        <HeaderComponent />
        <main id="catalogo-main">
          <h2 className="buy-h2">Nuestros Productos</h2>
          <ul className="product-grid-container">
            {/* Productos */}
            {HTMLProductCatalogo}
          </ul>
        </main>

        <FooterComponent />
    </>
  )
}

export default CatalogoPage