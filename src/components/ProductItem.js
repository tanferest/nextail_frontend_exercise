function ProductItem (props) {
    return (
        <>
        <div>{props.index}</div>
        <img src="" alt={`Product ${props.item.code}`}></img>
        <p>{props.item.code}</p>
        <h2>{props.item.name}</h2>
        <p>{props.item.price}&euro;</p>
        </>
    )
}

export default ProductItem;