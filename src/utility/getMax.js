const memoizedMax = () => {
  const cache = {};
  return (startYear, endYear, data) => {
    if (`${startYear}-${endYear}` in cache) {
      return cache[`${startYear}-${endYear}`];
    }
    let max = 0;
    let maxHome = 0;
    let maxVisitor = 0;
    for (let i = 0; i < 26; i++) {
      for (let j = 0; j < 26; j++) {
        if (data[i][j] > max) {
          max = data[i][j];
          maxHome = j;
          maxVisitor = i;
        }
      }
    }
    cache[`${startYear}-${endYear}`] = { maxHome, maxVisitor, max };
    return { maxHome, maxVisitor, max };
  };
};

const getMax = memoizedMax();

export default getMax;
