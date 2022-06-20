import FstImage from '@src/components/FstImage/FstImage';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '@src/constant/Theme';
interface IconProps {
  source?: any;
  buttonStyle?: any;
  iconStyle?: any;
  onPress: () => void;
  iconSmall?: any;
  count?: number;
  containerCountStyle?: any;
  textCountStyle?: any;
  isExistIconCount?: boolean;
}
const IconComponent = (props: IconProps) => {
  const {
    buttonStyle,
    iconSmall,
    iconStyle,
    onPress,
    source,
    count,
    containerCountStyle,
    isExistIconCount,
    textCountStyle,
  } = props;
  return (
    <TouchableOpacity
      style={[style_icon.button, buttonStyle]}
      onPress={onPress}>
      <FstImage source={source} style={[style_icon.icon, iconStyle]} />
      {iconSmall ? (
        iconSmall
      ) : isExistIconCount && !!count && count > 0 ? (
        <View style={[style_icon.viewCount, containerCountStyle]}>
          <Text
            children={`${
              count && count > 0 ? (count > 99 ? '99+' : count) : ''
            }`}
            style={[style_icon.textCount, textCountStyle]}
          />
        </View>
      ) : (
        <View />
      )}
    </TouchableOpacity>
  );
};
export default IconComponent;
const style_icon = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  viewCount: {
    // width: 18,
    height: 18,
    minWidth: 18,
    borderRadius: 10,
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 3,
    right: -2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1,
    paddingHorizontal: 2,
  },
  textCount: {
    color: colors.white,
    fontSize: 10,
    lineHeight: 11,
    textAlign: 'center',
    fontWeight: '500',
  },
});
