import React, { Component } from 'react';
import { get } from 'lodash';
import styled from 'styled-components';
import { TimelineMax } from 'gsap';
import './App.css';
import StyledRoadTile from './StyledRoadTile';
import Car from './Car3';

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
  return get(grid, `[${i-1}][${j}]`) === 'X' || (
    i === 0 &&
    getSouth(i, j) &&
    !getWest(i, j) &&
    !getEast(i, j)
  );
}

function getEast(i, j) {
  return get(grid, `[${i}][${j+1}]`) === 'X' || (
    j === grid[i].length - 1 &&
    getWest(i, j) &&
    !getNorth(i, j) &&
    !getSouth(i, j)
  );
}

function getSouth(i, j) {
  return get(grid, `[${i+1}][${j}]`) === 'X' || (
    i === grid.length - 1 &&
    getNorth(i, j) &&
    !getWest(i, j) &&
    !getEast(i, j)
  );
}

function getWest(i, j) {
  return get(grid, `[${i}][${j-1}]`) === 'X' || (
    j === 0 &&
    getEast(i, j) &&
    !getNorth(i, j) &&
    !getSouth(i, j)
  );
}

const BlueCar = styled(Car)`
  position: absolute;
  color: blue;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
`;

class App extends Component {

  componentDidMount() {
    const tl = new TimelineMax();
    tl.to(this.car, 1, {x: 200});
  }

  render() {
    return (
      <div className="App">
        <BlueCar
          onRef={ref => this.car = ref}
          rightBlinker
        />
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
