import React from 'react';


export const  CommandActions = {
    ADD_DIHES_TO_COMMAND_ACTION : "ADD_DIHES_TO_COMMAND_ACTION" ,
    REMOVE_DIHES_TO_COMMAND_ACTION : "REMOVE_DIHES_TO_COMMAND_ACTION" ,
}


export const addDishesToCommandAction = (dishes) => ({
        type : CommandActions.ADD_DIHES_TO_COMMAND_ACTION,
        payload : {dishes : dishes}
});

export const removeDishesToCommandAction = (id, price) => ({
    type : CommandActions.REMOVE_DIHES_TO_COMMAND_ACTION,
    payload : {id : id, price: price}
});