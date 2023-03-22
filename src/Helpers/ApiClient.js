import axios from 'axios';
import React from 'react';

const Apiclient = () => {
    const API_SERVER_URL = process.env.REACT_APP_BASE_URL_API;

    const axiosInstance = axios.create({
        baseURL  : API_SERVER_URL
    });

    return axiosInstance
};

export default Apiclient;