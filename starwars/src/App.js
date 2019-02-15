import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ next: data.next, previous: data.previous, starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    const { starwarsChars, previous, next } = this.state;
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList characters={starwarsChars} />
        <button onClick={() => this.getCharacters(previous)} disabled={previous === null}>Previous</button>
        <button onClick={() => this.getCharacters(next)} disabled={next === null}>Next</button>
      </div>
    );
  }
}

export default App;
