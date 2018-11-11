import React, { Component } from 'react';

import { cellDim } from '../utility/constants';

class Cell extends Component {
  // TODO: Why doesn't this work with a PureComponent?
  shouldComponentUpdate({ isActive: newActive, num: newNum, scale: newScale }) {
    const { isActive, num, scale } = this.props;
    return (
      isActive !== newActive ||
      num !== newNum ||
      scale.domain()[0] !== newScale.domain()[0]
    );
  }

  render() {
    const {
      blank,
      home,
      visitors,
      num,
      scale,
      isActive,
      handleMouseOver,
      handleMouseOut
    } = this.props;
    const transform = `translate(${cellDim * home}px, ${cellDim * visitors}px)`;

    return (
      <g style={{ transform }}>
        <rect
          className="cell"
          rx="3"
          ry="3"
          style={{ fill: blank ? '#f0f0f0' : scale(Math.log(num)) }}
          strokeWidth="2"
          stroke={isActive ? 'black' : 'none'}
          width="24"
          height="24"
          onMouseOver={() => blank || handleMouseOver(visitors, home)}
          onMouseOut={() => blank || handleMouseOut()}
        />
      </g>
    );
  }
}
const Grid = ({
  scale,
  data,
  activeHome,
  activeVisitors,
  handleMouseOut,
  handleMouseOver
}) => {
  const rects = [];
  const props = { scale, handleMouseOut, handleMouseOver };
  for (let i = 0; i < 26; i++) {
    for (let j = 0; j < 26; j++) {
      const isActive = activeVisitors === i && activeHome === j;
      rects.push(
        <Cell
          blank={data[i][j] === 0}
          key={`${i} -${j} `}
          {...props}
          visitors={i}
          home={j}
          num={data[i][j]}
          isActive={isActive}
        />
      );
    }
  }
  return rects;
};

export default Grid;
