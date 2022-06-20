import {ResponseType} from '@src/service/Network/model/ApiResponse';
import {showMessages} from '@src/utils/AlertHelper';
import NetworkHelper from '@src/utils/NetworkHelper';
import Toast from 'react-native-toast-message';
import AsyncStoreService from '../AsyncStorage/AsyncStorageService';
const BASE_URL_DEV = 'http://phuha.winds.vn/api/service';
const BASE_URL_PRODUCT = 'http://phuha.winds.vn/api/service';

const createAPI = () => {
  const APIInstant = require('axios').default.create();
  APIInstant.defaults.baseURL = __DEV__ ? BASE_URL_DEV : BASE_URL_PRODUCT;
  APIInstant.defaults.timeout = 20000;
  APIInstant.defaults.headers = {'Content-Type': 'application/json'};
  APIInstant.interceptors.request.use(async (config: any) => {
    config.headers.token = (await AsyncStoreService.getToken()) || '';
    return config;
  }, Promise.reject);

  APIInstant.interceptors.response.use((response: ResponseType<any>) => {
    const data = response.data;
    if (data && data?.code === 403) {
      showMessages('Thông báo', 'Đăng nhập lại');
      AsyncStoreService.putToken('').then(() => {
        // NavigationUtil.navigate(SCREEN_ROUTER_AUTH.LOGIN)
      });
    } else if (data && data.status !== 1)
      showMessages('Thông báo', data.message);
    return response;
  });
  return APIInstant;
};

const axiosClient = createAPI();

/* Support function */
function handleResult<T>(api: any) {
  if (NetworkHelper.isInternetReachable) {
    return api.then((res: any) => {
      return handleResponse<T>(res.data);
    });
  } else {
    Toast.show({
      type: 'error',
      text1: 'Kết nối thất bại',
      visibilityTime: 2000,
    });
    return Promise.reject(new Error('Network offline'));
  }
}

function handleResponse<T>(data: ResponseType<T>) {
  if (data.status !== 1)
    return Promise.reject(new Error(data?.message || 'Co loi xay ra'));
  return Promise.resolve(data);
}

export const ApiClient = {
  get: (url: string, payload: any) =>
    handleResult(axiosClient.get(url, payload)),
  post: (url: string, payload: any) =>
    handleResult(axiosClient.post(url, payload)),
  put: (url: string, payload: any) =>
    handleResult(axiosClient.put(url, payload)),
  path: (url: string, payload: any) =>
    handleResult(axiosClient.patch(url, payload)),
  delete: (url: string, payload: any) =>
    handleResult(axiosClient.delete(url, {data: payload})),
};
