export interface LoginPayload {
  user_id?: number;
  password: string;
}

export interface LogoutPayload {
  os_kind_id: number;
  push_token: string;
}

export interface RegisterPayload {
  Name: string;
  Phone: string;
  Password: any;
  DOB: any; // dd/MM/yyyy
  Gender: any; // 1: Name , 0: Nữ
  Email: string;
  DeviceID: any;
}

export interface ForgotPassword {
  password: string;
  code: string;
  captcha_id: string;
}

export interface ChangePassword {
  Password_old: string;
  Password: string;
}

export interface ForgotPayload {
  phone: string;
}

export interface CheckOtpPayload {
  phone: string;
  OTP: string;
}
