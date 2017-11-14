import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cocktail from './components/Cocktail';

const Item = {
    img: "https://media.monin.com/us/media/catalog/product/_/C/_Classic_Mint_Mojito-1507563995-1.png",
    title: "Classic Mojito Mint",
    author: "Eran Ovadia",
    description: "This is a Classic Mojito Mint with Rum and Mint",
    tags: ["rum", "mint"],
};


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
            <Cocktail item={Item}/>
        </div>
      </div>
    );
  }
}

export default App;
