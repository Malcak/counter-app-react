import React from 'react';
import PropTypes from 'prop-types';

const FirstApp = ({ saludo, subtitulo }) => {
  return (
    <>
      <h1>{saludo}</h1>
      <p>{subtitulo}</p>
    </>
  );
};

FirstApp.propType = {
  saludo: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  subtitulo: 'Mi primera aplicación',
};

export default FirstApp;
