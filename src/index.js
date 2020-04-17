import React from 'react';
import ReactDOM from 'react-dom';

import './assets/styles/geosuggest.css'
import './assets/styles/app.css'
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
