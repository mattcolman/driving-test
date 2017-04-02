import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RoadTile from './RoadTile';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100px,
  height: 100px,
`;

class App extends Component {
  // const tileWidth = 100;
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Wrapper>
          <RoadTile south east />
        </Wrapper>
      </div>
    );
  }
}

export default App;
