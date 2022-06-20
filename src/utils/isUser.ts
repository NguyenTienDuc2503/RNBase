import {SCREEN_ROUTER_AUTH} from '@src/constant/Constant';
import NavigationUtil from '@src/navigation/NavigationUtil';
import AsyncStorageService from '@src/service/AsyncStorage/AsyncStorageService';
import {showConfirm} from './AlertHelper';

const isUser = async (action: () => void) => {
  // const token = await AsyncStorageService.getToken()
  const token = await AsyncStorageService.getToken();
  if (!token) {
    showConfirm('Thông báo', 'Tk đăng nhâp nơi khác', () => {
      NavigationUtil.navigate(SCREEN_ROUTER_AUTH.LOGIN);
    });
    return;
  }
  action();
};

export default isUser;
