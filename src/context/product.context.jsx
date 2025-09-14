import { createContext } from "react";
import { useState } from "react";
import products from "../constants/product-list";
import BuyProductCard from "../components/BuyProductCard";
import AddedProduct from "../components/AddedProduct";

const ProductContext = createContext();

function ProductProviderWrapper(props) {
    const [productList, setProductList] = useState(products);
    const [message, setMessage] = useState('')



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



    const setQuantity = (symbol, item) => {
        /* Modifica la cantidad de productos a comprar.
        Si tiene que sumar, suma independientemente de la cantidad actual;
        Si tiene restar, lo hace sólo si la cantidad es mayor que 0;
        Si tiene que eliminar el producto, asigna el valor 0;
        Dadas las funciones de esta forma, la lista de compras muestra o deja de mostrar los productos según la cantidad sea mayor a a 0 o no, respectivamente. */
        const newQuantity = symbol === 'plus' ? item.quantity++ :
                            symbol === 'zero' ? item.quantity = 0 :
                            item.quantity === 0 ? 0 :
                            item.quantity--;
    }



    const changeQuantity = (symbol, id) => {
        /* Modifica la cantidad comprada del producto seleccionado y setea la lista de productos a mostrar en la lista a comprar. Usa la función setQuantity para modificarlo. */
        const newList = productList.map (item => {
            if (item.id !== id) {
                return item
            }
            setQuantity(symbol, item)
            return item
        })



        setProductList(newList);
        HTMLMessage();
    }



    const HTMLTotal = productList.reduce((total, item) => total + item.price * item.quantity, 0)
                    .toLocaleString('es-AR', {
                        style: 'currency',
                        currency: 'ARS',
                        minimumFractionDigits: 2, // Mínimo de dígitos decimales
                        maximumFractionDigits: 2  // Máximo de dígitos decimales
    });



    const HTMLMessage = () => {
      /* Genera el mensaje que se enviará por WatsApp. */
        let msg = '';
        productList.filter(item => item.quantity !== 0)
                    .map(item => msg += ` - *${item.quantity} ${item.name}*`);
        setMessage(msg)
    }
    
    return (
        <ProductContext.Provider value={{ productList, setProductList,  HTMLProducts, HTMLAddedProducts, HTMLTotal, message, changeQuantity }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export { ProductContext, ProductProviderWrapper }