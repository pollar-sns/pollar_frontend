import { createIntstanceWithAuth } from 'services/axios';
import axiosInstance from 'services/axiosInstance';
import { getLoggedUserId } from 'utils/loggedUser';

const COMMON = '/notification';

/* 알림 목록 */
export const getNotificationList = async () => {
  const response = await axiosInstance
    .post(COMMON + '/list', {
      receiveId: getLoggedUserId(),
    })
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.log(e);
    });
  // return response.data;
};

/* 알림 읽기 */
export const readNotifications = async (notificationIdList) => {
  const response = await createIntstanceWithAuth().put(COMMON + '/read', {
    notificationIdList,
  });
  return response.data;
};
