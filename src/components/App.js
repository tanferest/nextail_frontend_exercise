import { useState } from 'react';
import products from '../data/products.json';

import Header from './Header';

const App = () => {
  const [product, setProduct] = useState(products);

  return (
    <>
      <Header></Header>
    </>
  );
};

export default App;
