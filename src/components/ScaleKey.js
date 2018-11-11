import React, { Component } from 'react';
import { scaleLinear } from 'd3';

import { cellDim, marginLeft, width } from '../utility/constants';

export default class ScaleKey extends Component {
  componentDidMount() {
    this.updateScale();
  }

  shouldComponentUpdate(newProps) {
    const { extrema } = this.props;
    return extrema[1] !== newProps.extrema[1];
  }

  componentDidUpdate() {
    this.updateScale();
  }

  updateScale() {
    const { scale, extrema } = this.props;
    const divisions = width;
    const scaleDx = extrema[1] / divisions;
    const dx = width / divisions;
    const ctx = this.ref.getContext('2d');
    ctx.clearRect(0, 0, width, 30);
    let current = 0;
    while (current < divisions) {
      ctx.fillStyle = scale(current * scaleDx);
      ctx.fillRect(current * dx, 0, dx, 10);
      current += 1;
    }
  }

  render() {
    const { extrema } = this.props;
    const max = Math.round(Math.exp(extrema[1]));
    const vals = [1, 2, 3, 5, 10, 20, 50, 100, 200, 500, 1000, 2000];
    const scale = scaleLinear()
      .domain(extrema)
      .range([0, width]);

    return (
      <div
        style={{
          position: 'relative',
          marginLeft: `${marginLeft + cellDim}px`,
          marginTop: '10px'
        }}
      >
        <canvas
          ref={ref => {
            this.ref = ref;
          }}
          width={width}
          height={10}
        />
        <div style={{ height: '30px' }}>
          {vals.map(val => {
            if (val < max / 2) {
              return (
                <div
                  className="axis-tick"
                  key={val}
                  style={{ left: `${scale(Math.log(val))}px` }}
                >
                  {val}
                </div>
              );
            }
            return false;
          })}

          <div
            className="axis-tick"
            key={max}
            style={{ left: `${scale(Math.log(max))}px` }}
          >
            {max}
          </div>
        </div>
      </div>
    );
  }
}
