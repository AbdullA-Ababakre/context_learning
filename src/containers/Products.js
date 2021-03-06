import React, { useContext } from 'react';
// import { useSelector } from 'react-redux';
import { ProductsContext } from '../context/products-context'

import ProductItem from '../components/Products/ProductItem';
import './Products.css';

const Products = props => {
  // const productList = useSelector(state => state.shop.products);
  const productList = useContext(ProductsContext).products;
  console.log("products111", productList);

  return (
    <ul className="products-list">
      {productList.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );

};

export default Products;
