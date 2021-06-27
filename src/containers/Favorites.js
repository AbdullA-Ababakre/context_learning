import React from 'react';
// import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { ProductsContext } from '../context/products-context';
import FavoriteItem from '../components/Favorites/FavoriteItem';
import './Products.css';

const Favorites = props => {

  const productsCtx = useContext(ProductsContext);

  const favoriteProducts = productsCtx.products.filter((p) => { return p.isFavorite });

  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map(prod => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;