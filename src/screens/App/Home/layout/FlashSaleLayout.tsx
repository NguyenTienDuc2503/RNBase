import React from 'react'
import R from '@app/assets/R'
import FstImage from '@app/components/FstImage/FstImage'
import { SCREEN_ROUTER_APP_CUSTOMER } from '@app/constant/Constant'
import NavigationUtil from '@app/navigation/NavigationUtil'
import { colors, fonts } from '@app/theme'
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import ProductFlashSaleComponent from '../components/ProductFlashSaleComponent'
import { productFlashSaleState } from './interface/layoutHomeInterface'
import CountDown from 'react-native-countdown-component'
const FlashSaleLayout = (props: productFlashSaleState) => {
  const {
    listProductFlashSale,
    setIsShowMessage,
    data,
    listFlashSalePending,
    getData,
  } = props

  const onReadMore = () => {
    NavigationUtil.navigate(SCREEN_ROUTER_APP_CUSTOMER.PRODUCT_FLASH_SALE, {
      id:
        listProductFlashSale && listProductFlashSale?.length > 0
          ? listProductFlashSale[0]?.FlashSaleProducts[0].flashsale_id
          : listFlashSalePending[0]?.FlashSaleProducts[0].flashsale_id,
    })
  }
  const renderTime = () => {
    let rs: any = {}
    let array =
      listProductFlashSale && listProductFlashSale?.length > 0
        ? listProductFlashSale
        : listFlashSalePending
    array?.map((e: any, ind: number) => {
      if (ind === 0) {
        rs = e
      }
    })
    let a: any = {}
    rs.FlashSaleProducts?.map((e: any, ind: number) => {
      if (ind === 0) {
        a = e
      }
    })
    let m = 1000
    let res = a?.FlashSaleConfig
    let fromTime = new Date(res?.from_time_sale)
    let toTime = new Date(res?.to_time_sale)
    let today = new Date()
    if (fromTime > today) {
      m = Math.round(fromTime - today) / 1000
    } else {
      m = Math.round(toTime - today) / 1000
    }
    return m
  }
  const renderHeader = () => {
    return (
      <View style={styles.containerHeader}>
        <View style={styles.containerHeaderLeft}>
          <Text children={'Flash sale'} style={styles.textHeader} />
          <CountDown
            until={renderTime()}
            onFinish={() => {
              listProductFlashSale && listProductFlashSale?.length > 0
                ? setIsShowMessage(true)
                : getData(1)
            }}
            onPress={() => {}}
            size={12}
            timeToShow={['H', 'M', 'S']}
            timeLabels={{ h: '', m: '', s: '' }}
            style={{ marginLeft: 8, justifyContent: 'center' }}
            digitStyle={{ backgroundColor: '#073B4C', width: 24, height: 24 }}
            separatorStyle={{}}
            showSeparator={true}
            digitTxtStyle={{ color: colors.white }}
          />
          {/* <Text children={'Sắp đến'} /> */}
        </View>
        <TouchableOpacity
          style={styles.containerHeaderRight}
          onPress={onReadMore}
        >
          <Text children={'Xem thêm'} style={styles.textReadMore} />
          <FstImage
            source={R.images.ic_chevron_right}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      {renderHeader()}
      <FlatList
        style={{ marginTop: 20 }}
        contentContainerStyle={{ flexGrow: 1 }}
        data={
          listProductFlashSale && listProductFlashSale.length > 0
            ? listProductFlashSale
            : listFlashSalePending
        }
        keyExtractor={(item, index) => `${item.id} ${index}`}
        horizontal
        renderItem={item => {
          return <ProductFlashSaleComponent item={item.item} />
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}
export default FlashSaleLayout
const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 15,
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  containerHeaderLeft: {
    flexDirection: 'row',
  },
  containerHeaderRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textHeader: {
    color: '#073B4C',
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
  },
  viewItemTime: {
    width: 24,
    height: 24,
    backgroundColor: '#073B4C',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 6,
  },
  viewTime: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  textItemTime: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '500',
  },
  iconStyle: {
    width: 24,
    height: 24,
  },
  textReadMore: {
    ...fonts.regular16,
    color: '#425369',
    fontSize: 16,
    lineHeight: 24,
  },
  dotStyle: {
    marginLeft: 6,
  },
})
