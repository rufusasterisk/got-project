import React from 'react';
import PropTypes from 'prop-types';


const HouseCard = (props) => {


  return (
    <article>
      <h2>{props.houseName}</h2>
      <h3>{props.houseWords}</h3>
      <h3>Founded: {props.houseFounded}</h3>
      <dl>
        <dt>Seats:</dt>
        <dd>{props.houseSeats}</dd>
        <dt>Titles:</dt>
        <dd>{props.houseTitles}</dd>
        <dt>Ancestral Weapons:</dt>
        <dd>{props.houseAncestralWeapons}</dd>
        <dt>Coat of Arms:</dt>
        <dd>{props.houseCoatOfArms}</dd>
      </dl>
    </article>
  );

};

HouseCard.propTypes = {
  houseName: PropTypes.string,
  houseWords: PropTypes.string,
  houseFounded: PropTypes.string,
  houseSeats: PropTypes.string,
  houseTitles: PropTypes.string,
  houseAncestralWeapons: PropTypes.string,
  houseCoatOfArms: PropTypes.string
};

export default HouseCard;
