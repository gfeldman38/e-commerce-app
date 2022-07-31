import Item from "../Item/Item"

const ItemList = ( { products} ) => {

    return (
        <ul>
            {products.map (products => (
            <Item key={products .id} products ={products}/>
            ))}
        </ul>
    )
}

export default ItemList