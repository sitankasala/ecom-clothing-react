import './checkout.styles.scss'
import CheckoutItem from "../checkout-item/checkout-item.component";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";

function CheckoutComponent() {
    const {cartItems: checkoutItems,cartTotal} = useContext(CartContext)
    console.log(checkoutItems)
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">Product</div>
                <div className="header-block">Description</div>
                <div className="header-block">Quantity</div>
                <div className="header-block">Price</div>
                <div className="header-block">Remove</div>
            </div>
            {checkoutItems.map((checkoutItem) => {
                return (
                    <CheckoutItem key={checkoutItem.id} checkoutItem={checkoutItem}/>)
            })}
            <span className="total">Total: ${cartTotal}</span>
        </div>)
}

export default CheckoutComponent