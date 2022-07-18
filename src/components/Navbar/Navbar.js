import './Navbar.css'

const Navbar = () => {
    return (
        <nav className = "navbar">
            <div>
                Ecommerce
            </div>
            <div>
                <button>Calzado</button>
                <button>Indumentaria</button>
                <button>Accesorios</button>
                <button>Ingresar</button>
                <button>Contacto</button>
                <button>Carrito de compras</button>
            </div>
        </nav>
    )
}


export default Navbar