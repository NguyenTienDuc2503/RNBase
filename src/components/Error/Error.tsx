/* eslint-disable prettier/prettier */
import R from '@src/assets/R';
import {colors} from '@src/constant/Theme';
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Props} from './Error.props';
const {width} = Dimensions.get('window');
const Error = (props?: Props) => {
  return (
    <View style={styles.container}>
      <FastImage
        source={R.images.ic_404_error}
        style={styles.image}
        resizeMode={'contain'}
      />
      <Text style={styles.description}>
        {
          'Kết nối với mạng hoặc máy chủ bị lỗi. Bạn vui lòng kiểm tra lại kết nối mạng và thử lại.'
        }
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => props?.reload()}>
        <Text style={styles.textReload}>Thử lại</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Error;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  image: {
    width: width,
    height: width / 2,
    resizeMode: 'contain',
  },
  button: {
    // backgroundColor: colors.primary,
    paddingHorizontal: '10%',
    paddingVertical: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  textReload: {
    color: colors.primary,
  },
  description: {
    marginTop: 8,
    marginBottom: '10%',
    marginHorizontal: 25,
    lineHeight: 25,
    textAlign: 'center',
  },
});
