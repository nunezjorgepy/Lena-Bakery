import { Link } from 'react-router'
import './HeaderComponent.css'

function HeaderComponent() {
    return (
        <header>
            <nav>
                <ul className='header-link-list'>
                    <li className='header-link'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='header-link'>
                        <Link to="/our-products">Our Products</Link>
                    </li>
                    <li className='header-link'>
                        <Link to="/place-order">Place Order</Link>
                    </li>
                    <li className='header-link'>
                        <Link to="/log-in">Log In</Link>
                    </li>
                    <li className='header-link'>
                        <Link to="/register">Register</Link>
                    </li>

                    {/* TODO: Admin Routes. Más adelante, proteger. */}
                    <li className='header-link'>
                        <Link to="/admin/add-product">Add Product</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderComponent