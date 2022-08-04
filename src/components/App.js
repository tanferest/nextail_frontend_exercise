import { useState } from 'react';
import data from '../data/products.json';

import Header from './Header';
import ProductList from './ProductList';

const App = () => {
  const [products, setProducts] = useState(data);

  return (
    <>
      <Header></Header>
      <ProductList products={products}></ProductList>
    </>
  );
};

export default App;
