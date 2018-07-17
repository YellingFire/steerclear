import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import Router from "./components/Router/Router";

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
