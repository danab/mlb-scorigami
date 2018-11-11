import React from 'react';
import {
  cellDim,
  marginLeft,
  marginTop,
  width,
  height
} from '../utility/constants';

const AxisText = ({ val, isXAxis, isActive }) => {
  const xTransform = `translate(${val * cellDim + cellDim / 2}px, ${cellDim /
    2}px)`;
  const yTransform = `translate(${cellDim / 2}px, ${val * cellDim +
    cellDim / 2}px)`;

  return (
    <text
      style={{
        fontWeight: isActive ? 'bold' : 'normal',
        transform: isXAxis ? xTransform : yTransform,
        opacity: isActive ? 1 : 0.5
      }}
    >
      {val === 25 ? '25+' : val}
    </text>
  );
};

const Axis = ({ activeVisitors, activeHome, isXAxis }) => {
  const xTransform = `translate(${cellDim + marginLeft}px, ${marginTop}px)`;
  const yTransform = `translate(${marginLeft}px, ${cellDim + marginTop}px)`;
  // 26 values to iterate over
  return (
    <g style={{ transform: isXAxis ? xTransform : yTransform }}>
      {isXAxis ? (
        <text x={width / 2} y={-10}>
          {' '}
          Home Team{' '}
        </text>
      ) : (
        <text
          y={height / 2}
          x={-10}
          transform={`rotate(-90, ${-10}, ${height / 2})`}
        >
          Visiting Team{' '}
        </text>
      )}
      {Array.from(Array(26), (d, i) => (
        <AxisText
          key={i}
          val={i}
          isActive={isXAxis ? i === activeHome : i === activeVisitors}
          isXAxis={isXAxis}
        />
      ))}
    </g>
  );
};

export default Axis;
