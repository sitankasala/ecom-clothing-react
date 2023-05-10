import './checkout-item.styles.scss'
import '../checkout/checkout.styles.scss'
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";

function CheckoutItem({checkoutItem}) {
    const {name, quantity, imageUrl, price} = checkoutItem
    const {clearItemFromCart, removeItemFromCart, addItemToCart} = useContext(CartContext)
    const clearItemHandler = () => clearItemFromCart(checkoutItem);
    const removeItemHandler = () => removeItemFromCart(checkoutItem)
    const addItemHandler = () => addItemToCart(checkoutItem)
    return (<div className="checkout-item-container">
        <div className="image-container">
            <img className="img" src={imageUrl} alt={`${name}`}></img>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
                <div className="arrow" onClick={removeItemHandler}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={addItemHandler}>&#10095;</div>
            </span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={clearItemHandler}>
            &#10005;
        </div>
    </div>)
}

export default CheckoutItem