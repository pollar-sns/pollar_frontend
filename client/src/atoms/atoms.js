import { atom } from 'recoil';

/* Sample code */
// const sampleState = atom({
//   key: 'exState', // unique ID (with respect to other atoms/selectors)
//   default: '', // default value (aka initial value)
// });

const userState = atom({
  key: 'userState',
  default: [],
});

export default { userState };
