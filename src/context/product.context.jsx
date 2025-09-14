import { createContext } from "react";
import { useState } from "react";
import products from "../constants/product-list";
import BuyProductCard from "../components/BuyProductCard";
import AddedProduct from "../components/AddedProduct";

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

    const HTMLAddedProducts = productList.filter((item) => item.quantity !== 0)
            .map((product) => {
                /* Filtra los elemntos, dejando fuera los que tengan quantty = 0. Después crea los componentes AddedProuct que se mostraán */
                return (
                    <li key={product.id}>
                        <AddedProduct product={product}/>
                    </li>
                )
            })

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

    const deleteItem = (id) => {
        /* Cambia el atributo quantity del producto seleccionado a 0, para que no se muestre en la página */
        const newList = productList.map((item) => {
            if (item.id !== id) {
                return item
            };

            item.quantity = 0
            return item;
        })

        setProductList(newList);
    }

    const HTMLTotal = productList.reduce((total, item) => total + item.price * item.quantity, 0)
                    .toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2, // Mínimo de dígitos decimales
      maximumFractionDigits: 2  // Máximo de dígitos decimales
    });
    
    return (
        <ProductContext.Provider value={{ productList, setProductList, addQuantity, substractQuantity, HTMLProducts, HTMLAddedProducts, deleteItem, HTMLTotal }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export { ProductContext, ProductProviderWrapper }