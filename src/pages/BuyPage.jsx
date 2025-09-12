import './BuyPage.css'
import BuyProductCard from "../components/BuyProductCard"
import HeaderComponent from "../components/HeaderComponent"

import products from '../constants/product-list'


function BuyPage() {
  const HTMLProducts = products.map((product) => {
    return (
      <li key={product.id}>
        <BuyProductCard product={product}/>
      </li>
    )
  })

  
    return (
      <div className="max-container">
          <HeaderComponent />
          <main className="buy-main">
            <h2 className="buy-h2">Nuestros Productos</h2>
            <div className="cards-containers">
              {HTMLProducts}
            </div>
          </main>
      </div>
    )
}

export default BuyPage