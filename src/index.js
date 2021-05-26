import React from 'react';
import ReactDom from 'react-dom';
import FirstApp from './FirstApp';

const divRoot = document.querySelector('#root');

ReactDom.render(<FirstApp />, divRoot);
