import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

const Stack = createStackNavigator();

const mainScreen = {
  // [HOME]: HomeScreen,
};

export const StackAppScreen = () => {
  return (
    <>
      {/* {Object.keys(mainScreen).map((item, index) => (
        <Stack.Screen key={index} name={item} component={mainScreen[item]} />
      ))} */}
    </>
  );
};
