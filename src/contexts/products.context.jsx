import {createContext, useEffect, useState} from "react";
import {getCategoriesAndDocuments} from "../utils/firebase/firebase.utils";

export const ProductsContext = createContext({
    products: []
});

export const ProductProvider = ({children}) => {
    const [categoryMap, setCategoryMap] = useState({})
    const value = {categoryMap}
    useEffect(()=>{
        const categoryMap = async () => {
            const categoryMap = await getCategoriesAndDocuments()
            setCategoryMap(categoryMap)
        }
        return categoryMap
    },[])
    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
};