import '../styles/ProductList.scss';
import ProductItem from './ProductItem';

function ProductList (props) {
    const product = props.products.map((item, index)=> {
        return (
            <li className="list__item" key={item.code}>
                <ProductItem item={item} index={index} />
            </li>
        )
    });
    return <ul className="list">
        {product}
    </ul>
};

export default ProductList; 