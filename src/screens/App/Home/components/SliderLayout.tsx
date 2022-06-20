import R from '@src/assets/R';
import FstImage from '@src/components/FstImage/FstImage';
import {SCREEN_ROUTER_APP_CUSTOMER} from '@src/constant/Constant';
import {colors, dimension} from '@src/constant/Theme';
import NavigationUtil from '@src/navigation/NavigationUtil';
import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {Banner, ItemBanner} from '../HomeModel';

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
];
interface sliderProps {
  listBanner?: Banner;
}
const renderItemBanner = ({item}: {item: ItemBanner; index: number}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        NavigationUtil.navigate(SCREEN_ROUTER_APP_CUSTOMER.NEWS_DETAIL_SCREEN, {
          id: item.newsID,
        });
      }}
      children={
        <FstImage
          source={{uri: item?.urlImage}}
          style={[styles.imgBanner, {width: dimension.width - 40}]}
          resizeMode="cover"
        />
      }
    />
  );
};
const SliderLayout = (props: sliderProps) => {
  const {listBanner} = props;
  return (
    <View style={styles.container}>
      {!!data?.length && (
        <SwiperFlatList
          autoplay
          autoplayDelay={5}
          autoplayLoop
          index={0}
          keyExtractor={(item: any, index: any) => `${item.id} ${index}`}
          showPagination
          data={listBanner || []}
          renderItem={renderItemBanner}
          paginationStyleItemActive={styles.swiperActive}
          paginationStyleItemInactive={styles.swiperInActive}
          paginationActiveColor={colors.primary}
          paginationStyleItem={styles.normalDot}
        />
      )}
    </View>
  );
};
export default memo(SliderLayout);
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 20,
  },
  imgBanner: {
    width: dimension.width - 10,
    height: 160,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  normalDot: {
    height: 12,
    width: 12,
    borderRadius: 12,
    backgroundColor: colors.primary,
    marginHorizontal: 4,
    marginTop: 25,
  },
  swiperActive: {
    backgroundColor: colors.primary,
  },

  swiperInActive: {backgroundColor: colors.text.gray1},
});
