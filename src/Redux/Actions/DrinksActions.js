
export const  DrinksActions = {
    GET_DRINKS_ACTION_SUCCESS : "GET_DRINKS_ACTION_SUCCESS" ,
    GET_DRINKS_ACTION_FAILED : "GET_DRINKS_ACTION_FAILED" ,
}


export const getDrinksSuccess = (drinks) => ({
       
        type : DrinksActions.GET_DRINKS_ACTION_SUCCESS,
        payload : {drinks : drinks}
});


export const getDrinksFailed = (error) => ({
    type : DrinksActions.GET_DRINKS_ACTION_FAILED,
    payload : {error : error}
});
