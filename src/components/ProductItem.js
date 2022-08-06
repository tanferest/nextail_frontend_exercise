import '../styles/ProductItem.scss'

function ProductItem (props) {
    const productImg = `${process.env.PUBLIC_URL}/images/${props.item.code}.jpg`;
    const percnt = props.item.stockout_rate * 100;
    let coverage = '';
    let coverageClass = ''
    if (percnt < 50) {
        coverage = 'Very Low';
        coverageClass = 'red';
    } else {
        coverage = 'Good';
        coverageClass = 'green';
    }

    return (
        <>
        <div className="item__index">{props.index + 1}</div>
        <img className="item__img" src={productImg} alt={`Product ${props.item.code}`}></img>
        <p className="item__code">{props.item.code}</p>
        <h2 className="item__name">{props.item.name}</h2>
        <p className="item__price">{props.item.price}&euro;</p>
        <p className="item__percnt">{percnt}%</p>
        <p className="item__coverage"><span className={`item__coverage--${coverageClass}`}>{coverage}</span> wh coverage</p>
        </>
    )
}

export default ProductItem;