import './BuyPage.css'
import BuyProductCard from "../components/BuyProductCard"
import HeaderComponent from "../components/HeaderComponent"


function BuyPage() {
  return (
    <div className="max-container">
        <HeaderComponent />
        <main className="buy-main">
          <h2 className="buy-h2">Nuestros Productos</h2>
          <div className="cards-containers">
            <BuyProductCard />
            <BuyProductCard />
            <BuyProductCard />
            <BuyProductCard />
          </div>
        </main>
    </div>
  )
}

export default BuyPage