import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  color: PropTypes.string.isRequired,
  mine: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
};

const defaultProps = {
  mine: false,
};

const Message = ({ color, content, mine }) => {
  const style = {
    backgroundColor: color,
  };

  const className = classNames('message', { message_mine: mine });

  return (
    <div className={className} style={style}>
      {content}
    </div>
  );
};

Message.propTypes = propTypes;
Message.defaultProps = defaultProps;

export default Message;
