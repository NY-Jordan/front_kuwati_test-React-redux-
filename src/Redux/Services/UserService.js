import Apiclient from '../../Helpers/ApiClient';
import { LoginFailed } from '../Actions/UserActions';
import * as alertify from "alertifyjs"

export const LoginServie = async (dispatch, user) => {
    const LoginRequest =  setTimeout(() => {
        console.log(user);
        Apiclient().post('/login',  user) 
            .then((response) => {
                const res = response.data;
                    console.log(res);   
            }).catch((e) => { 
                    alertify.error(e.response.message)
                    dispatch(LoginFailed(e.response.message))

                })
      }, 2000)};