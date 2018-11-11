import React, { Component } from 'react';
import { scaleSequential, interpolateSpectral } from 'd3';

import Axis from './components/Axis';
import Grid from './components/Grid';
import YearPicker from './components/YearPicker';
import Tooltip from './components/Tooltip';
import ScaleKey from './components/ScaleKey';
import Header from './components/Header';
import About from './components/About';
import dataStore from './data/dataStore.json';
import getDataRange from './utility/getDataRange';
import {
  cellDim,
  marginLeft,
  marginTop,
  width,
  height,
  seasonMax,
  rangeMax
} from './utility/constants';

class App extends Component {
  state = {
    year: 2017,
    yearType: 'range',
    startYear: 1871,
    endYear: 2017,
    activeHome: null,
    activeVisitors: null
  };

  handleMouseOver = (activeVisitors, activeHome) => {
    clearTimeout(this.timeout);
    this.setState({ activeVisitors, activeHome });
  };

  handleMouseOut = () => {
    this.timeout = setTimeout(() => {
      this.setState({ activeVisitors: null, activeHome: null });
    }, 10);
  };

  handleInputChange = val => {
    const { yearType } = this.state;
    if (yearType === 'single') {
      this.setState({ year: val });
    } else {
      this.setState({ startYear: val[0], endYear: val[1] });
    }
  };

  getData = () => {
    const { yearType, year, startYear, endYear } = this.state;
    if (yearType === 'single') {
      return dataStore[year];
    }
    return getDataRange(startYear, endYear);
  };

  getExtrema = () => {
    const { yearType } = this.state;
    if (yearType === 'single') {
      return [Math.log(1), Math.log(seasonMax)];
    }
    return [Math.log(1), Math.log(rangeMax)];
  };

  render() {
    const {
      activeVisitors,
      activeHome,
      yearType,
      startYear,
      endYear,
      year
    } = this.state;

    const data = this.getData();
    const extrema = this.getExtrema();
    const scale = scaleSequential(interpolateSpectral).domain([
      extrema[1],
      extrema[0]
    ]);

    const activeNum =
      activeVisitors !== null && data[activeVisitors][activeHome];

    const activeProps = { activeHome, activeVisitors };
    const gridProps = {
      scale,
      data,
      handleMouseOut: this.handleMouseOut,
      handleMouseOver: this.handleMouseOver
    };
    return (
      <div
        style={{ margin: 'auto', width: `${width + cellDim + marginLeft}px` }}
      >
        <Header {...{ year, startYear, endYear, yearType, data }} />
        <div style={{ position: 'relative' }}>
          {activeVisitors !== null && (
            <Tooltip
              home={activeHome}
              visitors={activeVisitors}
              num={activeNum}
            />
          )}
          <svg
            style={{
              height: `${height + cellDim + marginTop}px`,
              width: `${width + cellDim + marginLeft}px`
            }}
          >
            <Axis isXAxis {...activeProps} />
            <Axis {...activeProps} />
            <g
              style={{
                transform: `translate(${cellDim + marginLeft}px, ${cellDim +
                  marginTop}px)`
              }}
            >
              <Grid {...activeProps} {...gridProps} />
            </g>
          </svg>
          <ScaleKey scale={scale} extrema={extrema} />
          <div className="group">
            <div
              style={{
                float: 'right',
                height: '40px',
                textAlign: 'right',
                width: `${160}px`
              }}
            >
              <select
                value={yearType}
                onChange={e => this.setState({ yearType: e.target.value })}
              >
                <option value="single">Single Season</option>
                <option value="range">Range</option>
              </select>
            </div>
            <div
              style={{
                marginLeft: `${marginLeft + cellDim}px`,
                float: 'left',
                marginTop: '4px',
                height: '40px',
                width: `${width - 160}px`,
                textAlign: `center`
              }}
            >
              <YearPicker
                yearType={yearType}
                handleInputChange={this.handleInputChange}
              />
            </div>
          </div>
        </div>
        <div
          style={{ marginTop: '20px', marginLeft: `${marginLeft + cellDim}px` }}
        >
          <About />
        </div>
      </div>
    );
  }
}

export default App;
