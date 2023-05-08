import {createContext, useState} from "react";
import PRODUCTS from '../components/shop/shop-data.json'

export const ProductsContext = createContext({
    products: []
});

export const ProductProvider = ({children}) => {
    const [products] = useState(PRODUCTS)
    const value = {products}
    console.log(value)
    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
};