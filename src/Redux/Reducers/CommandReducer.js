import React from 'react';
import { CommandActions } from '../Actions/CommandActions';

const initialState = {
    name: "command",
    command : {
        dishes : [],
        drinks : [],
    },
    totalPrice : 0,
    error : false,
}





const  CommandReducer = (state = initialState, action) => {
    switch (action.type) {
    case CommandActions.ADD_DIHES_TO_COMMAND_ACTION :
        return {name : "command", command : { dishes : [...state.command.dishes,  action.payload.dishes], drinks :  [...state.command.drinks]} , error: false, totalPrice : state.totalPrice + action.payload.dishes.price } 
    case CommandActions.ADD_DRINK_TO_COMMAND_ACTION :
        return {name : "command", command : { dishes : [...state.command.dishes], drinks :  [...state.command.drinks, action.payload.drink]} , error: false, totalPrice : state.totalPrice + action.payload.drink.price } 
    
    case CommandActions.REMOVE_DIHES_TO_COMMAND_ACTION :
        if (state.command.dishes.length > 1) {
           const newState = state.command.dishes.filter((dishes) => dishes.id === action.payload.id)
           return {name : "command", command : newState , error: false , totalPrice : state.totalPrice - action.payload.price} 
        } else { 
            return {name : "command", command : [] , error: false , totalPrice : state.totalPrice - action.payload.price} 
        }
    default:
    return {...state};
    }
};

export default CommandReducer;