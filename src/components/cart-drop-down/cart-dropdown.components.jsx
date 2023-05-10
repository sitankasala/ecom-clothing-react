import Button from "../button/button.component";
import './cart-dropdown.styles.scss'
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";
import CartItemComponent from "../cart-item/cart-item.component";
import {useNavigate} from "react-router-dom";

function CartDropdown() {
    const {cartItems} = useContext(CartContext)
    const navigate = useNavigate();
    const navHandler = () =>{
        navigate("/checkout")
    }
    return (<div className="cart-dropdown-container">
        <div className="cart-items">
            {cartItems.map((item) => <CartItemComponent key={item.id} cartItem={item}/>)}
        </div>
            <Button onClick={navHandler}>Go to Checkout</Button>
    </div>)
}

export default CartDropdown