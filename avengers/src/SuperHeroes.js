import React from "react";
import SuperHero from "./SuperHero";

const SuperHeroes = props => {
  return (
    <div>
      {props.superHeroesData.map(superhero => (
        <SuperHero key={superhero.id} superhero={superhero} />
      ))}
    </div>
  );
};

export default SuperHeroes;
