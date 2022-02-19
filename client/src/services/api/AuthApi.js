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

/* 로그아웃 */
export const logout = () => {
  // remove JWT from LocalStorage
  localStorage.removeItem('user');
};
