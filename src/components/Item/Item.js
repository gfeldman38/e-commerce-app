const Item = ({products}) => {
    return ([
        <li key ={products.id}>{products.name}</li>,
        <p key = {products.id}>{products.price}</p>,
        <p key = {products.id}>{products.category}</p>,
        <p key = {products.id}>{products.img}</p>,
        <p key = {products.id}>{products.stock}</p>,
        <p key = {products.id}>{products.description}</p>,
        
        
        
    ])
}

export default Item