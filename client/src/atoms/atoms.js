import { atom } from 'recoil';

/* Sample code */
// export const sampleState = atom({
//   key: 'exState', // unique ID (with respect to other atoms/selectors)
//   default: '', // default value (aka initial value)
// });

/* 로그인 상태의 user 정보 */
// - userId
// - userNickname: 프로필 페이지 요청 시 필요
export const loggedUserState = atom({
  key: 'loggedUserState',
  default: [],
});

/* Notification(알림) 목록 */
//: 로그인 성공 시 Navbar에 디스플레이 될 알림 목록
// - userId
// - userNickname: 프로필 페이지 요청 시 필요
export const notificationListState = atom({
  key: 'notificationListState',
  default: [],
});
