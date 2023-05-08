import {ReactComponent as CartIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import {useContext} from "react";
import {CartContext} from "../../contexts/card.context";

function CartIconComponent() {
    const {isCartOpen,setIsCartOpen} = useContext(CartContext)
    return (
        <div className="cart-icon-container" onClick={() => setIsCartOpen(!isCartOpen)}>
        <CartIcon className="shopping-icon"/>
        <span className="item-count">0</span>
    </div>)
}

export default CartIconComponent