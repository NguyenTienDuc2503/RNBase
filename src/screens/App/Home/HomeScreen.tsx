import Error from '@src/components/Error/Error';
import LoadingProgress from '@src/components/LoadingProgress';
import ScreenWrapper from '@src/components/Screen/ScreenWrapper';
import {CALL_API} from '@src/constant/Constant';
import {colors} from '@src/constant/Theme';
import React, {memo, useEffect, useState} from 'react';
import isEqual from 'react-fast-compare';
import {
  Dimensions,
  FlatList,
  Platform,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import {getStatusBarHeight, isIphoneX} from 'react-native-iphone-x-helper';
import {connect} from 'react-redux';
import ProductItem from './components/ProductItem';
import {getApiHome} from './HomeApi';

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
