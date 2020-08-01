import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SkillSet from './SkillSet'
import * as serviceWorker from './serviceWorker';
import AntdComp from './AntdComp';

ReactDOM.render(
  <div>
    <App />
    <hr/>
    <SkillSet />
    <hr/>
    <AntdComp />
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
