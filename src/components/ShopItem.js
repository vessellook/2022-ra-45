import React from 'react';
import PropTypes from 'prop-types';
import AddToCart from './AddToCart';

export const propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

const ShopItem = ({ name, price, color, img }) => {
  return (
    <div className="shop-item">
      <img className="shop-item__img" src={img} alt={name} />
      <div className="shop-item__name">{name}</div>
      <div className="shop-item__color">{color}</div>
      <div className="shop-item__price">
        $<>{price}</>
      </div>
      <div className="shop-item__button">
        <AddToCart />
      </div>
    </div>
  );
};

ShopItem.propTypes = propTypes;

export default ShopItem;
