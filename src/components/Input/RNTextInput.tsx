import {colors} from '@src/constant/Theme';
import {isEqual} from 'lodash';
import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Input, Text} from 'react-native-elements';
import FstImage from '../FstImage/FstImage';
import {RNInputProps} from './RNInput.props';

const InputComponent = (props: RNInputProps) => {
  const {
    placeholder,
    leftIcon,
    rightIcon,
    label,
    secureTextEntry,
    errorMeg,
    onChangeText,
    onFocus,
    keyboardType,
    onRight,
    disabled,
    onBlur,
    autoFocus,
    value,
    isRequite,
    inputStyle,
    rightText,
    returnKeyType,
    onSubmitEditing,
    maxLength,
    ref,
    inputContainerStyle,
    borderBottomColor,
    multiline,
    style,
    numberOfLines,
  } = props;

  return (
    <View style={inputStyle}>
      <Input
        label={() => (
          <Text style={styles.labelStyle}>
            {label}
            {!!isRequite && <Text style={styles.isRequite} children={' *'} />}
          </Text>
        )}
        multiline={multiline}
        numberOfLines={numberOfLines ? numberOfLines : 1}
        ref={ref}
        autoFocus={autoFocus || false}
        onFocus={onFocus}
        maxLength={maxLength}
        placeholder={placeholder}
        disabled={disabled}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        onBlur={onBlur}
        returnKeyType={returnKeyType}
        keyboardType={keyboardType}
        onSubmitEditing={onSubmitEditing}
        autoCapitalize={'none'}
        value={value}
        errorMessage={errorMeg}
        errorStyle={styles.errorStyle}
        style={[multiline && {textAlignVertical: 'top'}, style]}
        inputContainerStyle={[
          {paddingLeft: leftIcon ? 0 : 10},
          inputContainerStyle,
        ]}
        leftIcon={
          !!leftIcon && (
            <FstImage
              source={leftIcon}
              style={{width: 20, height: 20, marginRight: 5}}
              resizeMode={'contain'}
            />
          )
        }
        rightIcon={
          !!rightIcon ? (
            <TouchableOpacity onPress={onRight}>
              <FstImage
                source={rightIcon}
                style={{width: 20, height: 20}}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
          ) : (
            !!rightText && (
              <Text style={styles.rightText} children={rightText} />
            )
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    color: colors.black,
  },
  errorStyle: {
    fontSize: 15,
  },
  isRequite: {
    color: 'red',
  },
  rightText: {
    color: colors.black,
  },
});

const RNTextInput = memo(InputComponent, isEqual);

export default RNTextInput;
