import moment from 'moment';
import React from 'react';
import Apiclient from '../../Helpers/ApiClient';
import { getMenuFailed, getMenuOfDayFailed, getMenuOfDaySucess, getMenuSuccess } from '../Actions/MenuActions';



export const getMenuService = async (dispatch) => {
    const getMenuRequest =  setTimeout(() => {
        Apiclient().get('/dishes?page=1',  {})
            .then((response) => {
            const res = response.data;
                if (response.status === 200) {
                    const menu = res['hydra:member'];
                    dispatch(getMenuSuccess(menu))
                } else {
                    dispatch(getMenuFailed(res.error))
                }    
            }).catch((e) => { 
                dispatch(getMenuFailed(e.message))
            })
      }, 2000);
      
     
    
};

export const getMenuOfDayService  = async (dispatch) =>   {
    const getMenuRequest =  setTimeout(() => {
        const date = moment().format('DD-MM-YYYY');
        Apiclient().get('/dishes?page=1&created_at%5Bafter%5D='+date,  {})
            .then((response) => {
            const res = response.data;
                if (response.status === 200) {
                    const menu = res['hydra:member'];
                    dispatch(getMenuOfDaySucess(menu))
                } else {
                    dispatch(getMenuOfDayFailed(res.message))
                }    
            }).catch((e) => { 
                if (e.message) {
                    dispatch(getMenuOfDayFailed(e.message))                    
                }
            })
      }, 1000);
      
     
    
};