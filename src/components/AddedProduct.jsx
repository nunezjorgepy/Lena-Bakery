import './AddedProduct.css';

function AddedProduct(props) {
  return (
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
  )
}

export default AddedProduct