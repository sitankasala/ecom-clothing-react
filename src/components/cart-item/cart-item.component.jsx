import './cart-item.styles.scss'

function CartItemComponent({cartItem}) {
        const {name, quantity, imageUrl, price} = cartItem
    return (
        <div className="cart-item-container">
            <img className="img" src={imageUrl} alt={`${name}`}/>
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price"> {quantity} x ${price}</span>
            </div>
        </div>
    )
}

export default CartItemComponent