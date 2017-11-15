import React, { Component } from 'react';
import logo from './logo.svg';
import Cocktail from './components/Cocktail';
import styled from 'styled-components';

import CocktailsList from './data/cocktailsList';

const AppWrapper = styled.section`
  text-align: center;
`;

const HeaderWrapper = styled.section`
  background-color: palevioletred;
  height: 150px;
  padding: 20px;
  color: white;
`;

const AppLogo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
`;

const AppTitle = styled.h1`
  font-size: 1.5em;
`;

const ContentWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: baseline;
  height: 500px;
`;


class App extends Component {
  render() {
    return (
      <AppWrapper>
        <HeaderWrapper>
          <AppLogo src={logo} alt="logo"></AppLogo>
          <AppTitle>Welcome to React with Styled-Components & Storybook</AppTitle>
        </HeaderWrapper>
        <ContentWrapper>
            <Cocktail item={CocktailsList[0]}/>
            <Cocktail recommended item={CocktailsList[1]}/>
            <Cocktail item={CocktailsList[2]}/>
        </ContentWrapper>
      </AppWrapper>
    );
  }
}

export default App;
