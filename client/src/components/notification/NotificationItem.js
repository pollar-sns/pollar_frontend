import {
  Avatar,
  Box,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';

import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import img from '../../assets/images/profile.jpeg';
import clockFill from '@iconify/icons-eva/clock-fill';
import { readNotifications } from 'services/api/NotificationApi';

function renderContent(notificationType, notificationContents) {
  const title = (
    <Typography variant="subtitle2">
      {notificationType === 2 ? '좋아요 알림' : '팔로우 알림'}
      <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
        &nbsp; {notificationContents}
      </Typography>
    </Typography>
  );

  if (notificationType === 2) {
    return {
      avatar: <img src={img} alt="123" />,
      //      avatar: <img alt={notification.title} src="/static/icons/ic_notification_package.svg" />,
      title,
    };
  }
  if (notificationType === 4) {
    return {
      avatar: <img src={img} alt="123" />,
      //      avatar: <img alt={notification.title} src="/static/icons/ic_notification_shipping.svg" />,
      title,
    };
  }
  return {
    avatar: <img src={img} alt="123" />,
    //    avatar: <img alt={notification.title} src={notification.avatar} />,
    title,
  };
}

NotificationItem.propTypes = {
  notification: PropTypes.object.isRequired,
};

export default function NotificationItem({ notification }) {
  const {
    notificationId,
    notificationContents,
    notificationCreateTime,
    notificationRead,
    notificationType,
    // receiveId,
    sendId,
    voteId,
  } = notification;
  const { avatar, title } = renderContent(notificationType, notificationContents);
  const navigate = useNavigate();

  /* 알림 클릭 시 읽음처리 + 관련 action 처리 */
  const handleNotificationClick = async () => {
    const result = await readNotifications([notificationId]);
    if (result.data === 'success') {
      // 알림과 관련된 action 처리
      /* 피드(투표) 관련 */
      if (notificationType === 2) {
        navigate(`/poll/${voteId}`);
      } /* 팔로잉 관련 */ else if (notificationType === 4) {
        navigate(`/users/profile/${sendId}`);
      } else {
        console.log('undefined....');
      }
    }
  };

  return (
    <ListItemButton
      to="#"
      disableGutters
      component={RouterLink}
      onClick={handleNotificationClick}
      sx={{
        py: 1.5,
        px: 2.5,
        mt: '1px',
        ...(notificationRead && {
          bgcolor: 'action.selected',
        }),
      }}
    >
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: 'background.neutral' }}>{avatar}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={
          <Typography
            variant="caption"
            sx={{
              mt: 0.5,
              display: 'flex',
              alignItems: 'center',
              color: 'text.disabled',
            }}
          >
            <Box component={Icon} icon={clockFill} sx={{ mr: 0.5, width: 16, height: 16 }} />
            {formatDistanceToNow(new Date(notificationCreateTime))}
          </Typography>
        }
      />
    </ListItemButton>
  );
}
