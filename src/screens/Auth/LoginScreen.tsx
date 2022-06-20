import R from '@src/assets/R';
import {Button} from '@src/components/Button/Button';
import FstImage from '@src/components/FstImage/FstImage';
import RNTextInput from '@src/components/Input/RNTextInput';
import LoadingProgress from '@src/components/LoadingProgress';
import ScreenWrapper from '@src/components/Screen/ScreenWrapper';
import {
  SCREEN_ROUTER,
  SCREEN_ROUTER_AUTH,
  TYPE_LOGIN,
} from '@src/constant/Constant';
import {colors} from '@src/constant/Theme';
import NavigationUtil from '@src/navigation/NavigationUtil';
import {useAppDispatch} from '@src/redux/store';
import AsyncStorageService from '@src/service/AsyncStorage/AsyncStorageService';
import {showMessages} from '@src/utils/AlertHelper';
import {checkConnected} from '@src/utils/CheckNotConnect';
import {Formik} from 'formik';
import React, {memo, useEffect, useRef, useState} from 'react';
import isEqual from 'react-fast-compare';
import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import * as Yup from 'yup';
import {LoginPayload} from './ApiPayload';
import AuthApi from './AuthApi';

interface LoginScreenProps {
  requestLogin?: (value: LoginPayload) => void;
  loginState?: any;
  navigation?: any;
}

const width_screen = Dimensions.get('screen').width;
const LoginScreenComponent = (props: LoginScreenProps) => {
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [error, setIsError] = useState(null);
  const scrollRef = useRef<ScrollView>(null);
  const keyboardShowRef = useRef(false);
  const [isShowPass, setIsShowPass] = useState(true);
  const dispatch = useAppDispatch();
  const userRef = useRef();
  const passwordRef = useRef();
  const FormValue = {
    user: __DEV__ ? '' : '',
    password: __DEV__ ? '' : '',
  };

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    return () => {
      Keyboard.removeListener('keyboardDidShow', keyboardDidShow);
    };
  }, []);

  const keyboardDidShow = () => {
    scrollRef.current?.scrollToEnd();
    keyboardShowRef.current = true;
  };

  const _onSubmit = async (dataInput: any) => {
    console.log({dataInput});

    if (!checkConnected()) {
      showMessages('Thông báo', 'Kiểm tra lại kết nối Internet', () => {});
    } else {
      setIsFetchingData(true);
      // reactotron.log({deviceState})

      const payload = {
        phone: dataInput?.user,
        password: dataInput?.password,
        deviceID: '',
        Value: dataInput?.Value,
        Type: dataInput?.Type || TYPE_LOGIN.PHONE,
      };

      try {
        // const res = await AuthApi.requestLogin(payload);
        // await AsyncStorageService.putToken(res?.data?.token);
        NavigationUtil.replace(SCREEN_ROUTER.MAIN);
        setIsFetchingData(false);
        setIsError(null);
      } catch (e) {
        setIsError(e);
        setIsFetchingData(false);
      }
    }
  };

  const loginFacebook = () => {
    // LoginManager.logInWithPermissions(['public_profile']).then(
    //   async function (result) {
    //     if (result.isCancelled) {
    //       console.log('Login cancelled')
    //     } else {
    //       const resFacebook = await AccessToken.getCurrentAccessToken()
    //       const payload = {
    //         Value: resFacebook?.accessToken,
    //         Type: TYPE_LOGIN.FACEBOOK,
    //       }
    //       _onSubmit(payload)
    //     }
    //   },
    //   function (error) {
    //     console.log('Login fail with error: ' + error)
    //   },
    // )
  };

  const loginGG = async () => {};

  const LoginSchema = Yup.object().shape({
    user: Yup.string()
      // .matches(phoneRegExp, R.strings().validate_phone)
      // .min(10, R.strings().validate_phone)
      // .max(11, R.strings().validate_phone)
      // .required(R.strings().input_require_phone)
      .trim(),
    password: Yup.string().trim(),
    // .min(8, R.strings().validate_pass_fail)
    // .max(25, R.strings().validate_pass_fail)
    // .required(R.strings().input_require_password),
  });

  return (
    <>
      <ScreenWrapper unsafe backgroundColor={colors.white}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          enabled
          behavior={`padding`}
          keyboardVerticalOffset={-1000}>
          <ScrollView
            // ref={scrollRef}
            style={styles.containerScrollView}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled">
            <FstImage
              source={R.images.img_login}
              style={styles.containerBanner}>
              <FstImage
                source={R.images.img_logo_phu_ha}
                style={styles.logoPHStyle}
              />
              <TouchableOpacity
                style={styles.buttonClose}
                onPress={() => {
                  NavigationUtil.replace(SCREEN_ROUTER.MAIN);
                }}>
                <FstImage
                  source={R.images.ic_close_flash}
                  style={styles_different.icon}
                />
              </TouchableOpacity>
            </FstImage>

            <View style={styles.form_login}>
              <Formik
                initialValues={FormValue}
                onSubmit={_onSubmit}
                validationSchema={LoginSchema}>
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  setSubmitting,
                  values,
                  errors,
                  touched,
                }) => (
                  <>
                    <View style={styles.form_InputLogin}>
                      <RNTextInput
                        isRequite
                        onSubmitEditing={() => setSubmitting(true)}
                        onChangeText={handleChange('user')}
                        value={values.user}
                        returnKeyType={'next'}
                        keyboardType={'number-pad'}
                        maxLength={10}
                        onBlur={handleBlur('user')}
                        label={'Số điện thoại'}
                        placeholder={'Nhập số điện thoại'}
                        errorMeg={touched.user && errors.user}
                        borderBottomColor={undefined}
                        rightText={undefined}
                        ref={userRef}
                      />
                      <RNTextInput
                        isRequite
                        value={values.password}
                        label={'Mật khẩu'}
                        onChangeText={handleChange('password')}
                        returnKeyType={'send'}
                        placeholder={'Nhập mật khẩu'}
                        onSubmitEditing={() => setSubmitting(true)}
                        secureTextEntry={isShowPass}
                        onBlur={handleBlur('password')}
                        onRight={() => {
                          setIsShowPass(!isShowPass);
                        }}
                        rightIcon={
                          isShowPass
                            ? R.images.ic_hidden_pass
                            : R.images.ic_is_hidden
                        }
                        errorMeg={touched.password && errors.password}
                        borderBottomColor={undefined}
                        rightText={''}
                        ref={passwordRef}
                      />

                      <View style={styles.btnForgot}>
                        <Text
                          onPress={() =>
                            NavigationUtil.navigate(
                              SCREEN_ROUTER_AUTH.CONFIRM_EMAIL,
                              {
                                type: SCREEN_ROUTER_AUTH.FORGOTPASS,
                              },
                            )
                          }
                          style={styles.txt_forgotPass}
                          children={`Quên mật khâu ?`}
                        />
                      </View>

                      <TouchableOpacity
                        style={styles.v_button}
                        onPress={handleSubmit}>
                        <Text
                          style={styles.txt_button}
                          children={'Đăng nhập'}
                        />
                      </TouchableOpacity>
                      <View style={styles_different.containerHeader}>
                        <View style={styles_different.line} />
                        <Text children={'Hoặc đăng nhập với'} />
                        <View style={styles_different.line} />
                      </View>

                      <View style={styles_different.containerButton}>
                        {/* <Button
                          onPress={loginGG}
                          style={styles_different.button}>
                          <FstImage
                            source={R.images.ic_google}
                            style={styles_different.icon}
                          />
                          <Text
                            children={'Google'}
                            style={styles_different.text}
                          />
                        </Button>
                        <Button
                          onPress={loginFacebook}
                          style={styles_different.button}>
                          <FstImage
                            source={R.images.ic_facebook}
                            style={styles_different.icon}
                          />
                          <Text
                            children={'Facebook'}
                            style={styles_different.text}
                          />
                        </Button> */}
                      </View>

                      <Text style={styles.txt_register}>
                        Bạn chưa có tài khoản?{'  '}
                        <Text
                          onPress={() => {
                            NavigationUtil.navigate(
                              SCREEN_ROUTER_AUTH.CONFIRM_EMAIL,
                              {type: SCREEN_ROUTER_AUTH.REGISTER},
                            );
                          }}
                          style={styles.textRegister}
                          children={'Đăng ký'}
                        />
                      </Text>
                    </View>
                  </>
                )}
              </Formik>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ScreenWrapper>

      {isFetchingData && <LoadingProgress />}
    </>
  );
};

const styles = StyleSheet.create({
  form_login: {
    bottom: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    paddingRight: 20,
  },

  v_button: {
    width: '100%',
    backgroundColor: '#FAAD14',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    paddingVertical: '4%',
  },
  txt_button: {
    color: colors.white,
  },
  txt_forgotPass: {
    fontSize: 15,
    color: '#FA8C16',
  },
  form_InputLogin: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 35,
  },
  btnForgot: {
    justifyContent: 'flex-end',
    marginBottom: 15,
    alignItems: 'flex-end',
  },
  txt_register: {
    textAlign: 'center',
    fontSize: 15,
    marginTop: 25,
  },
  containerBanner: {
    width: width_screen,
    height: (width_screen * 100) / 126.05,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoPHStyle: {
    width: 97,
    height: 94,
  },
  containerScrollView: {
    backgroundColor: 'white',
    flex: 1,
  },
  textRegister: {
    color: '#FA8C16',
    textDecorationLine: 'underline',
  },
  imageBottomBlo: {
    width: 270,
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 100,
    backgroundColor: 'red',
  },
  textBoQua: {
    textAlign: 'center',
    marginTop: 20,
    color: '#C2C2C2',
    fontSize: 15,
    lineHeight: 24,
  },
  buttonClose: {
    position: 'absolute',
    top: 45,
    right: 15,
    padding: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 12,
  },
});
const styles_different = StyleSheet.create({
  containerHeader: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 20,
  },
  line: {
    width: '27%',
    height: 1,
    backgroundColor: '#CED4DA',
  },
  icon: {
    width: 24,
    height: 24,
  },
  button: {
    width: '48%',
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E9ECEF',
    borderRadius: 16,
  },
  containerButton: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    marginLeft: 15,
    color: '#8C8C8C',
  },
});
const LoginScreen = memo(LoginScreenComponent, isEqual);

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
