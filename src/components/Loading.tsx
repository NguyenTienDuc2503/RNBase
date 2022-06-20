import {colors} from '@src/constant/Theme';
import React, {Component} from 'react';
import {View} from 'react-native';
import {BarIndicator} from 'react-native-indicators';

export default class Loading extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.white,
        }}>
        <BarIndicator color={colors.primary} />
      </View>
    );
  }
}
