import {ApiClient} from '@src/service/Network/ApiService';

export const getAccounts = (payload: any) => ApiClient.get('/users', payload);
export const getApiHome = (payload?: any) =>
  ApiClient.get('/GetHomeScreen', {params: payload});
export const requestGetListNews = (payload?: any) =>
  ApiClient.get('/GetListNews', {params: payload});
export const getApiDetailNew = (payload?: any) =>
  ApiClient.get(`/GetNewsDetail`, {params: payload});

export const requestGetNewsGuide = (payload?: any) =>
  ApiClient.get(`/GetNewsGuide`, {params: payload});
export const getApiBannerNew = (payload?: any) =>
  ApiClient.get(`/admin/banner/${payload.id}`, payload);
