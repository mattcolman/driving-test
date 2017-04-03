import React from 'react';
import styled from 'styled-components';
import RoadTile from './RoadTile';

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  background: grey;
`;

export default function StyledRoadTile(props) {
  return (
    <Wrapper>
      <RoadTile {...props} />
    </Wrapper>
  )
}

