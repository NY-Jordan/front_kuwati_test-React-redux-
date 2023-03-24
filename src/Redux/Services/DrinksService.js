import moment from 'moment';
import React from 'react';
import Apiclient from '../../Helpers/ApiClient';
import { getDrinksFailed, getDrinksSuccess } from '../Actions/DrinksActions';



export const getDrinksService = async (dispatch) => {
    const getDrinksRequest =  setTimeout(() => {
        Apiclient().get('/drinks?page=1',  {})
            .then((response) => {
            const res = response.data;
                if (response.status === 200) {
                    const drinks = res['hydra:member'];
                    console.log('ici');
                    dispatch(getDrinksSuccess(drinks))
                } else {
                    dispatch(getDrinksFailed(res.error))
                }    
            }).catch((e) => { 
                dispatch(getDrinksFailed(e.message))
            })
      }, 2000);
};