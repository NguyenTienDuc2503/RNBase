/* eslint-disable no-useless-escape */
/* eslint-disable prettier/prettier */
import R from '@src/assets/R';
import DateUtil from '@src/utils/DateUtil';

const SCREEN_ROUTER_APP_CUSTOMER = {
  PRODUCT: 'PRODUCT',
  NOTIFICATION: 'NOTIFICATION',
  CART: 'CART',
  PRODUCT_FLASH_SALE: 'PRODUCT_FLASH_SALE',
  PRODUCT_SELLING: 'PRODUCT_SELLING',
  CONFIRM_EMAIL: 'CONFIRM_EMAIL',
  FILTER_PRODUCT: 'FILTER_PRODUCT',
  PRODUCT_DETAIL: 'PRODUCT_DETAIL',
  MEDIA_VIEWER: 'MEDIA_VIEWER',
  EVALUATE: 'EVALUATE',
  PRODUCT_CATEGORY_ONE: 'PRODUCT_CATEGORY_ONE',
  NEWS_DETAIL_SCREEN: 'NEWS_DETAIL_SCREEN',
  PRODUCT_CATEGORY_DETAIL: 'PRODUCT_CATEGORY_DETAIL',
  SEARCH_SCREEN: 'SEARCH_SCREEN',
  ADDRESS_ACCOUNT: 'ADDRESS_ACCOUNT',
  LIST_ADDRESS: 'LIST_ADDRESS',
  UPDATE_ACCOUNT: 'UPDATE_ACCOUNT',
  LIST_VOUCH: 'LIST_VOUCH',
  VOUCHER_DETAIL: 'VOUCHER_DETAIL',
  ORDER_SCREEN: 'ORDER_SCREEN',
  ORDER_DETAIL: 'ORDER_DETAIL',
  CREATE_CART: 'CREATE_CART',
  REGISTER_SUPPLIER: 'REGISTER_SUPPLIER',
  REVIEW_ORDER_SCREEN: 'REVIEW_ORDER_SCREEN',
  NEW_SCREEN: 'NEW_SCREEN',
  CHAT: 'CHAT',
  RANK_MEMBER: 'RANK_MEMBER',
  LIST_CHAT: 'LIST_CHAT',
  REVIEW_DETAIL: 'REVIEW_DETAIL',
  POLICY_RANK: 'POLICY_RANK',
  WALLET_POINT: 'WALLET_POINT',
  HOME_SCREEN_SUPPLIER: 'HOME_SCREEN_SUPPLIER',
  REVENUE_SCREEN_SUPPLIER: 'REVENUE_SCREEN_SUPPLIER',
  INTRODUCE: 'INTRODUCE',
  RIGHTS_INTRODUCE: 'RIGHTS_INTRODUCE',
  BANNER_DETAIL_SCREEN: 'BANNER_DETAIL_SCREEN',
  REQUEST_QUOTE: 'REQUEST_QUOTE',
  PRODUCT_SUPPLIER: 'PRODUCT_SUPPLIER',
  SEARCH_LOCATION: 'SEARCH_LOCATION',
  IMAGE_VIEWER: 'IMAGE_VIEWER',
  SELECT_ADDRESS: 'SELECT_ADDRESS',
  SELECT_PAYMENT: 'SELECT_PAYMENT',
  QR_CODE: 'QR_CODE',
  EXCHANGE_POINT: 'EXCHANGE_POINT',
  HISTORY_POINT: 'HISTORY_POINT',
  MEMBERSHIP: 'MEMBERSHIP',
  DETAIL_GIFT: 'DETAIL_GIFT',
  HISTORY_GIFT: 'HISTORY_GIFT',
  HISTORY_CARD: '  HISTORY_CAR',
  POINT_HISTORY: 'POINT_HISTORY',
  HISTORY_GIVE_POINT: 'HISTORY_GIVE_POINT',
  INSTRUCT: 'INSTRUCT',
};

export const CALL_API = {
  SUCCESS: 1, //thành công
  ERROR: 9, //đã đăng ký tư vấn
  ERROR_SECURITY: 7, //lỗi mạng
  ERROR_MONEY: 8, //chưa đủ tiền
};

export const SHOW_TOAST_MESSAGE = 'SHOW_TOAST_MESSAGE';

const SCREEN_ROUTER_APP_ADMIN = {
  PRODUCT: 'PRODUCT',
  NOTIFICATION: 'NOTIFICATION',
  CART: 'CART',
  CHAT: 'CHAT',
  ACCOUNT_SUPPLIER: 'ACCOUNT_SUPPLIER',
  LIST_CHAT: 'LIST_CHAT',
  UPDATE_ACCOUNT_SUPPLIER: 'UPDATE_ACCOUNT_SUPPLIER',
  WALLET_POINT_SUPPLIER: 'WALLET_POINT_SUPPLIER',
  WITHDRAW_MONEY: 'WITHDRAW_MONEY',
  ORDER_DETAIL_SCREEN: 'ORDER_DETAIL_SCREEN',
  TRANSACTION_CONFIRM: 'TRANSACTION_CONFIRM',
  BANK_SCREEN: 'BANK_SCREEN',
  SELECT_BANK: 'SELECT_BANK',
  LIST_BANK: 'LIST_BANK',
  WALLET_POINT_HISTORY: 'WALLET_POINT_HISTORY',
  REVIEW_SUPPLIER: 'REVIEW_SUPPLIER',
  PRODUCT_CATEGORY_ONE: 'PRODUCT_CATEGORY_ONE',
  PRODUCT_CATEGORY_DETAIL: 'PRODUCT_CATEGORY_DETAIL',
  SEARCH_SCREEN: 'SEARCH_SCREEN',
  PRODUCT_DETAIL: 'PRODUCT_DETAIL',
};

export const REG_EMAIL =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// export const REG_EMAIL =
//   /[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u
export const KEY_SPECIAL = /^\b[0-9a-zA-Z]{10}\b|\b[0-9a-zA-Z]{13}\b$/;
export const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
// /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const NAME_REGEX =
  /^[a-zA-Z ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/;

export const POINT_REGEX = /^\d*$/;

export const NUMBER_SPACE = /^[0-9]+$/;

export const TYPE_CHANGE_PASS = {
  LOGIN: 0, //ĐÃ LOGIN
  NOT_LOGIN: 1, // CHƯA LOGIN
};

const SCREEN_ROUTER_AUTH = {
  SPLASH: 'SPLASH',
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER',
  FORGOTPASS: 'FORGOTPASS',
  CHANGEPASS: 'CHANGEPASS',
  CONFIRM_EMAIL: 'CONFIRM_EMAIL',
  OTP: 'OTP',
};
export const TYPE__PRODUCT = {
  NORMAL: 0, // sản phẩm thường
  NEWS: 1, // sản phẩm mới
  SELLING: 2, // bán chạy
};
const TYPE_ROLE = {
  NORMAL: 1, /// cá nhân
  WORKER: 2, //thợ
  AGENT: 3, //đại lý
};

export const RESULT_VNPAY = {
  SUCCESS: 'success',
  FAILED: 'failed',
};

const SCREEN_ROUTER = {
  SPLASH: 'SPLASH',
  AUTH: 'AUTH',
  MAIN: 'MAIN',
  MAIN_ADMIN: 'MAIN_ADMIN',
};

export const ROOT_STACK = {
  MAIN_APP: 'MAIN_APP',
};

const MAIN_TAB = {
  HOME: 'HOME',
  ORDER: 'ORDER_SCREEN',
  PRODUCT: 'PRODUCT',
  USER: 'USER',
  QR_CODE: 'QR_CODE',
  NOTIFICATION: 'NOTIFICATION',
};

const MAIN_TAB_ADMIN = {
  HOME: 'HOME',
  ORDER: 'ORDER',
  PRODUCT: 'PRODUCT',
  REVENUE: 'REVENUE',
  ACCOUNT_SUPPLIER: 'ACCOUNT_SUPPLIER',
  CART: 'CART',
};

export const APP_SLICE = {
  SWITCH: 'switchNavigatorReducer',
  REGISTER: 'registerReducer',
  LIST_PRODUCT: 'listProductReducer',
  HOME: 'homeReducer',
  LIST_CART: 'listCartReducer',
  USER_INFO: 'accountReducer',
  LIST_PROVINCE: 'provinceReducer',
  LIST_ORDER: 'listOrderReducer',
  QUANTITY_CART: 'cartQuantityReducer',
  PRODUCT_FLASH_SALE: 'productFlashSaleReducer',
  LIST_ORDER_SUPPLIER: 'listOrderSupplierReducer',
  LIST_NOTIFICATION: 'listNotificationReducer',
  QUANTITY_NOTIFICATION: 'quantityNotificationReducer',
  LIST_HISTORY_GIFT: 'listHistoryGiftReducer',
  LIST_HISTORY_POINT: 'listPointHistoryReducer',
  LIST_HISTORY_CARD: 'listHistoryCardReducer',
};

export const APP_STATE = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  BACKGROUND: 'background',
};

const DEFAULT_PARAMS = {
  PAGE: 1,
  LIMIT: 24,
  DATE: {
    fromDate: DateUtil.getStartMonth(3),
    toDate: new Date(),
  },
};

const TYPE_RANK = {
  MEMBER: 1,
  SILVER: 2,
  GOLD: 3,
  DIAMOND: 4,
};

// export const DEFINE_RANK = {
//   [TYPE_RANK.MEMBER]: {
//     name: R.strings().member,
//   },
//   [TYPE_RANK.SILVER]: {
//     name: R.strings().sliver,
//   },
//   [TYPE_RANK.GOLD]: {
//     name: R.strings().gold,
//   },
//   [TYPE_RANK.DIAMOND]: {
//     name: R.strings().diamond,
//   },
// };

export const TYPE_NOTIFICATION = {
  ORDER: 1,
  RANK: 2,
  NEWS: 3,
  GIFT: 4,
  POINT: 5,
  DENY_GIFT: 6,
  ROLE: 7,
};

export const DEFINE_NOTIFICATION = {
  [TYPE_NOTIFICATION.ORDER]: {
    icon: R.images.ic_order_success,
  },
  [TYPE_NOTIFICATION.RANK]: {
    icon: R.images.ic_rank,
  },
  [TYPE_NOTIFICATION.NEWS]: {
    icon: R.images.ic_notification_focus,
  },
  [TYPE_NOTIFICATION.GIFT]: {
    icon: R.images.ic_gift_focus,
  },
  [TYPE_NOTIFICATION.POINT]: {
    icon: R.images.ic_point,
  },
  [TYPE_NOTIFICATION.DENY_GIFT]: {
    icon: R.images.ic_point,
  },
  [TYPE_NOTIFICATION.ROLE]: {
    icon: R.images.ic_builder_account,
  },
};

// const REG_EMAIL =
//   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export {
  DEFAULT_PARAMS,
  SCREEN_ROUTER,
  SCREEN_ROUTER_APP_CUSTOMER,
  SCREEN_ROUTER_APP_ADMIN,
  MAIN_TAB_ADMIN,
  MAIN_TAB,
  SCREEN_ROUTER_AUTH,
  // REG_EMAIL,
};
const FILTER_PRICE_TYPE = {
  PRICE_MIN_MAX: 2,
  PRICE_MAX_MIN: 1,
};
const FILTER_BUY_TYPE = {
  BUY_MIN_MAX: 2,
  BUY_MAX_MIN: 1,
};

const FILTER_TIME_TYPE = {
  TIME_NEW_OLD: 2,
  TIME_OLD_NEW: 1,
};

export const FILTER_TYPE = {
  PRICE: FILTER_PRICE_TYPE,
  BUY: FILTER_BUY_TYPE,
  TIME: FILTER_TIME_TYPE,
};

export const TYPE_POINT_HISTORY = {
  WITHDRAW_SUCCESS: 1,
  WITHDRAW_WAIT: 2,
  WITHDRAW_REFUSE: 3,
};

export const TYPE_LOGIN = {
  FACEBOOK: 1,
  GOOGLE: 2,
  PHONE: 3,
};

// export const TYPE_NOTIFICATION = {
//   ORDER: 1, // Thông báo thay đổi trạng thái đơn hàng
//   ENTERPRISE_REQUEST: 2, // Thông báo yêu cầu trở thành NCC
//   MESSAGE: 3, // Thông báo tin nhắn
//   WALLET_TRANSACTION: 4, // Thông báo khách hàng ĐIỂM
// }

export const MEMBER_RANK = {
  DEFAULT_POINT: 0,
  MEMBER: 1,
  SILVER: 2,
  GOLD: 3,
  DIAMOND: 4,
};
export const TYPE_SCREEN_PRODUCT = {
  SEARCH_SCREEN: 1,
  PRODUCT_CATEGORY_SCREEN: 2,
  PRODUCT_SCREEN: 3,
  PRODUCT_CATEGORY_DETAIL_SCREEN: 4,
};
export const TYPE_WALLET = {
  INTRODUCE: 1, //giới thiệu
  DONE_ORDER: 2, //hoàn thành đơn
  REPAY: 3, //hoàn điểm
  WITHDRAW: 4, //rút tiền
  MAKE_ORDER_WITH_ACCUMULATE: 5, //đặt đơn+điểm tích luỹ
  MAKE_ORDER_WITH_REPAY: 6, //đoặt đợn+hoàn
};

export const TYPE_PAYMENT = {
  COD: 1,
  TRANSFER: 2,
  UNPAID: 3,
};

export const STATUS_PAYMENT = {
  UNPAID: 0,
  PAID: 1,
};

const TYPE_TELECOM = {
  VIETTEL: 1,
  MOBIFONE: 2,
  VINAPHONE: 3,
};
export const DEFINE_DATA_BANK = {
  [TYPE_TELECOM.VIETTEL]: {
    id: TYPE_TELECOM.VIETTEL,
    title: 'Viettel',
    icon: R.images.ic_viettel_cube,
  },

  [TYPE_TELECOM.MOBIFONE]: {
    id: TYPE_TELECOM.MOBIFONE,
    title: 'Mobifone',
    icon: R.images.ic_mobifone_cube,
  },

  [TYPE_TELECOM.VINAPHONE]: {
    id: TYPE_TELECOM.VINAPHONE,
    title: 'Vinaphone',
    icon: R.images.ic_vinaphone_cube,
  },
};

// export const DEFINE_PAYMENT = {
//   [TYPE_PAYMENT.TRANSFER]: {
//     title: R.strings().payment_transfer,
//   },

//   [TYPE_PAYMENT.COD]: {
//     title: R.strings().payment_cod,
//   },

//   [TYPE_PAYMENT.UNPAID]: {
//     title: R.strings().unPaid,
//   },
// };

/// Constant App Phu Ha

export const TYPE_OPTIONS = {
  EXCHANGE_POINT: 0,
  POINT: 1,
  ORDER: 2,
  INSTRUCT: 3,
};

export const HOME_OPTION = [
  {
    id: TYPE_OPTIONS.EXCHANGE_POINT,
    icon: R.images.ic_box,
    name: 'Đổi điểm',
  },

  {
    id: 1,
    icon: R.images.ic_wallet,
    name: 'Đổi điểm',
  },

  {
    id: 2,
    icon: R.images.ic_order,
    name: 'Đổi điểm',
  },

  {
    id: 3,
    icon: R.images.ic_instruct,
    name: 'Đổi điểm',
  },
];

// export const DEFINE_ROLE = {
//   [TYPE_ROLE.NORMAL]: {
//     title: R.strings().normal,
//   },
//   [TYPE_ROLE.WORKER]: {
//     title: R.strings().worker,
//   },
//   [TYPE_ROLE.AGENT]: {
//     title: R.strings().agent,
//   },
// };

export const TYPE_ODER = {
  PENDING: 0,
  PROCESS: 1,
  DONE: 2,
  CANCEL: -1,
};

export const TYPE_HISTORY_GIFT = {
  PENDING: 0,
  DONE: 1,
  CANCEL: 2,
};

// export const ORDER_STATUS = {
//   [TYPE_ODER.PENDING]: {
//     id: 0,
//     name: R.strings().pending,
//     title: R.strings().order,
//     color: colors.primary,
//     icon: R.images.ic_order_pending,
//   },
//   [TYPE_ODER.PROCESS]: {
//     id: 1,
//     name: R.strings().process,
//     title: R.strings().process,
//     color: colors.primary,
//     icon: R.images.ic_order_process,
//   },
//   [TYPE_ODER.DONE]: {
//     id: 2,
//     name: R.strings().complete,
//     title: R.strings().complete,
//     color: colors.primary,
//     icon: R.images.ic_order_done,
//   },
//   [TYPE_ODER.CANCEL]: {
//     id: -1,
//     name: R.strings().cancel,
//     title: R.strings().cancel,
//     color: colors.black,
//     icon: R.images.ic_order_cancel,
//   },
// };

export const TYPE_HANDLE_ITEM = {
  ORDER_DETAIL: 'ORDER_DETAIL',
  CREAT_CART: 'CREAT_CART',
  GIFT_DETAIL: 'GIFT_DETAIL',
};
