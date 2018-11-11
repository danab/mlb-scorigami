import React from 'react';
import Slider, { Range, createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';

import { firstYear, lastYear } from '../utility/constants';

const RangeWithToolTip = createSliderWithTooltip(Range);
const SliderWithToolTip = createSliderWithTooltip(Slider);

const marks = {
  1871: 1871,
  1900: 1900,
  1925: 1925,
  1950: 1950,
  1975: 1975,
  2000: 2000,
  2017: 2017
};

const YearPicker = ({ yearType, handleInputChange }) => {
  const Component =
    yearType === 'single' ? SliderWithToolTip : RangeWithToolTip;
  const defaultValue = yearType === 'single' ? lastYear : [firstYear, lastYear];
  return (
    <>
      <Component
        trackStyle={{ backgroundColor: 'transparent' }}
        activeDotStyle={{ borderColor: '#e9e9e9' }}
        onChange={handleInputChange}
        min={firstYear}
        max={lastYear}
        defaultValue={defaultValue}
        marks={marks}
      />
    </>
  );
};

export default YearPicker;
