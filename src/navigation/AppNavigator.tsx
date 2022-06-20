import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ROOT_STACK, SCREEN_ROUTER} from '@src/constant/Constant';
import SplashScreen from '@src/screens/SplashScreen';
import React, {memo} from 'react';
import isEqual from 'react-fast-compare';
import {connect} from 'react-redux';
import NavigationUtil from './NavigationUtil';
import {StackAppScreen} from './stack/AppStack';
import {StackAuthScreen} from './stack/Auth';
import {MainTab} from './stack/BottomTabBar';

const RootStack = createStackNavigator();

const forFade = ({current}: {current: any}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
const AppNavigatorComponent = (props: any) => {
  return (
    <NavigationContainer
      ref={navigatorRef => {
        NavigationUtil.setTopLevelNavigator(navigatorRef);
      }}>
      <RootStack.Navigator
        headerMode="none"
        // screenOptions={screenOptions}
        // mode="modal"
        options={{
          animationTypeForReplace: 'pop',
          cardStyleInterpolator: forFade,
        }}
        initialRouteName={ROOT_STACK.MAIN_APP}
        children={
          <>
            <RootStack.Screen
              name={SCREEN_ROUTER.SPLASH}
              component={SplashScreen}
            />
            <RootStack.Screen name={SCREEN_ROUTER.MAIN} component={MainTab} />
            {StackAuthScreen()}
            {StackAppScreen()}
          </>
        }
      />
    </NavigationContainer>
  );
};

const AppNavigator = memo(AppNavigatorComponent, isEqual);
const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
