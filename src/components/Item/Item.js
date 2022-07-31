const Item = ({products}) => {

    const handleClick = (description) =>{
        console.log(description)
    }

    return (
    <>
        <li >{products.name}</li>
        <button onClick={handleClick}>Ver detalle</button>
    </>
)
}

export default Item