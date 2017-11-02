import React from 'react';
import PropTypes from 'prop-types';
import HouseCard from '../HouseCard/HouseCard';

const CardContainer = (props) => {

  const cardArrayBuilder = (myArray) => {
    return myArray.map( (houseObject, index) => {
      return (
        <HouseCard
          key={`house-card-${index}`}
          houseName={houseObject.name}
          houseWords={houseObject.words}
          houseFounded={houseObject.founded || 'N/A'}
          houseSeats={(houseObject.seats).join(', ')}
          houseTitles={(houseObject.titles).join(', ')}
          houseAncestralWeapons={houseObject.ancestralWeapons}
          houseCoatOfArms={houseObject.coatOfArms}
        />
      );
    });
  };

  // Display name, words, founded, seats, titles, ancestralWeapons, coatOfArms

  return (
    <section className={'house-card-container'}>
      {cardArrayBuilder(props.?)}
    </section>
  );
};

export default CardContainer;

CardContainer.propTypes = {
  houseArray: PropTypes.array
};
