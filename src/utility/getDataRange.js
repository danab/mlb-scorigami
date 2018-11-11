import dataStore from '../data/dataStore.json';
import full from '../data/full.json';
import { firstYear, lastYear } from './constants';

const memoizedDataRange = () => {
  const cache = {
    [`${firstYear}-${lastYear}`]: full
  };
  return (startYear, endYear) => {
    if (`${startYear}-${endYear}` in cache) {
      return cache[`${startYear}-${endYear}`];
    }
    const range = Array.from(Array(26), () => Array.from(Array(26), () => 0));
    for (let year = startYear; year <= endYear; year++) {
      for (let i = 0; i < 26; i++) {
        for (let j = 0; j < 26; j++) {
          range[i][j] += dataStore[year][i][j];
        }
      }
    }
    cache[`${startYear}-${endYear}`] = range;
    return range;
  };
};

const getDataRange = memoizedDataRange();

export default getDataRange;
