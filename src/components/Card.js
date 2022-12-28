import React from 'react';
import PropTypes from 'prop-types';
import FixedRatio from './FixedRatio';
import classNames from 'classnames';

const propTypes = {
  img: PropTypes.string,
  ratio: PropTypes.number,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

const Card = ({ img, ratio, title, description }) => {
  let imageElement = img && (
    <FixedRatio ratio={ratio} color="#ccc">
      <img className="card__image" src={img} alt={title} />
    </FixedRatio>
  );

  return (
    <div className={classNames('card', { 'card_with-image': !!img })}>
      {imageElement}
      <div className="card__body">
        <div className="card__title">{title}</div>
        <div className="card__description">{description}</div>
      </div>
    </div>
  );
};

Card.propTypes = propTypes;

export default Card;
