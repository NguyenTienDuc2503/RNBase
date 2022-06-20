import R from '@src/assets/R';
import FstImage from '@src/components/FstImage/FstImage';
import reactotron from '@src/config/ReactotronConfig';
import {SCREEN_ROUTER} from '@src/constant/Constant';
import {dimension} from '@src/constant/Theme';
import NavigationUtil from '@src/navigation/NavigationUtil';
import AsyncStorageService from '@src/service/AsyncStorage/AsyncStorageService';
import React, {useEffect} from 'react';
import Splash from 'react-native-splash-screen';
import {connect} from 'react-redux';

const SplashScreen = (props: any) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checkAccount = async () => {
    NavigationUtil.replace(SCREEN_ROUTER.MAIN);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getUserInformation = async () => {
    const token = await AsyncStorageService.getToken();
    if (token) {
      reactotron.log!('token', token);
    } else {
    }
  };

  useEffect(() => {
    setTimeout(checkAccount, 1000);
    getUserInformation();
    Splash.hide();
  }, [checkAccount, getUserInformation, props]);

  return (
    <FstImage
      source={R.images.img_splash}
      style={{
        width: dimension.width,
        height: dimension.height,
      }}
      resizeMode="cover"
    />
  );
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
