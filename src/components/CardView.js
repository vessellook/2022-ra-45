import React from 'react';
import PropTypes from 'prop-types';
import ShopCard, {propTypes as shopCardPropTypes} from './ShopCard';

const propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    ...shopCardPropTypes,
    id: PropTypes.number.isRequired,
  })).isRequired,
};

const CardView = ({ products }) => {
  return (
    <div className='card-view'>
      {products.map((product) => (
        <ShopCard key={product.id} {...product} />
      ))}
    </div>
  );
};

CardView.propTypes = propTypes;

export default CardView;
