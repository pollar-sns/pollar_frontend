import { Store } from '@mui/icons-material';
import axios from 'axios';
import { logout } from './api/AuthApi';

const user = JSON.parse(localStorage.getItem('user'));

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-type': 'application/json',
    // For Spring Boot back-end
    // Authorization: 'Bearer ' + user.accessToken,
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // 토큰(JWT)이 존재하는 경우
    if (user && user.accessToken) {
      config.headers.Authorization = 'Bearer ' + user.accessToken;
    }
    console.log(config);
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// HTTP response 인터셉터
axiosInstance.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
    if (error.response) {
      switch (error.response.status) {
        case 401:
          alert('재로그인하세요');
          logout();
      }
    }
    return Promise.reject(error.response.data);
  }
);

export default axiosInstance;
