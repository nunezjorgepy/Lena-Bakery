import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import ProductCatalogo from "../components/ProductCatalogo.jsx";

import './CatalogoPage.css';

function CatalogoPage() {
  
  return (
    <>
        <HeaderComponent />
        <main id="catalogo-main">
          <h2 className="buy-h2">Nuestros Productos</h2>
          <div className="product-grid-container">
            {/* Producto */}
            <ProductCatalogo />
            <ProductCatalogo />
            <ProductCatalogo />
            <ProductCatalogo />
            <ProductCatalogo />
            <ProductCatalogo />
          </div>
        </main>

        <FooterComponent />
    </>
  )
}

export default CatalogoPage