/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import R from '@app/assets/R'
import FstImage from '@app/components/FstImage/FstImage'
import { Animated, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, styleView } from '@app/theme'
import { TouchableOpacity } from 'react-native'
import NavigationUtil from '@app/navigation/NavigationUtil'
import { SCREEN_ROUTER_APP_CUSTOMER } from '@app/constant/Constant'
import CartIcon from '../components/CartIcon'
import reactotron from '@app/config/ReactotronConfig'
import Fire from '@app/utils/FirebaseConfig'
import {
  getBottomSpace,
  getStatusBarHeight,
  isIphoneX,
} from 'react-native-iphone-x-helper'
interface State {
  headerBgColor: any
  count: number
  userInfo?: any
  countMess: number
}
const HeaderHomeLayout = (props: State) => {
  const { headerBgColor, count, userInfo, countMess } = props
  return (
    <Animated.View
      style={[styles.container, { backgroundColor: headerBgColor }]}
    >
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          // paddingHorizontal: 15,
          width: '100%',
          paddingVertical: 5,
        }}
      >
        <TouchableOpacity
          style={styles.containerSearch}
          onPress={() => {
            NavigationUtil.navigate(SCREEN_ROUTER_APP_CUSTOMER.SEARCH_SCREEN, {
              filter: null,
            })
          }}
        >
          <FstImage source={R.images.ic_search} style={styles.iconStyle} />
          {/* <TextInput
          editable={false}
          style={styles.textInput}
          placeholder="Bạn muốn tìm gì ?"
        /> */}
          <Text children={'Bạn muốn tìm gì?'} style={styles.textInput} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            NavigationUtil.navigate(SCREEN_ROUTER_APP_CUSTOMER.LIST_CHAT)
          }}
          style={styles.containerButton}
        >
          <FstImage source={R.images.ic_chat_blue} style={styles.iconStyle} />
          {countMess > 0 && <View style={styles.containerDotStyle} />}
        </TouchableOpacity>
        <CartIcon
          count={count}
          isShowCount={userInfo?.data?.id ? true : false}
        />
      </View>
    </Animated.View>
  )
}
export default HeaderHomeLayout
const styles = StyleSheet.create({
  container: {
    ...styleView.rowItemBetween,
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    position: 'absolute',

    width: '100%',
    top: 0,
    height:
      getStatusBarHeight() +
      (Platform.OS === 'android' ? 20 : !isIphoneX() ? 60 : 65),
    zIndex: 1,
    // paddingTop: 20,
  },
  textInput: {
    marginLeft: 12,
    color: '#8C8C8C',
  },
  iconStyle: {
    width: 24,
    height: 24,
  },
  containerSearch: {
    width: '70%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    backgroundColor: colors.white,
    borderRadius: 12,
  },
  containerButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerDotStyle: {
    backgroundColor: '#FF4D4F',
    width: 8,
    height: 8,
    position: 'absolute',
    borderRadius: 10,
    top: 10,
    right: 8,
  },
})
