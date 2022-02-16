import { useNavigate } from 'react-router-dom';
import instance from 'services/axiosInstance';

// 공통되는 경로는 다음과 같이 별도로 정의해둠
const COMMON = '/user';

/* 회원가입 */
export const signup = async (userData) => {
  const response = await instance.post(COMMON + '/signup', userData);
  return response.data;
};

/* 로그인 */
export const login = async (userData) => {
  const response = await instance.post(COMMON + '/login', userData);
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
