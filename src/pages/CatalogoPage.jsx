import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";

import './CatalogoPage.css';
import products from '../constants/product-list.js'

function CatalogoPage() {
  console.log(products);
  
  return (
    <>
        <HeaderComponent />
        <main id="catalogo-main">
          <h2 className="buy-h2">Nuestros Productos</h2>
          <div className="product-grid-container">

            {/* Producto */}
            <div className="product">
              {/* Nombre */}
              <h2 className="catalogo-h2">{products[0].name}</h2>
              
              <div className="product-info-container">
                <div className="product-info">

                  {/* Información */}
                    {/* Imagen */}
                    <img className="product-image" src={products[0].image} alt="Imagen del producto" />

                  <div className="description">
                    {/* Descripción */}
                    <h3 className="catalogo-h3">{products[0].description}</h3>

                    {/* Ingredientes */}
                    <p className="product-ingredientes">
                      <span className="product-span">Ingredientes: </span>{products[0].ingredients}
                    </p>
                  </div>
                </div>
              </div>
              {/* Info Extra */}
              <div className="product-extra-info">Podes elegirlas rellenas con dulce de leche sin azúcar</div>
            </div>

            <div className="product">Producto 1</div>
            <div className="product">Producto 1</div>
            <div className="product">Producto 1</div>
            <div className="product">Producto 1</div>
            <div className="product">Producto 1</div>
          </div>
        </main>

        <FooterComponent />
    </>
  )
}

export default CatalogoPage