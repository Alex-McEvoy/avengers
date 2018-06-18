import React, { Component } from 'react';
import './App.css';
import theAvengers from './theAvengers.js';
import SuperHeroes from './SuperHeroes.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      avengers: theAvengers
    };
    console.log(this.avengers)
  }
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1 className="App-title">Avengers</h1>
      </header>
      <div>
        <SuperHeroes superHeroesData={this.state.avengers} />
      </div>
    </div>
    );
  }
}

export default App;
