import React from 'react';
import ReactDom from 'react-dom';
import CounterApp from './CounterApp';
//import FirstApp from './FirstApp';

import './index.css';

const divRoot = document.querySelector('#root');

ReactDom.render(<CounterApp value={0} />, divRoot);
// ReactDom.render(<FirstApp saludo="Hola, soy Goku" />, divRoot);
