import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import store from './Redux/store.js';
import { Provider } from 'react-redux';

import AppContainer from './Components/App/AppContainer';

import './scss/null.scss';
import './index.css';

//========================================================================================================================================================

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

//========================================================================================================================================================

reportWebVitals();
