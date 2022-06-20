import { Dimensions, View } from 'react-native'
import React, { useCallback } from 'react'
import { StyleSheet } from 'react-native'
import { Button } from '@app/components/Button/Button'
import FstImage from '@app/components/FstImage/FstImage'
import R from '@app/assets/R'
import { colors } from '@app/theme'
import { Banner, ItemBanner } from '../HomeModel'
import NavigationUtil from '@app/navigation/NavigationUtil'
import { SCREEN_ROUTER_APP_CUSTOMER } from '@app/constant/Constant'
import { SwiperFlatList } from 'react-native-swiper-flatlist'
const window = Dimensions.get('window')

const { width } = window
const data = [
  {
    imageUrl: R.images.img_vietbuiltding_banner,
  },
  {
    imageUrl: R.images.img_vietbuiltding_banner,
  },
  {
    imageUrl: R.images.img_vietbuiltding_banner,
  },
]
interface State {
  listBanner?: Banner
}
const renderItemBanner = ({ item }: { item: ItemBanner; index: number }) => {
  return (
    <Button
      onPress={() => {
        NavigationUtil.navigate(
          SCREEN_ROUTER_APP_CUSTOMER.BANNER_DETAIL_SCREEN,
          {
            item: item,
          }
        )
      }}
      children={
        <FstImage
          source={
            item?.media_url
              ? { uri: item?.media_url }
              : R.images.img_vietbuiltding_banner
          }
          style={[styles.imgBanner, { width: width - 40 }]}
          resizeMode="cover"
        />
      }
    />
  )
}
const SlideBarHomeLayout = (props: State) => {
  const { listBanner } = props

  return (
    <View style={styles.container}>
      {!!data?.length && (
        <SwiperFlatList
          autoplay
          autoplayDelay={5}
          autoplayLoop
          index={0}
          keyExtractor={(item: any, index: any) => `${item.id} ${index}`}
          showPagination={false}
          data={listBanner?.rows || data || []}
          renderItem={renderItemBanner}
          paginationActiveColor={colors.primary}
          paginationStyleItem={styles.normalDot}
        />
      )}
    </View>
  )
}
export default SlideBarHomeLayout
const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 15,
    paddingVertical: 15,
  },
  imgBanner: {
    width: width - 10,
    height: 175,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  normalDot: {
    height: 12,
    width: 12,
    borderRadius: 12,
    backgroundColor: colors.primary,
    marginHorizontal: 4,
  },
})
