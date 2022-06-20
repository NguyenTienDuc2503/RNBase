import {ApiClient} from '@src/service/Network/ApiService';
import {
  ChangePassword,
  LoginPayload,
  LogoutPayload,
  RegisterPayload,
  ForgotPayload,
  CheckOtpPayload,
} from './ApiPayload';

export default {
  requestLogin: (payload: LoginPayload) => ApiClient.post(`/LoginApp`, payload),
  requestLogout: (payload: LogoutPayload) => ApiClient.get(`/Logout`, payload),
  requestRegister: (payload: RegisterPayload) =>
    ApiClient.post(`/Register`, payload),
  requestForgotPassword: (payload: ForgotPayload) =>
    ApiClient.post(`/ForgotPassword`, payload),
  requestChangePassword: (payload: ChangePassword) =>
    ApiClient.get(`/api/User/changePassword`, {params: payload}),
  requestUpdatePassword: (payload: ChangePassword) =>
    ApiClient.post(`/ChangePassword`, payload),
  requestCheckOtp: (payload: CheckOtpPayload) =>
    ApiClient.post(`/CheckOtpCode`, payload),
  requestResetPassword: (payload: any) =>
    ApiClient.post(`/ResetPassword`, payload),
  requestCheckPhone: (payload: any) => ApiClient.post(`/CheckPhone`, payload),
};
