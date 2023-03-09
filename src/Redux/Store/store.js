import React from 'react';
import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from 'redux-thunk';
import RootReducer from './magasin';


export const store = createStore(RootReducer, applyMiddleware(thunk))