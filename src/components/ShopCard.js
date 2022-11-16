import React from 'react';
import PropTypes from 'prop-types';
import AddToCart from './AddToCart';

export const propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

const ShopCard = ({ name, price, color, img }) => {
  return (
    <div className="shop-card">
      <img className="shop-card__img" src={img} alt={name} />
      <div className="shop-card__inner">
        <div className="shop-card__name">{name}</div>
        <div className="shop-card__color">{color}</div>
        <div className="shop-card__below">
          <span className="shop-card__price">
            $<>{price}</>
          </span>
          <div className="shop-card__button">
            <AddToCart />
          </div>
        </div>
      </div>
    </div>
  );
};

ShopCard.propTypes = propTypes;

export default ShopCard;
