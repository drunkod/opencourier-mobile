import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import {
  OnboardingScreen,
  OnboardingScreenProp,
} from '@app/navigation/onboarding/types';
import { styles } from './JoinInstance.styles';
import { useTranslation } from 'react-i18next';
import { InstanceHeader } from '@app/components/InstanceHeader/InstanceHeader';
import { Button, ButtonType } from '@app/components/Button/Button';
import { Images } from '@app/utilities/images';
import { TextField } from '@app/components/TextField/TextField';
import { validateEmail } from '@app/utilities/text';

type Props = OnboardingScreenProp<OnboardingScreen.JoinInstance>;

type TextFieldErrors = {
  name: string | undefined;
  username: string | undefined;
  email: string | undefined;
  password: string | undefined;
  confrimPassword: string | undefined;
};

export const JoinInstance = ({ navigation, route }: Props) => {
  const { instance } = route.params;
  const { t } = useTranslation();
  const [name, setName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confrimPassword, setConfirmPassword] = useState<string>('');

  const [errors, setErrors] = useState<TextFieldErrors>({
    name: undefined,
    username: undefined,
    email: undefined,
    password: undefined,
    confrimPassword: undefined,
  });

  const validateFields = () => {
    var oldState = errors;

    if (email.length > 0) {
      if (validateEmail(email)) {
        oldState.email = undefined;
      } else {
        oldState.email = 'Email invalid!';
      }
    }

    if (password.length > 0) {
      if (password.length < 5) {
        oldState.password = 'Password too short!';
      } else {
        oldState.password = undefined;
      }
    }

    if (confrimPassword.length > 0) {
      if (confrimPassword !== password) {
        oldState.password = 'Passwords do not match!';
      } else {
        oldState.password = undefined;
      }
    }

    setErrors(oldState);
  };

  useEffect(() => {
    validateFields();
  }, [name, username, email, password, confrimPassword]);

  return (
    <View style={styles.container}>
      <Image source={Images.NoiseBG} style={styles.background} />
      <InstanceHeader
        instance={instance}
        headerPurpose="join"
        onBack={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={styles.content}>
        <TextField
          error={errors.name}
          value={name}
          placeholder={t('translations:full_name')}
          onChangeText={setName}
          onBlur={validateFields}
          style={styles.textField}
        />
        <TextField
          error={errors.username}
          value={username}
          placeholder={t('translations:user_name')}
          onChangeText={setUsername}
          onBlur={validateFields}
          style={styles.textField}
        />
        <TextField
          error={errors.email}
          value={email}
          placeholder={t('translations:email_address')}
          onChangeText={setEmail}
          onBlur={validateFields}
          style={styles.textField}
        />
        <TextField
          error={errors.password}
          secureTextEntry
          value={password}
          placeholder={t('translations:password')}
          onChangeText={setPassword}
          onBlur={validateFields}
          style={styles.textField}
        />
        <TextField
          error={errors.confrimPassword}
          secureTextEntry
          value={confrimPassword}
          placeholder={t('translations:confirm_password')}
          onChangeText={setConfirmPassword}
          onBlur={validateFields}
          style={styles.textField}
        />

        <Button
          icon={Images.PlusCircle}
          type={ButtonType.green}
          title={t('translations:join_instance')}
          onPress={() =>
            navigation.navigate(OnboardingScreen.JoinInstance, {
              instance: instance,
            })
          }
          style={{ marginBottom: 22 }}
        />

        <View style={styles.separator} />

        <TouchableOpacity
          style={styles.containerBottom}
          onPress={() =>
            navigation.navigate(OnboardingScreen.LoginInstance, {
              instance: instance,
            })
          }>
          <Text style={styles.textButton}>
            {t('translations:already_have_account')}
            <Text> </Text>
            <Text style={{ textDecorationLine: 'underline' }}>
              {t('translations:log_in')}
            </Text>
          </Text>
          <Image source={Images.Logout} style={styles.imageLogin} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.containerBottom}
          onPress={() => navigation.navigate(OnboardingScreen.Welcome)}>
          <Text style={styles.textButton}>
            {t('translations:looking_for_instances')}
            <Text> </Text>
            <Text style={{ textDecorationLine: 'underline' }}>
              {t('translations:search_here')}
            </Text>
          </Text>
          <Image source={Images.SearchSmall} style={styles.imageLogin} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
