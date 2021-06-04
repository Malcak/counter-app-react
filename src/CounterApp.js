import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  // handleAdd
  const handleAdd = () => {
    // setCounter((c) => c + 1);
    setCounter(counter + 1);
  };

  const handleSubtract = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2 id="counterValue">{counter}</h2>

      <button id="add" onClick={handleAdd}>
        +1
      </button>
      <button id="reset" onClick={handleReset}>
        reset
      </button>
      <button id="subtract" onClick={handleSubtract}>
        -1
      </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

CounterApp.defaultProps = {
  value: 0,
};

export default CounterApp;
