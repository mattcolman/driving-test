import React, { Component } from 'react';
import { get } from 'lodash';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
import StyledRoadTile from './StyledRoadTile';

const grid = [
  '- - - - X',
  '- - X X X',
  '- - X - -',
  '- - X X X',
  'X X X - -',
].map(row => row.split(' '));

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

function getNorth(i, j) {
  return get(grid, `[${i-1}][${j}]`) === 'X';
}

function getEast(i, j) {
  return get(grid, `[${i}][${j+1}]`) === 'X';
}

function getSouth(i, j) {
  return get(grid, `[${i+1}][${j}]`) === 'X';
}

function getWest(i, j) {
  return get(grid, `[${i}][${j-1}]`) === 'X';
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <Grid>
          {grid.map((row, i) => (
            <Row>
              {row.map((tile, j) => (
                (tile === 'X') ? (
                  <StyledRoadTile
                    north={getNorth(i, j)}
                    east={getEast(i, j)}
                    south={getSouth(i, j)}
                    west={getWest(i, j)}
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
