import React from 'react';
import PropTypes from 'prop-types';
import ShopItem, {propTypes as shopItemPropTypes} from './ShopItem';

const propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    ...shopItemPropTypes,
    id: PropTypes.number.isRequired,
  })).isRequired,
};

const ListView = ({ products }) => {
  return (
    <div className='list-view'>
      {products.map((product) => (
        <ShopItem key={product.id} {...product} />
      ))}
    </div>
  );
};

ListView.propTypes = propTypes;

export default ListView;
