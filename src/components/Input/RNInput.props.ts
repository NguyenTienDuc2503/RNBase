import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  ReturnKeyTypeOptions,
  StyleProp,
  TextInputFocusEventData,
  TextInputSubmitEditingEventData,
  ViewStyle,
} from 'react-native';

export interface RNInputProps {
  value?: string;
  ref?: any;
  placeholder?: string;
  inputStyle?: StyleProp<ViewStyle>;
  leftIcon?: any;
  rightIcon?: any;
  label?: string;
  isRequite?: boolean;
  borderBottomColor?: any;
  rightText?: string | undefined;
  returnKeyType?: ReturnKeyTypeOptions;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  errorMeg?: any;
  autoFocus?: boolean;
  maxLength?: number;
  disabled?: boolean;
  numberOfLines?: any;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onChangeText?: (text: string) => void;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onRight?: () => void;
  inputContainerStyle?: StyleProp<ViewStyle>;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void;
  style?: any;
  multiline?: any;
}
