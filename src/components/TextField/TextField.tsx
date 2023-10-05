import React, { forwardRef, useState } from 'react';
import { Colors } from '@app/styles/colors';
import { Images } from '@app/utilities/images';
import {
  StyleProp,
  Text,
  TextInput,
  View,
  ViewStyle,
  TouchableOpacity,
  Image,
  TextInputProps,
} from 'react-native';
import { styles } from './TextField.styles';

type Props = {
  error?: string;
  style?: StyleProp<ViewStyle>;
  maxLength?: number;
  emailCheck?: boolean;
  emailValid?: boolean;
};

type TextFieldProps = TextInputProps & Props;

export const TextField = forwardRef((props: TextFieldProps, ref) => {
  const {
    value,
    placeholder,
    error,
    style,
    secureTextEntry = false,
    maxLength,
    emailCheck = false,
    emailValid = false,
  } = props;
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [inputTextHidden, setInputTextHidden] =
    useState<boolean>(secureTextEntry);

  return (
    <View style={[styles.container, style]}>
      <View
        style={[
          styles.inputContainer,
          { borderColor: error === undefined ? Colors.gray1 : Colors.red2 },
        ]}>
        <View style={styles.containerTextField}>
          {(isFocused || (value && value.length > 0)) && (
            <Text style={styles.textLabel}>{placeholder}</Text>
          )}
          <TextInput
            {...props}
            ref={ref}
            style={styles.textInput}
            secureTextEntry={inputTextHidden}
            autoCapitalize={'none'}
            placeholder={isFocused ? '' : placeholder}
            maxLength={maxLength}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </View>
        {emailCheck && emailValid && (
          <Image source={Images.Checkmark} style={styles.checkmark} />
        )}
        {secureTextEntry && (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setInputTextHidden(!inputTextHidden)}>
            <Text style={styles.textShow}>
              {inputTextHidden ? 'show' : 'hide'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.labelError}>{error}</Text>}
    </View>
  );
});
