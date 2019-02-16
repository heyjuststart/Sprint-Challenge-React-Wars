import React from 'react';
import './StarWars.css';

export default (props) => {
  const { character } = props;
  return (
    <div className="character">
      <div className="character-name">{ character.name }</div>
      <div className="details">
        <table>
          <tbody>
            <tr>
              <td className="label">Birth Year</td>
              <td className="birth-year">{ character.birth_year }</td>
            </tr>
            <tr>
              <td className="label">Gender</td>
              <td className="gender">{ character.gender }</td>
            </tr>
            <tr>
              <td className="label">Eye Color</td>
              <td className="eye-color">{ character.eye_color }</td>
            </tr>
            <tr>
              <td className="label">Hair Color</td>
              <td className="hair-color">{ character.hair_color }</td>
            </tr>
            <tr>
              <td className="label">Skin Color</td>
              <td className="skin-color">{ character.skin_color }</td>
            </tr>
            <tr>
              <td className="label">Height</td>
              <td className="height">{ character.height }</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
