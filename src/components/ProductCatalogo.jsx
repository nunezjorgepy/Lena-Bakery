import products from "../constants/product-list";
import './ProductCatalogo.css';

function ProductCatalogo() {
  return (
    <>
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
    </>
  )
}

export default ProductCatalogo