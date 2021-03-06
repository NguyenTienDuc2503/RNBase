import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native'
import FstImage from '@app/components/FstImage/FstImage'
import R from '@app/assets/R'
import { colors } from '@app/theme'
import { TouchableOpacity } from 'react-native'
import { KeyState } from './interface/layoutHomeInterface'
import reactotron from '@app/config/ReactotronConfig'
import NavigationUtil from '@app/navigation/NavigationUtil'
import { SCREEN_ROUTER_APP_CUSTOMER } from '@app/constant/Constant'
const VALUE_LIST = [
  {
    id: 2,
    image: R.images.img_design_example,
    name: 'Thiết kế',
    title: 'Thiết kế',
    route: () => {},
  },
  {
    id: 3,
    image: R.images.img_construction_example,
    name: 'Thi công',
    title: 'Thi công',
    route: () => {},
  },
  {
    id: 4,
    image: R.images.img_hand_over_example,
    name: 'Bàn giao',
    title: 'Bàn giao',
    route: () => {},
  },
]
const KeyLayout = () => {
  const renderHeader = () => {
    return (
      <View style={styles.containerHeader}>
        <Text children={'Chìa khoá trao tay'} style={styles.textHeader} />
      </View>
    )
  }
  return (
    <View style={styles.container}>
      {renderHeader()}
      <View style={styles.viewListItem}>
        {VALUE_LIST.map((value, index) => {
          return (
            <TouchableOpacity
              style={styles.containerItem}
              onPress={() => {
                NavigationUtil.navigate(SCREEN_ROUTER_APP_CUSTOMER.NEW_SCREEN, {
                  item: value,
                })
              }}
              key={index}
            >
              <FstImage source={value.image} style={styles.imageStyle} />
              <View style={styles.containerInfoItem}>
                <View style={styles.containerNameItem}>
                  <Text
                    children={`${value.name}`}
                    style={styles.textNameItem}
                  />
                  <FstImage
                    source={R.images.ic_arrow_right_circle}
                    style={styles.iconItem}
                  />
                </View>
              </View>
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}
export default KeyLayout
const styles = StyleSheet.create({
  container: {
    // paddingLeft: 15,
    paddingVertical: 10,

    width: '100%',
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  textHeader: {
    color: '#073B4C',
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
  },
  iconStyle: {
    width: 24,
    height: 24,
  },
  imageStyle: {
    width: '100%',
    height: 78,
    borderRadius: 6,
  },
  containerItem: {
    width: '30%',
    height: 88,
    justifyContent: 'center',
    marginRight: 16,
  },
  containerNameItem: {
    width: '100%',
    height: 20,
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerInfoItem: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 20,
    paddingHorizontal: 4,
  },
  textNameItem: {
    fontSize: 14,
    lineHeight: 18,
    color: '#262626',
  },
  iconItem: {
    width: 16,
    height: 16,
  },
  viewListItem: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 3,
  },
})
