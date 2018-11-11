import React from 'react';

import { cellDim } from '../utility/constants';

const tooltipHeight = 65;
const tooltipWidth = 120;

const TwentyFivePlus = () => (
  <span>
    25<em style={{ fontSize: '12px', verticalAlign: 'super' }}>+</em>
  </span>
);
const Tooltip = ({ visitors, home, num }) => {
  const style = {
    height: `${tooltipHeight}px`,
    width: `${tooltipWidth}px`,
    textAlign: 'center',
    pointerEvents: 'none',
    background: 'black',
    color: 'white',
    position: 'absolute',
    padding: '10px',
    borderRadius: '3px'
  };
  const position =
    home > 20
      ? {
          top: `${visitors * cellDim + 2 * cellDim - tooltipHeight + 2}px`,
          left: `${home * cellDim + 2 * cellDim - tooltipWidth + 2}px`
        }
      : {
          top: `${visitors * cellDim + 2 * cellDim - tooltipHeight + 2}px`,
          left: `${home * cellDim + 3 * cellDim - 2}px`
        };
  return (
    <div className="tooltip" style={{ ...style, ...position }}>
      <h3 style={{ marginBottom: 0 }}>
        {visitors === 25 ? <TwentyFivePlus /> : visitors} –{' '}
        {home === 25 ? <TwentyFivePlus /> : home}
      </h3>
      <p style={{ marginBottom: '5px' }}>
        {num} {num === 1 ? 'game' : 'games'}
      </p>
    </div>
  );
};

export default Tooltip;
