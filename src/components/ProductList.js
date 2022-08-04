import ProductItem from './ProductItem';

function ProductList (props) {
    const product = props.products.map((item, index)=> {
        return (
            <li key={item.code}>
                <ProductItem item={item} index={index} />
            </li>
        )
    });
    return <ul>
        {product}
    </ul>
};

export default ProductList; 