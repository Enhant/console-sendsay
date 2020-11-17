import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react';
import Loading from 'components/LoadingIndicator'

import store from './store';



ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={<Loading/>} persistor={persistStore(store)}>
            <Router>
                <App />
            </Router>
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
);
