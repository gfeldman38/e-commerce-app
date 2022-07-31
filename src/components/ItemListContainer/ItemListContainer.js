import { useEffect } from "react"
import { useState } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({greeting, setShow, show}) => {
    const[products , setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response);
        })
    },[])

     

    return (
        <>
        <h1>{greeting}</h1>
        {/* <button onClick={() => setShow(!show)}>show/hide</button> */}
        <ItemList products ={products}/>
        </>
    )
}

export default ItemListContainer