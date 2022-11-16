import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
};

const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <span className="icon-switch material-icons" onClick={onSwitch}>
      {icon}
    </span>
  );
};

IconSwitch.propTypes = propTypes;

export default IconSwitch;
