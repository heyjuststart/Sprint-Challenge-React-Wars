import React from 'react';
import Character from './Character';

export default (props) => (
  <div className="character-list">
    { props.characters.map(c => <Character key={c.id} character={c} />) }
  </div>
);
