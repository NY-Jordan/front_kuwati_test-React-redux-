import React from 'react';
import { useDispatch } from "redux"


export const  MenuActions = {
    MENU_GET_ACTION_SUCESS : "MENU_GET_ACTION_SUCESS" ,
    MENU_GET_ACTION_FAILED : "MENU_GET_ACTION_FAILED" ,
    GET_MENU_OF_DAY_ACTION : "GET_MENU_OF_DAY_ACTION" ,
}


export const getMenuSuccess = (menus) => ({
        type : MenuActions.MENU_GET_ACTION_SUCESS,
        payload : {menus : menus}
});


export const getMenuFailed = (error) => ({
    type : MenuActions.MENU_GET_ACTION_FAILED,
    payload : {error : error}
});

export const getMenuOfDaySucess = (menus) => ({
    type : MenuActions.GET_MENU_OF_DAY_ACTION,
    payload : {menus : menus}
})

export const getMenuOfDayFailed = (error) => ({
    type : MenuActions.GET_MENU_OF_DAY_ACTION,
    payload : {error : error}
})