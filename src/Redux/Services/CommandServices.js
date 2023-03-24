import React from 'react';
import {  addDishesToCommandAction, addDrinkToCommandAction } from '../Actions/CommandActions';



export const AddDishesToCommandService =  (dispatch, dishes) => {
    setTimeout(() => {
        dispatch(addDishesToCommandAction(dishes))    
    }, 2000);
};

export const AddDrinksToCommandService = (dispatch, drink) => {
    setTimeout(() => {
        dispatch(addDrinkToCommandAction(drink))    
    }, 2000);
}