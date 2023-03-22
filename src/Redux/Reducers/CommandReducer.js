import React from 'react';
import { CommandActions } from '../Actions/CommandActions';

const initialState = {
    name: "command",
    command : [],
    totalPrice : 0,
    error : false,
}





const  CommandReducer = (state = initialState, action) => {
    switch (action.type) {
        case CommandActions.ADD_DIHES_TO_COMMAND_ACTION :
            return {name : "command", command : [...state.command,  action.payload.dishes] , error: false, totalPrice : state.totalPrice + action.payload.dishes.price } 
    case CommandActions.REMOVE_DIHES_TO_COMMAND_ACTION :
        return {name : "command", command : [...state.command,  action.payload.dishes] , error: false } 
    default:
    return {...state};
    }
};

export default CommandReducer;