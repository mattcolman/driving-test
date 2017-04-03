import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
import StyledRoadTile from './StyledRoadTile';

const grid = [
  '- - X - X',
  '- - X X -',
  '- - X - -',
  '- X X - -',
  'X - X - -',
];

const Grid = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
`;

const Terrain = styled.div`
  width: 100px;
  height: 100px;
  background: white;
`;

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Grid>
          {grid.map(row => (
            <Row>
              {row.split(' ').map(tile => (
                (tile === 'X') ? (
                  <StyledRoadTile
                    south
                    east
                  />
                ) : (
                  <Terrain />
                )
              ))}
            </Row>
          ))}
        </Grid>
      </div>
    );
  }
}

export default App;
