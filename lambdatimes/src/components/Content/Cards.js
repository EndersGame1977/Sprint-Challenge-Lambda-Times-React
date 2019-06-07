import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {

  const { cards } = props;
  return (
    <div className="cards-container">

      {cards.map(card => (
        <Card card={card} />
      ))}

    </div>
  );
}

Cards.propTypes = {
  cards: PropTypes.string.isRequired,
}

export default Cards;