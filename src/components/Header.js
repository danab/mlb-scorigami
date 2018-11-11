import React from 'react';

const Header = ({ yearType, year, startYear, endYear }) => {
  if (yearType === 'single') {
    return (
      <h1 style={{ textAlign: 'center', margin: '2rem 0 0.5rem 50px' }}>
        MLB Score Frequency for {year}
      </h1>
    );
  }

  return (
    <h1 style={{ textAlign: 'center', margin: '2rem 0 0.5rem 50px' }}>
      MLB Score Frequency from {startYear}-{endYear}
    </h1>
  );
};

export default Header;
