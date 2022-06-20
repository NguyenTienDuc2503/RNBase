import {SCREEN_ROUTER_AUTH} from '@src/constant/Constant';
import LoginScreen from '@src/screens/Auth/LoginScreen';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

const {LOGIN} = SCREEN_ROUTER_AUTH;
const Stack = createStackNavigator();

const authScreen = {
  [LOGIN]: LoginScreen,
};

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
  );
};
