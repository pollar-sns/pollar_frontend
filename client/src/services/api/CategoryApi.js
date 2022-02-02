import { instance } from '../../services/axios';

const COMMON = '/category';

/* 모든 카테고리 리스트 */
const getAllCategories = () => {
  return instance.get(COMMON).then((response) => {
    console.log(response);
  });
};

export default {
  getAllCategories,
};
