import {render, screen} from '@testing-library/react';
import App from './App';
import {MemoryRouter} from "react-router-dom";
import {UserProvider} from "./contexts/users.context.components";
import {ProductProvider} from "./contexts/products.context";
import {CartProvider} from "./contexts/cart.context";

test('renders learn react link', () => {
    render(<MemoryRouter initialEntries={["/"]}>
        <UserProvider>
            <ProductProvider>
                <CartProvider><App/>
                </CartProvider>
            </ProductProvider>
        </UserProvider>
    </MemoryRouter>);
});
