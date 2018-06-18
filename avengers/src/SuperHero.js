import React from "react";
import PropTypes from "prop-types";

const SuperHero = props => {
  return <div>
      Name: {props.superhero.name}<br />
      Super Power: {props.superhero.superPower}
      <br />
      <br />
      </div>;
};

SuperHero.propTypes = {
  superhero: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })
};

export default SuperHero;
