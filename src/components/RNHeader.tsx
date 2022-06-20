import R from '@src/assets/R';
import theme, {colors} from '@src/constant/Theme';
import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {Header} from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import NavigationUtil from '../navigation/NavigationUtil';

interface Props {
  color?: string;
  backgroundHeader?: string;
  borderBottomHeader?: string;
  back?: boolean;
  /**
   * View nút phải
   */
  rightComponent?: React.ReactNode;
  /**
   * View nút trái
   */
  leftComponent?: React.ReactNode;
  /**
   * Title thanh header
   */
  titleHeader: string;
  onBack?: any;
}

interface BackProps {
  style?: ViewStyle;
  onBack?: () => void;
}

export class BackButton extends Component<BackProps> {
  render() {
    const {style, onBack} = this.props;
    return (
      <TouchableOpacity
        style={[style || styles.leftComp]}
        onPress={onBack ? onBack : NavigationUtil.goBack}>
        <FastImage
          source={R.images.ic_back}
          style={{marginLeft: 10, width: 24, height: 24}}
          tintColor={theme.colors.black}
          resizeMode="contain"
        />
      </TouchableOpacity>
    );
  }
}

export default class RNHeader extends Component<Props> {
  render() {
    const {
      color,
      back,
      onBack,
      titleHeader,
      rightComponent,
      leftComponent,
      borderBottomHeader,
      backgroundHeader,
    } = this.props;
    return (
      <Header
        placement="center"
        containerStyle={{
          backgroundColor: backgroundHeader || theme.colors.primary,
          borderBottomColor: borderBottomHeader || theme.colors.primary,
          height: Platform.OS == 'ios' ? getStatusBarHeight() + 60 : undefined,
        }}
        leftComponent={
          back || onBack ? <BackButton onBack={onBack} /> : leftComponent
        }
        centerComponent={
          <Text
            style={[
              {
                fontSize: 18,
                marginTop: back ? '4%' : 0,
                textAlign: 'center',
                fontFamily: R.fonts.sf_semi_bold,
              },
              {color: color || colors.text.header},
            ]}>
            {titleHeader}
          </Text>
        }
        rightComponent={rightComponent}
        statusBarProps={{
          //  barStyle: 'light-content',
          barStyle: 'dark-content',
          // translucent: true,
          backgroundColor: 'transparent',
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  leftComp: {
    // height: '100%',
    height: 45,

    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightComp: {
    // height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
});
