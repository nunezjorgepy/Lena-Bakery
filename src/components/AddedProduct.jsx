import './AddedProduct.css';
import { useContext } from 'react';
import { ProductContext } from '../context/product.context';

function AddedProduct(props) {
  const producto = props.product;
  const { deleteItem } = useContext(ProductContext);

  return (
    <div className="item-container">
        <div className="product">
            <div className="product-name">{producto.name}</div>
            <div className="product-price">${producto.price} c/u</div>
        </div>
        <div className="total-product-container">
            <div className="total-quantity">{producto.quantity}</div>
            <div className="total-price">$ {producto.price * producto.quantity}</div>
            <button className="tras-icon" onClick={() => deleteItem(producto.id)}>
            <i className="bi bi-trash3"></i>
            </button>
        </div>
    </div>
  )
}

export default AddedProduct