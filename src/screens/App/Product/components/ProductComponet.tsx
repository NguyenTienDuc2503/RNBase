/* eslint-disable prettier/prettier */
import R from '@src/assets/R';
import FstImage from '@src/components/FstImage/FstImage';
import {
  SCREEN_ROUTER_APP_CUSTOMER,
  TYPE__PRODUCT,
} from '@src/constant/Constant';
import {colors, dimension} from '@src/constant/Theme';
import NavigationUtil from '@src/navigation/NavigationUtil';
import {formatPrice} from '@src/utils/FuncHelper';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
interface State {
  styleContainer?: any;
  item?: any;
  styleImage?: any;
  onPress?: () => void;
  urlImage?: any;
  key?: any;
}
const ProductComponent = (props: State) => {
  const {item} = props;

  const renderImage = () => {
    if (item?.listImageUrl && item?.listImageUrl.length > 0) {
      return {uri: item?.listImageUrl[0]};
    } else {
      return R.images.img_example_product;
    }
  };
  return (
    <TouchableOpacity
      key={item?.id}
      style={[styles.containerComponent, props.styleContainer]}
      onPress={() => {
        NavigationUtil.navigate(SCREEN_ROUTER_APP_CUSTOMER.PRODUCT_DETAIL, {
          id: item?.id,
        });
      }}>
      <FstImage
        source={renderImage()}
        style={[styles.imageProduct, props.styleImage]}
        resizeMode={'cover'}
      />
      <View style={styles.containerInfo}>
        <Text
          children={`${item?.name || ''}`}
          style={styles.textName}
          numberOfLines={2}
          ellipsizeMode="tail"
        />
        <View style={{}}>
          <Text
            children={
              item
                ? `${
                    item?.price ? formatPrice(`${item?.price}`) + 'đ' : '0đ'
                  }` + `${item?.unit ? '/' + item?.unit : ''}`
                : `0đ`
            }
            style={styles.textPriceSale}
          />
        </View>
      </View>
      {item?.type !== TYPE__PRODUCT.NORMAL && (
        <View style={styles.containerItemType}>
          <FstImage
            source={R.images.ic_flash_sale_percent}
            style={styles.imageType}
            resizeMode="cover">
            <Text
              children={item?.type === TYPE__PRODUCT.NEWS ? 'Mới' : 'Bán chạy'}
              style={styles.textType}
            />
          </FstImage>
        </View>
      )}
    </TouchableOpacity>
  );
};
export default ProductComponent;
const styles = StyleSheet.create({
  containerPercent: {
    position: 'absolute',
    top: 20,
    left: -5,
  },
  iconPercent: {
    width: 45,
    height: 31,
    alignItems: 'center',
  },
  textPercent: {
    color: colors.white,
    fontWeight: '500',
    top: 3,
    fontSize: 13,
  },
  containerComponent: {
    width: '47%',
    borderRadius: 16,
    backgroundColor: colors.white,
    marginRight: dimension.width * 0.04,
    marginTop: 15,
    minHeight: 265,
  },
  imageProduct: {
    width: '100%',
    height: 165,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  containerInfo: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'space-between',
    flex: 1,
  },
  textName: {
    fontSize: 15,
    lineHeight: 24,
    color: '#262626',
  },
  textPrice: {
    color: '#262626',
    fontSize: 13,
    lineHeight: 22,
    textDecorationLine: 'line-through',
  },
  textPriceSale: {
    color: '#DE080A',
    fontSize: 16,
    lineHeight: 24,
    // fontWeight: '600',
  },
  containerTextBought: {
    width: '100%',
    // height: 14,
  },
  textBought: {
    alignItems: 'center',
    color: '#8C8C8C',
    fontSize: 12,
    lineHeight: 22,
  },
  containerViewOldPrice: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  containerItemType: {
    position: 'absolute',
    left: -5,
    top: 7,
  },
  imageType: {
    height: 30,
    width: 77,
    alignItems: 'center',
  },
  textType: {
    lineHeight: 22,
    fontSize: 15,
    fontWeight: '500',
    color: colors.white,
  },
});
