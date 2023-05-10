import {createContext, useEffect, useState} from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {
    },
    cartItems: [],
    addItemToCart: () => {
    },
    removeItemFromCart: () => {
    },
    clearItemFromCart: () => {
    },
    cartTotal:0
});

const addCartItems = (cartItems, productToAdd) => {
    const isExistingItem = cartItems.find((cartItem) =>
        cartItem.id === productToAdd.id
    )
    if (isExistingItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {
            ...cartItem,
            quantity: cartItem.quantity + 1
        } : cartItem)
    }

    return [...cartItems, {...productToAdd, quantity: 1}]
}

const removeCartItems = (cartItems, cartItemToRemove) => {
    const existingItem = cartItems.find((cartItem) =>
        cartItem.id === cartItemToRemove.id
    )

    if (existingItem.quantity === 1) {
        return cartItems.filter((item) => item.id !== existingItem.id)
    }

    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
    )
}
const clearCartItems = (cartItems, cartItemToClear) => {
    return cartItems.filter((item) => item.id !== cartItemToClear.id)
}
export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        const cartTotal = cartItems.reduce((total,cartItem) => total+(cartItem.quantity * cartItem.price),0);
        setCartTotal(cartTotal)
    },[cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItems(cartItems, productToAdd))
    }
    const removeItemFromCart = (cardItemToRemove) => {
        setCartItems(removeCartItems(cartItems, cardItemToRemove))
    }

    const clearItemFromCart = (cardItemToRemove) => {
        setCartItems(clearCartItems(cartItems, cardItemToRemove))
    }
    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, removeItemFromCart, clearItemFromCart,cartTotal}
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};