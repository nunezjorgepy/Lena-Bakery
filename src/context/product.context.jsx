import { createContext } from "react";
import { useState } from "react";
import products from "../constants/product-list";
import BuyProductCard from "../components/BuyProductCard";

const ProductContext = createContext();

function ProductProviderWrapper(props) {
    const [productList, setProductList] = useState(products)

    const HTMLProducts = productList.map((product) => {
        return (
        <li key={product.id}>
            <BuyProductCard product={product}/>
        </li>
        )
    })
    
    return (
        <ProductContext.Provider value={{ productList, setProductList, HTMLProducts }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export { ProductContext, ProductProviderWrapper }