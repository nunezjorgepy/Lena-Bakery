import productList from '../constants/product-list.js';
import './BuyProductCard.css'

function BuyProductCard(props) {
    const producto = props.product;

    return (
        <article className='order-article'>
            <div className="order-img">
                <img className='image-order' src={producto.image} alt={producto.description} />
            </div>
            <div className="order-info">
                <div className="order-name">{producto.name}</div>
                <div className="order-price">${producto.price}</div>
                <div className="add-to-cart">
                    <div className="quantity-btns">
                        <button className="quantity-btn minus-btn">-</button>
                        <div className="order-quantity">0</div>
                        <button className="quantity-btn plus-btn">+</button>
                    </div>
                    <button className="add-btn">Agregar</button>
                </div>
            </div>
        </article>
    )
}

export default BuyProductCard