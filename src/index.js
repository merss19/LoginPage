import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import { Provider } from 'react-redux';


import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import store from './store';
import App from './containers/App'




ReactDOM.render(  <Provider store={store}><App/></Provider>, document.getElementById('root'));
