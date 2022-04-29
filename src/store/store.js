import {compose,applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import {  rootReducers } from '../reducers/rootReducers';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
export const store=configureStore(
    {reducer:rootReducers},
    composeEnhancers(
        applyMiddleware(thunk)
    )
);