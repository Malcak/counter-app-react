import React from 'react';
import PropTypes from 'prop-types';

const FirstApp = ({ saludo = 'Hola mundo' }) => {
  return (
    <>
      <h1>{saludo}</h1>
      <p>Mi primera aplicación</p>
    </>
  );
};

FirstApp.propType = {
  saludo: PropTypes.string.isRequired,
};

export default FirstApp;
