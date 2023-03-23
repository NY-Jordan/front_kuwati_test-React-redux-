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
        if (state.command.length > 1) {
           const newState = state.command.filter((dishes) => dishes.id === action.payload.id)
           return {name : "command", command : newState , error: false , totalPrice : state.totalPrice - action.payload.price} 
        } else { 
            return {name : "command", command : [] , error: false , totalPrice : state.totalPrice - action.payload.price} 
        }
    default:
    return {...state};
    }
};

export default CommandReducer;