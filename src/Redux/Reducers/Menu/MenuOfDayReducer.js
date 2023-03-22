import React from 'react';
import { MenuActions } from '../../Actions/MenuActions';

const initialState = {
    name: "menu du jour",
    menu : null,
    error : false,
}




const  MenuOfDayReducer = (state = initialState, action) => {
    switch (action.type) {
        case MenuActions.GET_MENU_OF_DAY_ACTION:
            return {name : "menu du jour ", menu : action.payload.menus, error: false, } 
        case MenuActions.MENU_GET_ACTION_FAILED: 
            return {name : "menu du jour ", menu : null, error: true, } 
        default:
            return {...state};
    }
};



export default MenuOfDayReducer;