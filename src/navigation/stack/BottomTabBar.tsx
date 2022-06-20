import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import R from '@src/assets/R';
import {MAIN_TAB, SCREEN_ROUTER} from '@src/constant/Constant';
import {colors, dimension} from '@src/constant/Theme';
import HomeScreen from '@src/screens/App/Home/HomeScreen';

import isUser from '@src/utils/isUser';

import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import NavigationUtil from '../NavigationUtil';

const Tab = createBottomTabNavigator();

const {
  ic_home,
  ic_profile,
  ic_profile_focus,
  ic_home_focus,
  ic_notification,
  ic_notification_focus,
  ic_category,
  ic_category_focus,
} = R.images;

const {HOME, PRODUCT, USER, NOTIFICATION} = MAIN_TAB;

const tabBarIcon = {
  [HOME]: ic_home,
  [PRODUCT]: ic_category,
  [NOTIFICATION]: ic_notification,
  [USER]: ic_profile,
};

const tabBarIconFocus = {
  [HOME]: ic_home_focus,
  [PRODUCT]: ic_category_focus,
  [NOTIFICATION]: ic_notification_focus,
  [USER]: ic_profile_focus,
};
const mainTab = {
  [HOME]: HomeScreen,
  [PRODUCT]: HomeScreen,
  [NOTIFICATION]: HomeScreen,
  [USER]: HomeScreen,
};

const tabBarLabel = {
  [HOME]: 'home',
  [PRODUCT]: 'home',
  [NOTIFICATION]: 'home',
  [USER]: 'home',
};

const MAIN = {
  [SCREEN_ROUTER.MAIN]: mainTab,
};
const TabBarNameRequireLogin = [
  MAIN_TAB.ORDER,
  MAIN_TAB.USER,
  MAIN_TAB.NOTIFICATION,
];

const styles = StyleSheet.create({
  tab_bar_icon: {
    width: 20,
    height: 20,
  },
  txtLabel: {
    fontSize: 20,
  },
  btn_order: {
    width: dimension.width * 0.14,
    height: dimension.width * 0.14,
    backgroundColor: colors.primary,
    borderRadius: 30,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigatorContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
});

const renderTabButtons = (title: string, focused: any) => {
  const sizeIcon = focused ? 30 : 25;
  return (
    <FastImage
      style={{width: sizeIcon, height: sizeIcon}}
      source={focused ? tabBarIconFocus[title] : tabBarIcon[title]}
      resizeMode={'contain'}
    />
  );
};
export const MainTab = (route: any) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: false,
        tabStyle: {flexDirection: 'column'},
      }}
      tabBar={props => (
        <BottomTabBar
          {...props}
          style={{
            height: 60 + getBottomSpace(),
          }}
        />
      )}
      // tabBar={props => renderTabBar(props)}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const sizeIcon = focused ? 25 : 22;
          return renderTabButtons(route.name, focused);
        },
        tabBarLabel: ({focused}) => {
          const color = focused ? '#DE080A' : colors.focus;
          return (
            <Text
              style={[
                styles.txtLabel,
                {
                  color: color,
                  fontSize: 12,
                  marginBottom: 3,
                },
              ]}
              numberOfLines={1}>
              {tabBarLabel[route.name]}
            </Text>
          );
        },
        tabBarButton: props => {
          return (
            <TouchableOpacity
              {...props}
              onPress={async e => {
                if (TabBarNameRequireLogin.includes(route.name)) {
                  isUser(() => {
                    NavigationUtil.navigate(route.name);
                  });
                } else {
                  NavigationUtil.navigate(route.name);
                }
              }}
            />
          );
        },
      })}>
      {Object.keys(MAIN[route.route?.name]).map((item, index) => (
        <Tab.Screen
          key={index}
          name={item}
          component={MAIN[route.route?.name][item]}
        />
      ))}
    </Tab.Navigator>
  );
};
