import { useEffect } from "react"
import { useState } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({greeting, setShow, show}) => {
    const[products , setProducts] = useState([])

//     useEffect(() => {
//         getProducts().then(response => {
//             setProducts(response);
//         }).catch(Error =>{
//             console.log(Error)
//         }).finally (() => {
//             setLoading (false)
//         })
//     },[])

//     if(loading) {
//         return <h1>Cargando productos...</h1>
//     }

    

    return (
        <>
        <h1>{greeting}</h1>
        <ItemList products ={products}/>
        </>
    )
}

export default ItemListContainer