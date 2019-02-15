import React from 'react';

export default (props) => {
  const { character } = props;
  return <div className="character">{ character.name }</div>;
};
