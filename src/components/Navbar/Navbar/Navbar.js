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
                <Button label = "Calzado" color = "blue" handleClick = {() =>console.log("Calzado")}/>
                <Button label = "Indumentaria" color = "yellow" handleClick = {() =>console.log("Indumentaria")}/>
                <Button label = "Accesorios" color = "red" handleClick = {() =>console.log("Accesorios")}/>
                <Button label = "Ingresar" color = "green" handleClick = {() =>console.log("Ingresar")}/>
                <Button label = "Contacto" color = "orange" handleClick = {() =>console.log("Contacto")}/>
                <Button label = "Carrito de compras" color = "pink" handleClick = {() =>console.log("Carrito de compras")}/>
            </div>
            <CartWidget/>
        </nav>
    )
}


export default Navbar