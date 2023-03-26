export const  userActions = {
    LOGIN_SUCCESS : "LOGIN_SUCCESS" ,
    LOGIN_FAILED : "LOGIN_FAILED" ,
    REGiSTER_SUCCESS : "REGiSTER_SUCCESS" ,
    REGISTER_FAILED : "REGISTER_FAILED" ,
    LOGOUT_SUCCESS : "LOGOUT_SUCCESS" ,
}


export const LoginSuccess = (user, token) => ({
       
        type : userActions.LOGIN_SUCCESS,
        payload : {user : user, token : token}
});


export const LoginFailed = (error) => ({
    type : userActions.LOGIN_FAILED,
    payload : {error : error}
});