import R from '@src/assets/R';
import Error from '@src/components/Error/Error';
import FstImage from '@src/components/FstImage/FstImage';
import LoadingProgress from '@src/components/LoadingProgress';
import ScreenWrapper from '@src/components/Screen/ScreenWrapper';
import {
  CALL_API,
  HOME_OPTION,
  SCREEN_ROUTER_APP_CUSTOMER,
  TYPE_OPTIONS,
} from '@src/constant/Constant';
import {colors} from '@src/constant/Theme';
import NavigationUtil from '@src/navigation/NavigationUtil';
import isUser from '@src/utils/isUser';
import React, {memo, useEffect, useState} from 'react';
import isEqual from 'react-fast-compare';
import {
  Dimensions,
  FlatList,
  Platform,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {getStatusBarHeight, isIphoneX} from 'react-native-iphone-x-helper';
import {connect} from 'react-redux';
import CategoryProduct from './components/CategoryProduct';
import HandleButton from './components/HandleButton';
import IconComponent from './components/IconComponent';
import ProductItem from './components/ProductItem';
import SliderLayout from './components/SliderLayout';
import {getApiHome} from './HomeApi';
import ListProductHorizontal from './layout/ListProductHorizontal';

const HomeScreenComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataHome, setDataHome] = useState<any>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getDataHome();
  }, []);

  const getDataHome = async () => {
    try {
      setIsLoading(true);
      setError(false);
      const res = await getApiHome();
      if (res?.status === CALL_API.SUCCESS) {
        setDataHome(res?.data);
      }
      setError(false);
    } catch (e) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const headerComponent = ({item, index}) => {
    const RenderHeader = () => {
      return (
        <View style={styles.header_container}>
          <View style={styles.l_header_container}>
            <FstImage
              style={styles.avatar}
              source={{
                uri: 'https://photocross.net/wp-content/uploads/2020/03/bo-cuc-chup-anh-chan-dung.jpg',
              }}
              resizeMode={'cover'}
            />

            <View style={styles.info_container}>
              <Text style={styles.txt_user} children={'Nguyen Dinh Dat'} />
              <View style={styles.point_container}>
                <View style={styles.rank_name}>
                  <Text style={styles.txt_point} children={'Vang'} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.r_header_container}>
            <HandleButton
              containerStyle={{marginRight: 12}}
              source={R.images.ic_search_focus}
              onPress={async () => {}}
            />
            <IconComponent
              onPress={() => {
                isUser(() => {
                  NavigationUtil.navigate(SCREEN_ROUTER_APP_CUSTOMER.CART);
                });
              }}
              source={R.images.ic_cart_focus}
              count={10}
              isExistIconCount={true}
              buttonStyle={styles.containerIcon}
            />
          </View>
        </View>
      );
    };

    // eslint-disable-next-line @typescript-eslint/no-shadow
    const onPressOption = (item: any) => {
      switch (item?.id) {
        case TYPE_OPTIONS.EXCHANGE_POINT:
          isUser(() => {
            NavigationUtil.navigate(SCREEN_ROUTER_APP_CUSTOMER.EXCHANGE_POINT);
          });
          break;
        case TYPE_OPTIONS.POINT:
          isUser(() => {
            NavigationUtil.navigate(SCREEN_ROUTER_APP_CUSTOMER.POINT_HISTORY);
          });
          break;
        case TYPE_OPTIONS.ORDER:
          isUser(() => {
            NavigationUtil.navigate(SCREEN_ROUTER_APP_CUSTOMER.ORDER_SCREEN);
          });
          break;
        case TYPE_OPTIONS.INSTRUCT:
          // isUser(() => {
          NavigationUtil.navigate(SCREEN_ROUTER_APP_CUSTOMER.INSTRUCT);
          // })
          break;
      }
    };

    const RenderOptions = () => {
      return (
        <View style={styles.option_container}>
          {HOME_OPTION?.map((itm, idx) => {
            return (
              <View key={idx} style={styles.item_option}>
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                  <HandleButton
                    containerStyle={styles.btn_option}
                    styleIcon={styles.icon_option}
                    source={itm?.icon}
                    onPress={() => onPressOption(itm)}
                  />
                  <Text style={styles.name_option} children={itm?.name} />
                </View>
              </View>
            );
          })}
        </View>
      );
    };

    const renderTitle = (title, onPress) => {
      return (
        <View style={[styles.title_body_container]}>
          <Text
            numberOfLines={1}
            style={styles.title_body}
            children={title || 'Chưa cập nhật'}
          />
          {onPress && (
            <TouchableOpacity
              onPress={onPress}
              children={
                <Text style={styles.btn_see_more} children={'Xem thêm'} />
              }
            />
          )}
        </View>
      );
    };

    return (
      <>
        <RenderHeader />
        <RenderOptions />
        <SliderLayout listBanner={dataHome?.listBanner} />
        {renderTitle('Dang mục', () => {
          NavigationUtil.navigate(SCREEN_ROUTER_APP_CUSTOMER.PRODUCT, {
            type: 0,
            category_id: null,
            isFocus: false,
          });
        })}
        {dataHome?.listCategory && dataHome?.listCategory.length > 0 && (
          <CategoryProduct listCategory={dataHome?.listCategory} />
        )}
        {dataHome?.listItemNew && renderTitle('Sản phẩm', () => {})}
        {dataHome?.listItemNew && (
          <ListProductHorizontal item={dataHome?.listItemNew} />
        )}

        {dataHome?.listItemHot && renderTitle('Sản phẩm nổi bật', () => {})}

        {dataHome?.listItemHot && (
          <ListProductHorizontal item={dataHome?.listItemHot} />
        )}

        {dataHome?.listNews &&
          renderTitle('Sản phâm mớI', () => {
            NavigationUtil.navigate(SCREEN_ROUTER_APP_CUSTOMER.NEW_SCREEN);
          })}
      </>
    );
  };

  const renderItem = ({item, index}) => (
    <ProductItem item={item} index={index} />
  );

  if (isLoading) return <LoadingProgress />;
  if (error) return <Error reload={getDataHome} />;

  return (
    <>
      <ScreenWrapper
        backgroundHeader={colors.backgroundHeader}
        borderBottomHeader={colors.backgroundHeader}
        unsafe
        style={{paddingTop: 50}}
        children={
          <FlatList
            showsVerticalScrollIndicator={false}
            data={dataHome?.listNews || []}
            style={{flex: 1}}
            keyExtractor={(item, index) => ` ${index}`}
            numColumns={2}
            refreshControl={
              <RefreshControl refreshing={false} onRefresh={getDataHome} />
            }
            renderItem={renderItem}
            // ListHeaderComponent={headerComponent}
          />
        }
      />
    </>
  );
};

const HomeScreen = memo(HomeScreenComponent, isEqual);

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
const styles = StyleSheet.create({
  l_header_container: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  header_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '4%',
  },
  point_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  rank_name: {
    backgroundColor: colors.blue,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  txt_user: {
    color: colors.black,
  },
  ic_point: {
    width: 24,
    height: 24,
  },
  txt_point: {
    color: colors.white,
  },
  info_container: {
    flexDirection: 'column',
    paddingLeft: 16,
  },
  r_header_container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  linearGradient: {
    flex: 1,
    paddingTop:
      getStatusBarHeight() +
      (Platform.OS === 'android' ? 0 : !isIphoneX() ? 20 : 20),
    backgroundColor: 'red',
  },
  loadMore: {marginVertical: 15},
  containerLoadMore: {
    width: Dimensions.get('screen').width - 20,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  btn_option: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    width: 50,
    height: 50,
  },

  icon_option: {
    width: 28,
    height: 28,
  },

  name_option: {
    color: colors.black,
    paddingTop: 8,
  },
  option_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5%',
  },
  item_option: {
    flex: 1,
    alignItems: 'center',
  },
  btn_see_more: {
    color: colors.primary,
    marginLeft: 10,
  },

  title_body_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    alignItems: 'center',
    marginHorizontal: 20,
  },

  title_body: {
    color: colors.black,
    flex: 1,
  },
  containerIcon: {
    backgroundColor: colors.white,
    // width: 28,
    // height: 28,
  },

  btn_login: {
    paddingLeft: 16,
  },
  txt_login: {
    color: colors.black,
  },
});
