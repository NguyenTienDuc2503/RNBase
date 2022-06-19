import { SCREEN_ROUTER_AUTH } from '@app/constant/Constant'
import ChangePasswordScreen from '@app/screens/Auth/ChangePasswordScreen'
import ConfirmEmailScreen from '@app/screens/Auth/ConfirmEmailScreen'
import LoginScreen from '@app/screens/Auth/LoginScreen'
import OtpScreen from '@app/screens/Auth/OtpScreen'
import RegisterScreen from '@app/screens/Auth/RegisterScreen'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

const { LOGIN, FORGOTPASS, CHANGEPASS, CONFIRM_EMAIL, REGISTER, OTP } =
  SCREEN_ROUTER_AUTH
const Stack = createStackNavigator()

const authScreen = {
  [LOGIN]: LoginScreen,
  [FORGOTPASS]: LoginScreen,
  [CHANGEPASS]: ChangePasswordScreen,
  [CONFIRM_EMAIL]: ConfirmEmailScreen,
  [REGISTER]: RegisterScreen,
  [OTP]: OtpScreen,
}

export const StackAuthScreen = () => {
  return (
    <>
      {/* <Stack.Navigator
        headerMode='none'
        mode='modal'> */}
      {Object.keys(authScreen).map((item, index) => (
        <Stack.Screen key={index} name={item} component={authScreen[item]} />
      ))}
      {/* </Stack.Navigator> */}
    </>
  )
}
