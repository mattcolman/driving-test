import React from 'react';

const defaultProps = {
  north: false,
  east: false,
  south: false,
  west: false,
};

function RoadTile({
  north,
  east,
  south,
  west,
}) {
  const stroke = "white";
  const strokeWidth = 10;
  const halfStrokeWidth = strokeWidth / 2;
  const w = 200; // width
  const hw = w / 2; // halfWidth
  const hwp = hw + halfStrokeWidth; // halfWidthPlus
  const hwm = hw - halfStrokeWidth; // halfWidthMinus
  return (
    <svg viewBox="0 0 200 200">
      <rect x="0" height={w} y="0" width={w} style={{fill: "grey"}}/>
      {north && (
        <path d={`M${hw} 0 L${hw} ${hwp}`} stroke={stroke} strokeWidth={strokeWidth} />
      )}
      {east && (
        <path d={`M0 ${hw} L${hwp} ${hw}`} stroke={stroke} strokeWidth={strokeWidth} />
      )}
      {south && (
        <path d={`M${hw} ${hwm} L${hw} ${w}`} stroke={stroke} strokeWidth={strokeWidth} />
      )}
      {west && (
        <path d={`M${hwm} ${hw} L${w} ${hw}`} stroke={stroke} strokeWidth={strokeWidth} />
      )}
    </svg>
  );
}

RoadTile.defaultProps = defaultProps;
export default RoadTile;
