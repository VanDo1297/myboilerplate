import React from 'react';
import ReactDOM from 'react-dom';
import App from './apps/App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import './assets/styles/index.scss';

export const store = configureStore({
    reducer: rootReducer
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));