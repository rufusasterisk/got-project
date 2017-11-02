import React from 'react';
import PropTypes from 'prop-types';

const CardContainer = () => {

  const cardArrayBuilder = (myArray) => {
    return myArray.map( (houseObject, index) => {
      return (
        <article key={`house-${index}`}>
          <h2>{houseObject.name}</h2>
          <h3>{houseObject.words || ''}</h3>
          <h3>Founded: {houseObject.founded || 'N/A'}</h3>
        </article>
      );
    });
  };

  // Display name, founded, seats, titles, coatOfArms, ancestralWeapons, words

  return (
    <section className={'house-card-container'}>
      {cardArrayBuilder()}
    </section>
  );
};

export default CardContainer;

CardContainer.propTypes = {
  houseArray: PropTypes.array
};
