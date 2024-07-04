import React from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import './card.css';

export default function Card({ icon: Icon, title, features }) {
  return (
    <div className='card'>
      <div className="card__inner">
        <div className="card__icon">{Icon && <Icon />}</div>
        <div className="card__title">{title}</div>
        <div className="card__features">
          {features?.map(feature => (
            <p key={uuid()}>{feature}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string)
};
