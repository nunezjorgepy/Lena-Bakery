import './BuyProductCard.css';
import { useContext } from 'react';
import { ProductContext } from '../context/product.context';

function BuyProductCard(props) {
    const producto = props.product;
    const { addQuantity, substractQuantity } = useContext(ProductContext);

    return (
        <article className='order-article'>
            <div className="order-img">
                <img className='image-order' src={producto.image} alt={producto.description} />
            </div>
            <div className="order-info">
                <div className="order-name">{producto.name}</div>
                <div className="order-price">$ {producto.price}</div>
                <div className="add-to-cart">
                    <div className="quantity-btns">
                        <button className="quantity-btn minus-btn" onClick={() => substractQuantity(producto.id)}>-</button>
                        <div className="order-quantity">{producto.quantity}</div>
                        <button className="quantity-btn plus-btn" onClick={() => addQuantity(producto.id)}>+</button>
                    </div>
                    <button className="add-btn">Agregar</button>
                </div>
            </div>
        </article>
    )
}

export default BuyProductCard