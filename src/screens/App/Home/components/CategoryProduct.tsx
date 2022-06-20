import {SCREEN_ROUTER_APP_CUSTOMER} from '@src/constant/Constant';
import {colors} from '@src/constant/Theme';
import NavigationUtil from '@src/navigation/NavigationUtil';
import React, {memo} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import HandleButton from './HandleButton';
const CategoryProduct = ({listCategory}) => {
  const renderArray = (number: number) => {
    let n = number % 6 === 0 ? number / 6 : number / 6 + 1;
    let array: any = [];
    for (let i = 0; i < n; i++) {
      array.push(i + 1);
    }
    return array;
  };
  let indexS = listCategory?.length ?? 0;
  return (
    <>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.category_container}>
        <View>
          {indexS < 6 ? (
            <View style={[styles.containerList]}>
              {listCategory?.map(
                (
                  item: {imageUrl: any; id: any; name: string | undefined},
                  index: number,
                ) => {
                  if (index < 6) {
                    return (
                      <HandleButton
                        key={index}
                        containerStyle={[styles.itm_category]}
                        styleIcon={styles.icon_category}
                        source={{uri: item?.imageUrl}}
                        onPress={async () => {
                          await NavigationUtil.navigate(
                            SCREEN_ROUTER_APP_CUSTOMER.PRODUCT,
                            {
                              category_id: item.id,
                              index: index,
                              type: 0,
                            },
                          );
                        }}
                        text={item?.name}
                      />
                    );
                  }
                },
              )}
            </View>
          ) : (
            <>
              {renderArray(indexS)?.map((e: number, ind: number) => {
                return (
                  <View
                    style={[styles.containerList, styles.containerListTop]}
                    key={ind}>
                    {listCategory?.map(
                      (
                        item: {
                          imageUrl: any;
                          id: any;
                          name: string | undefined;
                        },
                        index: number,
                      ) => {
                        if (index >= e * 6 - 6 && index < e * 6) {
                          return (
                            <HandleButton
                              key={index}
                              containerStyle={styles.itm_category}
                              styleIcon={styles.icon_category}
                              source={{uri: item?.imageUrl}}
                              onPress={async () => {
                                await NavigationUtil.navigate(
                                  SCREEN_ROUTER_APP_CUSTOMER.PRODUCT,
                                  {
                                    category_id: item.id,
                                    index: index,
                                    type: 0,
                                  },
                                );
                              }}
                              text={item?.name}
                            />
                          );
                        }
                      },
                    )}
                  </View>
                );
              })}
            </>
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default memo(CategoryProduct);

const styles = StyleSheet.create({
  category_container: {
    flexDirection: 'row',
    paddingHorizontal: '4%',
    marginBottom: 20,
  },
  itm_category: {
    borderRadius: 16,
    paddingHorizontal: 13,
    marginRight: 10,
  },
  icon_category: {
    color: colors.black,
  },
  containerList: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerListTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
