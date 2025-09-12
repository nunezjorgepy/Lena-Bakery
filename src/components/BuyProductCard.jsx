import productList from '../constants/product-list.js';
import './BuyProductCard.css'

function BuyProductCard() {

    return (
        <article className='order-article'>
            <div className="order-img">
                <img className='image-order' src={productList[0].image} alt={productList[0].description} />
            </div>
            <div className="order-info">
                <div className="order-name">{productList[0].name}</div>
                <div className="order-price">${productList[0].price}</div>
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