import React from 'react';
import {  addDishesToCommandAction } from '../Actions/CommandActions';



export const AddDishesToCommandService =  (dispatch, dishes) => {
    setTimeout(() => {
        dispatch(addDishesToCommandAction(dishes))    
    }, 2000);
};

