import {colors} from '@src/constant/Theme';
import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {SkypeIndicator} from 'react-native-indicators';

export default class LoadingProgress extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerLoading}>
          <SkypeIndicator color={colors.primary} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.3)',
    elevation: Platform.OS == 'android' ? 4 : 0,
  },
  containerLoading: {
    height: 140,
    // backgroundColor: 'white',
    // backgroundColor: 'rgba(0, 0, 0, 0.1)',
    padding: 30,
    borderRadius: 10,
  },
});
