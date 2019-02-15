import React from 'react';
import Character from './Character';
import './StarWars.css';

export default (props) => (
  <div className="character-list">
    { props.characters.map((c, i) => <Character key={i} character={c} />) }
  </div>
);
