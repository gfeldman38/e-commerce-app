import './Navbar.css'
import Button from '../Button/Button'
import CartWidget from '../../CartWidget/Cartwidget'

const Navbar = () => {
    return (
        <nav className = "navbar">
            <div>
                Ecommerce
            </div>
            <div className='pa'>
                {}
                <Button label = "Smartwatch" color = "blue" handleClick = {() =>console.log("Smartwatch")}/>
                <Button label = "Cellphone" color = "blue" handleClick = {() =>console.log("Cellphone")}/>
                <Button label = "Tablet" color = "blue" handleClick = {() =>console.log("Tablet")}/>
                <Button label = "Ingresar" color = "green" handleClick = {() =>console.log("Ingresar")}/>
                <Button label = "Contacto" color = "red" handleClick = {() =>console.log("Contacto")}/>
                {/* <Button label = "Carrito de compras" color = "pink" handleClick = {() =>console.log("Carrito de compras")}/> */}
            </div>
            <CartWidget/>
        </nav>
    )
}


export default Navbar