import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  const { headline, img, author } = props.card;
  console.log(author);
  return (
    <div className="card">
      <div className="headline">
        {headline}
      </div>
      <div className="author">
        <div className="img-container">
          <img src={img} />
        </div>
        <span>By {author}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  headline: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  card: PropTypes.string.isRequired
}

export default Card;
