import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LiveSearch from './live-search';
import peaks from './peaks.json';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LiveSearch characters={peaks}/>, document.getElementById('root'));
registerServiceWorker();
