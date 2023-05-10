import {Fragment, useContext} from 'react';
import {Link, Outlet} from 'react-router-dom';

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';

import './navigation.styles.scss';
import {UserContext} from "../../contexts/users.context.components";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.components";
import CartDropdown from "../../components/cart-drop-down/cart-dropdown.components";
import {CartContext} from "../../contexts/cart.context";

const Navigation = () => {
    const {currentUser} = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)
    const signOutHandler = async () => {
        await signOutUser();
    }
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo'/>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (<Link className='nav-link' onClick={signOutHandler} to="/">SIGNOUT</Link>) : (
                            <Link className='nav-link' to='/auth'>
                                SIGN IN
                            </Link>)
                    }
                    <CartIcon/>
                </div>
                {isCartOpen && <CartDropdown/>}
            </div>
            <Outlet/>
        </Fragment>
    );
};

export default Navigation;
