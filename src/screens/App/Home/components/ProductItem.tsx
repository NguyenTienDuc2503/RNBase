import FstImage from '@src/components/FstImage/FstImage';
import {SCREEN_ROUTER_APP_CUSTOMER} from '@src/constant/Constant';
import theme, {colors} from '@src/constant/Theme';
import NavigationUtil from '@src/navigation/NavigationUtil';
import React, {memo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
interface NewItem {
  newsID: any;
  title: string;
  urlImage: any;
}
interface State {
  item: NewItem;
}
const ProductItem = (props: State) => {
  const {item} = props;
  return (
    <TouchableOpacity
      onPress={() => {
        NavigationUtil.navigate(SCREEN_ROUTER_APP_CUSTOMER.NEWS_DETAIL_SCREEN, {
          id: item?.newsID,
        });
      }}
      style={styles.containerProduct}
      children={
        <>
          <FstImage source={{uri: item?.urlImage}} style={styles.img_card} />
          <View style={{flex: 1, justifyContent: 'space-between'}}>
            <Text
              style={[styles.txtName]}
              children={item?.title}
              numberOfLines={2}
            />
          </View>
        </>
      }
    />
  );
};

export default memo(ProductItem);

const styles = StyleSheet.create({
  containerProduct: {
    width: (theme.dimension.width * 0.88) / 2,
    borderRadius: 12,
    marginLeft: theme.dimension.width * 0.04,
    marginBottom: 16,
  },
  txtPriceSale: {
    color: colors.black,
    textDecorationLine: 'line-through',
  },
  txtPrice: {
    paddingHorizontal: '8%',
    paddingVertical: 12,
    color: colors.black,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  txtSalePercent: {
    color: colors.error.primary,
    paddingLeft: 8,
    marginBottom: 8,
  },
  price_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: '8%',
    paddingTop: '4%',
    alignItems: 'flex-end',
  },
  img_card: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 12,
    marginBottom: 12,
  },
  txtName: {
    color: colors.black,
  },
});
