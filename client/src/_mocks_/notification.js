import { set, sub, formatDistanceToNow } from 'date-fns';

const NOTIFICATIONS = [
  {
    // id: faker.datatype.uuid(),
    id: 0,
    title: 'Your order is placed',
    description: 'waiting for shipping',
    avatar: null,
    type: 'order_placed',
    createdAt: set(new Date(), { hours: 10, minutes: 30 }),
    isUnRead: true,
  },
  {
    // id: faker.datatype.uuid(),
    id: 1,
    // title: faker.name.findName(),
    title: 'sfd',
    description: 'answered to your comment on the Minimal',
    // avatar: mockImgAvatar(2),
    avatar: null,
    type: 'friend_interactive',
    createdAt: sub(new Date(), { hours: 3, minutes: 30 }),
    isUnRead: true,
  },
  {
    // id: faker.datatype.uuid(),
    id: 2,
    title: 'You have new message',
    description: '5 unread messages',
    avatar: null,
    type: 'chat_message',
    createdAt: sub(new Date(), { days: 1, hours: 3, minutes: 30 }),
    isUnRead: false,
  },
  {
    // id: faker.datatype.uuid(),
    id: 3,
    title: 'You have new mail',
    description: 'sent from Guido Padberg',
    avatar: null,
    type: 'mail',
    createdAt: sub(new Date(), { days: 2, hours: 3, minutes: 30 }),
    isUnRead: false,
  },
  {
    // id: faker.datatype.uuid(),
    id: 4,
    title: 'What happens if desc. is too long?',
    description:
      'Your order is being shipped Your order is being shipped Your order is being shipped Your order is being shipped Your order is being shipped Your order is being shipped',
    avatar: null,
    type: 'order_shipped',
    createdAt: sub(new Date(), { days: 3, hours: 3, minutes: 30 }),
    isUnRead: false,
  },
];

export default NOTIFICATIONS;
