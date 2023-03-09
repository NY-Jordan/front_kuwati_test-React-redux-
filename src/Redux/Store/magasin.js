import React from 'react';
import { combineReducers, } from "redux"
import MenuOfDayReducer from '../Reducers/Menu/MenuOfDayReducer';
import MenuReducer from '../Reducers/Menu/MenuReducer';


 const RootReducer = 
    combineReducers({
        menu: MenuReducer,
        menuofday : MenuOfDayReducer,
        
    });


export default RootReducer;