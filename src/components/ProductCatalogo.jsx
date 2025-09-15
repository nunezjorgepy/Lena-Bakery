import './ProductCatalogo.css';

function ProductCatalogo(props) {
    const { name, image, description, ingredients, extra} = props.product

    return (
        <>
            {/* Producto */}
            <div className="product">
                {/* Nombre */}
                <h2 className="catalogo-h2">{name}</h2>
                
                <div className="product-info-container">
                <div className="product-info">

                    {/* Información */}
                    {/* Imagen */}
                    <img className="product-image" src={image} alt="Imagen del producto" />

                    <div className="description">
                        {/* Descripción */}
                        <h3 className="catalogo-h3">{description}</h3>

                        {/* Ingredientes */}
                        <p className="product-ingredientes">
                            <span className="product-span">Ingredientes: </span>{ingredients}
                        </p>
                    </div>
                </div>
                </div>
                {/* Info Extra */}
                {extra && <div className="product-extra-info">{extra}</div>}
            </div>
        </>
    )
}

export default ProductCatalogo