import React from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{value}</h2>
    </>
  );
};

CounterApp.propType = {
  value: PropTypes.number,
};

CounterApp.defaultProps = {
  value: 0,
};

export default CounterApp;
