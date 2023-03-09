import moment from 'moment';
import React from 'react';
import Apiclient from '../../Helpers/ApiClient';
import { getMenuFailed, getMenuOfDayFailed, getMenuOfDaySucess, getMenuSuccess } from '../Actions/MenuActions';



export const getMenuService = (dispatch) => {
    const getMenuRequest =  setTimeout(() => {
        Apiclient().get('/dishes?page=1',  {})
            .then((response) => {
            const res = response.data;
                console.log(res);
                if (response.status === 200) {
                    const menu = res['hydra:member'];
                    dispatch(getMenuSuccess(menu))
                } else {
                    dispatch(getMenuFailed(res.error))
                }    
            }).catch((e) => { 
                dispatch(getMenuFailed(e.response.data.message))
            })
      }, 2000);
      
     
    
};

export const getMenuOfDayService = (dispatch) => {
    const getMenuRequest =  setTimeout(() => {
        const date = moment().format('DD-MM-YYYY');
        console.log(date);
        Apiclient().get('/dishes?page=1&created_at%5Bafter%5D='+date,  {})
            .then((response) => {
            const res = response.data;
                console.log(res);
                if (response.status === 200) {
                    const menu = res['hydra:member'];
                    dispatch(getMenuOfDaySucess(menu))
                } else {
                    dispatch(getMenuOfDayFailed(res.error))
                }    
            }).catch((e) => { 
                dispatch(getMenuOfDayFailed(e.response.data.message))
            })
      }, 1000);
      
     
    
};