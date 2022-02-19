import instance from 'services/axiosInstance';

const COMMON = '/follow';

/* 유저 팔로우 요청 */
export const requestFollow = async (followInfo) => {
  const response = await instance.post(COMMON + '/following', followInfo);
  return response.data === 'success';
};

/* 유저 언팔로우 요청 */
export const requestUnfollow = async (followInfo) => {
  const response = await instance.post(COMMON + '/unfollow', followInfo);
  return response.data === 'success';
};

/* 팔로워 목록 */
export const getFollowerList = async (logInUserId, profileUserId) => {
  const response = await instance.get(COMMON + '/followerlist', {
    params: {
      logInUserId,
      profileUserId,
    },
  });
  return response.data.followerList;
};

/* 팔로잉 목록 */
export const getFollowingList = async (logInUserId, profileUserId) => {
  const response = await instance.get(COMMON + '/followinglist', {
    params: {
      logInUserId,
      profileUserId,
    },
  });
  return response.data.followingList;
};
