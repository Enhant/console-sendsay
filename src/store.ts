import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { routerMiddleware } from 'react-router-redux';

import reducers from './reducers';

import history from './utils/history';

import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage
}
  
const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer ,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk, routerMiddleware(history)],
});

export default store;
