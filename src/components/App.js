import { useState } from 'react';
import data from '../data/products.json';

import Header from './Header';
import ProductList from './ProductList';

const App = () => {
  const [products, setProducts] = useState(data);
  const [hidden, setHidden] = useState('hidden');

  const handleBtn = (id) => {
    const clickedEl = products.find((item) => item.code === parseInt(id));
    setHidden('');
  }

  return (
    <>
      <Header></Header>
      <ProductList products={products} handleBtn={handleBtn} hidden={hidden}></ProductList>
    </>
  );
};

export default App;
