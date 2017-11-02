import React from 'react';
import PropTypes from 'prop-types';


const HouseCard = (props) => {


  return (
    <article className="Card">
      <h2>{props.houseName}</h2>
      <h3>{props.houseWords}</h3>
      <h3>Founded: {props.houseFounded}</h3>
      <h4>Seats: {props.houseSeats}</h4>
      <h4>Titles: {props.houseTitles}</h4>
      <h4>Ancestral Weapons: {props.houseAncestralWeapons}</h4>
      <h4>Coat of Arms: {props.houseCoatOfArms}</h4>
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

{ /* <dl>
  <dt>Seats:</dt>
  <dd>{props.houseSeats}</dd>
  <dt>Titles:</dt>
  <dd>{props.houseTitles}</dd>
  <dt>Ancestral Weapons:</dt>
  <dd>{props.houseAncestralWeapons}</dd>
  <dt>Coat of Arms:</dt>
  <dd>{props.houseCoatOfArms}</dd>
</dl> */ }
