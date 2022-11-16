import PropTypes from 'prop-types';
import { useState } from 'react';
import CardView from './CardView';
import ListView from './ListView';
import IconSwitch from './IconSwitch';

const propTypes = {
  products: PropTypes.array.isRequired,
};

const Store = ({ products }) => {
  const [icon, setIcon] = useState('view_module');

  const handleSwitch = () => {
    setIcon((prevIcon) =>
      prevIcon === 'view_list' ? 'view_module' : 'view_list'
    );
  };

  return (
    <div className="store">
      <div className="store__icon-wrapper">
        <IconSwitch icon={icon} onSwitch={handleSwitch} />
      </div>
      {icon === 'view_list' ? (
        <CardView products={products} />
      ) : (
        <ListView products={products} />
      )}
    </div>
  );
};

Store.propTypes = propTypes;

export default Store;
