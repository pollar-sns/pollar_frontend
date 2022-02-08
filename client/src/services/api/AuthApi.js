import { useNavigate } from 'react-router-dom';
import { instance } from '../../services/axios';

// 공통되는 경로는 다음과 같이 별도로 정의해둠? (is this nesassary)
const USER = '/user';

/* 회원가입 */
export const signup = (userData) => {
  // return instance.post('/user/sign')
  return instance.post(USER + '/signup', userData).then((response) => {
    console.log(response);
  });
};

/* 로그인 */
export const login = async (userData) => {
  const response = await instance.post(USER + '/login', userData);
  if (response.data.accessToken) {
    // save JWT token
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};
/* accessToken: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhY2Nlc3NUb2tlbiIsInVzZXJJZCI6Im1hbWFzIiwiaWF0IjoxNjQ0MjkxMjMxLCJleHAiOjE2NDQyOTMwMzF9.ynWMhRhfpzyvoRp3sqt6_4zU9d23226Mg7MoJaJqlZuKp7e-01jupxD5RKVoY4educmIkOtpZr_c2CtuHK5Ydg"
message: "success"
userId: "mamas"
userNickname: "hellboi"
userProfilePhoto: null */

/* 로그아웃 */
export const logout = () => {
  // remove JWT from LocalStorage
  localStorage.removeItem('user');
};
