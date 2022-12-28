import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  motto: PropTypes.string,
};

const Hero = ({motto}) => {
  return (
    <div className="hero">
      <div className="hero__title">Neto Social</div>
      <div className="hero__motto">{motto}</div>
    </div>
  );
};

Hero.propTypes = propTypes;

export default Hero;
