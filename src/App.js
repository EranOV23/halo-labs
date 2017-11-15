import React, { Component } from 'react';
import logo from './logo.svg';
import Cocktail from './components/Cocktail';
import styled from 'styled-components';

import './App.css';
import CocktailsList from './data/cocktailsList';


const HeadertWrapper = styled.section`
  background-color: palevioletred;
  height: 150px;
  padding: 20px;
  color: white;
`;

const ContentWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: baseline;
`;


class App extends Component {
  render() {
    return (
      <div className="App">
        <HeadertWrapper>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React with Styled-Components & Storybook</h1>
        </HeadertWrapper>
        <ContentWrapper>
            <Cocktail item={CocktailsList[0]}/>
            <Cocktail recommended item={CocktailsList[1]}/>
            <Cocktail item={CocktailsList[2]}/>
        </ContentWrapper>
      </div>
    );
  }
}

export default App;
