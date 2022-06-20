import {ApiClient} from '@src/service/Network/ApiService';

export default {
  requestGetProvince: () => ApiClient.get(`address/province`, {}),
  requestGetDistrict: (payload: {province_id: number}) =>
    ApiClient.get(`address/district`, {params: payload}),
  requestUploadAvatar: (payload: any) =>
    ApiClient.post(`UploadAvatar`, payload),
  requestUploadMultipleFile: (payload: any) =>
    ApiClient.post(`files/media/upload-multiple`, payload),
};
