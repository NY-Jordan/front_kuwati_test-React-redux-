import React from 'react';
import { MenuActions } from '../../Actions/MenuActions';

const initialState = {
    name: "menu",
    menu : null,
    error : false,
}





const  MenuReducer = (state = initialState, action) => {
    switch (action.type) {
        case MenuActions.MENU_GET_ACTION_SUCESS :
            return {name : "menu", menu : action.payload.menus, error: false, } 
        case MenuActions.MENU_GET_ACTION_FAILED: 
            return {...state, error: action.payload.error } 
        default:
            return {...state};
    }
};



export default MenuReducer;