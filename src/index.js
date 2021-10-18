import ReactDOM from 'react-dom';

import './index.css';
import App from './App';  // here is imported from App.js
import Clock from './Clock'
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Clock />, document.getElementById('root2'));