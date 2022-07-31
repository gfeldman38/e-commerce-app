import { useEffect } from "react"
import { useState } from "react"
import { getProduct } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

const ItemDetailContainer = ({greeting, setShow, show}) => {
    const[product , setProduct] = useState([])

    useEffect(() => {
        getProduct().then(response => {
            setProduct(response);
        })
    },[])

     

    return (
        <>
        <h1>{greeting}</h1>
        {/* <button onClick={() => setShow(!show)}>show/hide</button> */}
        <ItemList product ={product}/>
        <li>{product.name}</li>
        </>
    )
}

export default ItemDetailContainer