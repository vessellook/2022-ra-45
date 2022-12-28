import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
  ratio: PropTypes.number.isRequired,
  color: PropTypes.string,
};

const FixedRatio = ({ children, ratio, color }) => {
  const style = {
    paddingBottom: `${100 * (+ratio)}%`,
    background: color,
  };

  return (
    <div className="fixed-ratio" style={style}>
      <div className="fixed-ratio__inner">{children}</div>
    </div>
  );
};

FixedRatio.propTypes = propTypes;

export default FixedRatio;
