/* eslint-disable prettier/prettier */
import R from '@app/assets/R';
import {colors} from '@app/theme';
import {MEMBER_RANK} from './Constant';

const DATA_PROVINCE = [
  {
    id: 0,
    name: 'Hanoi',
  },
  {
    id: 1,
    name: 'Ha nam ',
  },
  {
    id: 2,
    name: 'Thai binh ',
  },
  {
    id: 3,
    name: 'Ho chi minh',
  },
  {
    id: 4,
    name: 'Hanoi',
  },
  {
    id: 5,
    name: 'Hanoi',
  },
  {
    id: 6,
    name: 'Hanoi',
  },
  {
    id: 7,
    name: 'Hanoi',
  },
  {
    id: 8,
    name: 'Hanoi',
  },
];

const LIST_CART = [
  {
    id: 0,
    name: 'Sản phầm chất lượng',
    price: '10.0000đ',
    des: 'Mô tả ',
    quantity: 10,
  },
  {
    id: 1,
    name: 'Quần áo dài',
    price: '20.0000đ',
    des: 'Gạch bê tông | 600x300x100',
    quantity: 100,
  },
  {
    id: 2,
    name: 'Đồ gia dụng',
    price: '30.0000đ',
    des: 'Sản phầm chất lượng',
    quantity: 40,
  },
  {
    id: 3,
    name: 'Quần áo',
    price: '10.0000đ',
    des: 'Gạch bê tông | 600x300x100',
    quantity: 1,
  },
];

const LIST_PAY = [
  {
    id: 2,
    url: R.images.ic_credit_card2x,
    name: 'Chuyển khoản',
    title: 'Chuyển khoản qua số tài khoản',
    widthIcon: 24,
    heightIcon: 24,
  },
  {
    id: 1,
    url: R.images.ic_COD,
    name: 'Thanh toán khi nhận hàng',
    title: 'Thanh toán theo hình thức COD',
    widthIcon: 24,
    heightIcon: 24,
  },
  {
    id: 3,
    url: R.images.ic_vn_pay,
    name: 'Chưa thanh toán',
    title: 'Chưa thanh toán',
    widthIcon: 24,
    heightIcon: 19,
  },
];

const DATA_TRANSFER = [
  {
    id: 0,
    source: R.images.logo_vietcombank,
    name: 'CN Thăng Long CTY TNHH NỘI THẤT VÀ XD PHÚ HÀ',
    bank_code: '19128005694016',
    bank: 'Techcombank',
  },
  // {
  //   id: 1,
  //   source: R.images.logo_vietinbank,
  //   name: 'Nguyen Dinh Dat2',
  //   bank_code: '83479785783758334',
  // },
  // {
  //   id: 2,
  //   source: R.images.logo_vpbank,
  //   name: 'Nguyen Dinh Dat3',
  //   bank_code: '83479785783758334',
  // },
];

const typePoint = [
  {
    title: 'Tất cả',
    id: 0,
  },
  {
    title: 'Điểm hoàn',
    id: 1,
  },
  {
    title: 'Điểm cộng',
    id: 2,
  },
];
export {
  DATA_PROVINCE,
  LIST_CART,
  LIST_PAY,
  typeMember,
  typePoint,
  DATA_TRANSFER,
};
