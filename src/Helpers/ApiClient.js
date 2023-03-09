import axios from 'axios';
import React from 'react';

const Apiclient = () => {
    const API_SERVER_URL = "http://localhost:8000/api"

    const axiosInstance = axios.create({
        baseURL  : API_SERVER_URL
    });


    return axiosInstance
};

export default Apiclient;