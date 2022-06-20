import R from '@src/assets/R';
import FstImage from '@src/components/FstImage/FstImage';
import {colors} from '@src/constant/Theme';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {Source} from 'react-native-fast-image';

interface HandleButtonProps {
  onPress?: () => void;
  source?: Source | null;
  styleIcon?: any;
  containerStyle?: StyleProp<ViewStyle>;
  text?: string;
  textStyle?: StyleProp<TextStyle>;
}

const HandleButton = (props: HandleButtonProps) => {
  const {onPress, source, styleIcon, containerStyle, text, textStyle} = props;

  const styles = StyleSheet.create({
    btn_container: {
      backgroundColor: colors.white,
      paddingHorizontal: 8,
      paddingVertical: 8,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    icon: {
      width: 24,
      height: 24,
      marginRight: text ? 8 : 0,
    },
    v_text: {
      textAlign: 'center',
    },
  });
  return (
    <TouchableOpacity
      style={[styles.btn_container, containerStyle]}
      onPress={onPress}>
      {source && (
        <FstImage
          style={[styles.icon, styleIcon]}
          source={source ? source : R.images.ic_cart}
          // resizeMode={'contain'}
        />
      )}
      {text && (
        <Text
          numberOfLines={1}
          style={[styles.v_text, textStyle]}
          children={text}
        />
      )}
    </TouchableOpacity>
  );
};

export default HandleButton;
