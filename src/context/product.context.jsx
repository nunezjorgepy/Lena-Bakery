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
    });

    const addQuantity = (id) => {
        /* Suma la cantidad de productos a comprar */
        const newList = productList.map((item) => {
            if (item.id !== id) {
                return item
            }
            item.quantity++
            return item
        })

        setProductList(newList);
    }

    const substractQuantity = (id) => {
        /* Resta la cantidad de productos a comprar */
        const newList = productList.map((item) => {
            if (item.id !== id || item.quantity === 0) {
                return item
            }
            item.quantity--;
            return item
        })

        setProductList(newList);
    }
    
    return (
        <ProductContext.Provider value={{ productList, setProductList, addQuantity, substractQuantity, HTMLProducts }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export { ProductContext, ProductProviderWrapper }