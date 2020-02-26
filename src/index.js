import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Nav from './components/Nav';
import Footer from './components/Footer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Nav />, document.getElementsByTagName('nav')[0]);
ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(<Footer />, document.getElementsByTagName('footer')[0]);
serviceWorker.unregister();
