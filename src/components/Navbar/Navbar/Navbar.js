import './Navbar.css'
import CartWidget from '../../CartWidget/Cartwidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className = "navbar">
            <Link to = "/" >
                Ecommerce
                </Link>
            <div className='Categories'>
                <Link to= "/category/celular" className='Option'>celulares</Link>
                <Link to= "/category/tablet" className='Option'>tablet</Link>
                <Link to= "/category/smartwatch" className='Option'>Smart Watch</Link>

            </div>
           
            
            <CartWidget/>
        </nav>
    )
}


export default Navbar