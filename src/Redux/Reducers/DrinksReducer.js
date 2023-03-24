import { DrinksActions } from "../Actions/DrinksActions";

const initialState = {
    name: "drinks",
    drinks : [],
    totalPrice : 0,
    error : false,
}





const  DrinksReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
    case DrinksActions.GET_DRINKS_ACTION_SUCCESS :
        console.log(action);
        return {name : "drinks", drinks : action.payload.drinks , error: false, totalPrice : 0 } 
    case DrinksActions.GET_DRINKS_ACTION_FAILED :
        return {...state, error: action.payload.error } 
    default:
        return {...state};
    }
};

export default DrinksReducer;