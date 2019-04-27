import React from 'react';
import ReactDOM from 'react-dom';
import Router from '../src/components/Router';
import "./normalize.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
