import R from '@app/assets/R'
import { MAIN_TAB, SCREEN_ROUTER } from '@app/constant/Constant'
import { dimension } from '@app/constant/Theme'
import AccountScreen from '@app/screens/App/Account/AccountScreen'
import HomeScreen from '@app/screens/App/Home/HomeScreen'
import NotificationScreen from '@app/screens/App/Notification/NotificationScreen'
import OrderScreen from '@app/screens/App/Order/OrderScreen'
import ProductScreen from '@app/screens/App/Product/ProductScreen'
import QrCodeScreen from '@app/screens/App/QR_Code/QrCodeScreen'
import { colors, height, width } from '@app/theme'
import isUser from '@app/utils/isUser'
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'

import LottieView from 'lottie-react-native'
import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import { getBottomSpace, isIphoneX } from 'react-native-iphone-x-helper'
import NavigationUtil from '../NavigationUtil'

const aspectRatio = height / width
const Tab = createBottomTabNavigator()

const {
  ic_home,
  ic_profile,
  ic_profile_focus,
  ic_home_focus,
  ic_notification,
  ic_notification_focus,
  ic_category,
  ic_category_focus,
  ic_QR_code_home,
} = R.images

const { HOME, PRODUCT, QR_CODE, USER, NOTIFICATION } = MAIN_TAB

const tabBarIcon = {
  [HOME]: ic_home,
  [PRODUCT]: ic_category,
  [QR_CODE]: ic_QR_code_home,
  [NOTIFICATION]: ic_notification,
  [USER]: ic_profile,
}

const tabBarIconFocus = {
  [HOME]: ic_home_focus,
  [PRODUCT]: ic_category_focus,
  [QR_CODE]: ic_QR_code_home,
  [NOTIFICATION]: ic_notification_focus,
  [USER]: ic_profile_focus,
}
const mainTab = {
  [HOME]: HomeScreen,
  [PRODUCT]: ProductScreen,
  [QR_CODE]: QrCodeScreen,
  [NOTIFICATION]: NotificationScreen,
  [USER]: AccountScreen,
}

const tabBarLabel = {
  [HOME]: R.strings().home,
  [PRODUCT]: R.strings().product,
  [NOTIFICATION]: R.strings().notification,
  [USER]: R.strings().account,
  [QR_CODE]: R.strings().qr_code,
}

const MAIN = {
  [SCREEN_ROUTER.MAIN]: mainTab,
}
const TabBarNameRequireLogin = [
  MAIN_TAB.ORDER,
  MAIN_TAB.USER,
  MAIN_TAB.NOTIFICATION,
  MAIN_TAB.QR_CODE,
]

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

  v_empty: {
    width: '30%',
    height:
      Platform.OS === 'ios'
        ? isIphoneX()
          ? aspectRatio === 2.1653333333333333
            ? height * 0.15
            : height * 0.18
          : height * 0.16
        : height * 0.15,
  },
})

const isCart = (title: string) => {
  return title === 'ORDER_SCREEN'
}
const isNoti = (title: string) => {
  return title === 'NOTIFICATION'
}
const isQR = (title: string) => {
  return title === MAIN_TAB.QR_CODE
}
const renderTabButtons = (title: string, focused: any) => {
  const sizeIcon = focused ? 30 : 25
  if (isQR(title)) {
    return (
      <View style={styles_button.containerQRCode}>
        <FastImage
          style={styles_button.imageQR}
          source={focused ? tabBarIconFocus[title] : tabBarIcon[title]}
          resizeMode={'contain'}
        />
        {/* <View style={styles_button.containerLottie}>
          <LottieView
            source={R.lotties.QR_code}
            style={styles_button.lottieStyle}
            autoPlay
            loop
          />
        </View> */}
      </View>
    )
  }
  return (
    <FastImage
      style={{ width: sizeIcon, height: sizeIcon }}
      source={focused ? tabBarIconFocus[title] : tabBarIcon[title]}
      resizeMode={'contain'}
    />
  )
}
export const MainTab = (route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route)
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: false,
        tabStyle: { flexDirection: 'column' },
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
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const sizeIcon = focused ? 25 : 22
          return renderTabButtons(route.name, focused)
        },
        tabBarLabel: ({ focused }) => {
          const color = focused ? '#DE080A' : colors.focus
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
              numberOfLines={1}
            >
              {tabBarLabel[route.name]}
            </Text>
          )
        },
        tabBarButton: props => {
          return (
            <TouchableOpacity
              {...props}
              onPress={async e => {
                if (TabBarNameRequireLogin.includes(route.name)) {
                  isUser(() => {
                    NavigationUtil.navigate(route.name)
                  })
                } else {
                  NavigationUtil.navigate(route.name)
                }
              }}
            />
          )
        },
      })}
    >
      {Object.keys(MAIN[route.route?.name]).map((item, index) => (
        <Tab.Screen
          key={index}
          name={item}
          component={MAIN[route.route?.name][item]}
        />
      ))}
    </Tab.Navigator>
  )
}
const styles_button = StyleSheet.create({
  containerQRCode: {
    position: 'absolute',
    bottom: 7,
    backgroundColor: colors.white,
    borderRadius: 40,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageQR: {
    width: '90%',
    height: '90%',
  },
  containerLottie: {
    width: 46,
    height: 46,
    borderRadius: 30,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottieStyle: {
    width: 48,
    height: 48,
  },
})
