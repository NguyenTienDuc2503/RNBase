import R from '@app/assets/R';
import NetInfo from '@react-native-community/netinfo';
import Toast from 'react-native-toast-message';
import {showMessages} from './AlertHelper';

class NetworkHelper {
  public isInternetReachable = true;

  unsubscribe = NetInfo.addEventListener(state => {
    if (state?.isConnected && state?.details) {
      //   Toast.show({
      //     type: 'success',
      //     text1: R.strings().validate_network_success,
      //     visibilityTime: 2000,
      //   })
      // } else {
      //   Toast.show({
      //     type: 'error',
      //     text1: R.strings().validate_network_error,
      //     visibilityTime: 2000,
      //   })
    }

    // in iOS simulator, state.isInternetReachable is always false.
    if (__DEV__ && state.isConnected) {
      this.isInternetReachable = true;
    } else {
      this.isInternetReachable = state.isInternetReachable ?? false;
    }
  });
}

export default new NetworkHelper();
