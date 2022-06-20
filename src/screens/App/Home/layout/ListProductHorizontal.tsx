import {dimension} from '@src/constant/Theme';
import React, {memo} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import ProductComponent from '../../Product/components/ProductComponet';

const ListProductHorizontal = (props: any) => {
  const {item} = props;
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={styles.listProductHorizontal}>
      {item?.map((items: any, index: number) => {
        return (
          <ProductComponent
            item={items}
            styleContainer={styles.containerItem}
            styleImage={styles.imageStyle}
            key={index}
          />
        );
      })}
    </ScrollView>
  );
};

export default memo(ListProductHorizontal);

const styles = StyleSheet.create({
  containerItem: {
    width: 170,
    marginTop: 0,
  },
  imageStyle: {
    width: '100%',
  },
  listProductHorizontal: {
    width: dimension.width,
    marginBottom: 20,
    paddingHorizontal: '4%',
  },
});
