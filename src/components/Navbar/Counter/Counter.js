import { useState } from 'react'
import { useEffect } from 'react'

const Counter = ({show, stock, initial, onAdd}) => {
    // const state = useState (10)
    const [count,quantity, setCount,setQuantity] = useState(0)
    useEffect(() => {
        // console.log ('function callback useEffect')

        // return () => console.log('el componente va a sesmontarse');
    }, [show])

const decrement = () => {
    if(quantity > initial){
        setQuantity(prev => prev - 1)
    }
}

const increment = () => {
    if(quantity < stock) {
    setQuantity(prev => prev + 1)
    }
} 
// console.log('va a renderizar')
return (
        <div>
            <button onClick = {decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick ={()=>onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default Counter