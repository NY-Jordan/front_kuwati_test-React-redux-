import { userActions } from "../Actions/UserActions";

const initialState = {
    name: "user",
    user : null,
    token : 0,
    error : false,
}


const  UserReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
    case userActions.LOGIN_SUCCESS :
        return {name : "user", user : action.payload.user , token : action.payload.token, error: false, } 
    case userActions.LOGIN_FAILED :
        return {...state, error: action.payload.error } 
    case userActions.REGISTER_SUCCESS :
        return {name : "user", user : action.payload.user , token : action.payload.token, error: false,} 
    case userActions.REGISTER_FAILED :
        return {...state, error: action.payload.error } 
    case userActions.LOGOUT_SUCESS :
        return {...state, error: action.payload.error } 
    case userActions.LOGOUT_FAILED :
        return {...state, error: action.payload.error } 
    default:
        return {...state};
    }
};

export default UserReducer;