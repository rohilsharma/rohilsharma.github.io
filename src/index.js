import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import BirthdayApp from './BirthdayApp';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<BirthdayApp />, document.getElementById('root'));
registerServiceWorker();
