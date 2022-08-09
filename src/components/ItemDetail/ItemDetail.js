import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';

const InputCount = ({onConfirm , stock, initial = 1}) =>{

}

const ButtonCount = ({onConfirm , stock, initial = 1}) =>{
    
}



const ItemDetail = ({id, name,img,category,description,price,stock}) => {
    const[inputType, setInputType] = useState('input')
    const [quantity, setQuantity] = useState(0)

    const ItemCount = inputType === 'input' ? InputCount : ButtonCount

    const handleOnAdd = (quantity) => {
        console.log('agregue al carrito: ',quantity)
        setQuantity(quantity)
    }

    return(
        <article className="CardItem">
            <button onClick ={() => setInputType(inputType === 'input' ? 'button' : 'input')}>

            </button>
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className='id'>
                    Id: {id}
                </p>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    descripcion: {description} 
                </p>
                <p className="Info">
                    precio: {price}
                </p>
            </section>
            <footer className="ItemFooter">
                {/* {inputType === 'button' ? <ButtonCount stock={stock} onConfirm={handleOnAdd} /> : null}
                {inputType === 'input' ? <InputCount stock={stock} onConfirm={handleOnAdd} /> : null} */}
                {/* <ItemCount stock = {stock} onAdd={handleOnAdd} /> */}
                {quantity >0 ? <link to ='/cart'>Ir al carrito</link> : <ItemCount stock={stock} onConfirm ={handleOnAdd} />}
            </footer>
        </article>
    )
}

export default ItemDetail