import React from 'react';
import {
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Images } from '@app/utilities/images';
import { styles } from './PhotoAttachment.styles';
import { MainScreenProp, MainScreens } from '@app/navigation/main/types';
import {
  BackButtonType,
  BackNavButton,
} from '@app/components/BackNavButton/BackNavButton';

type Props = MainScreenProp<MainScreens.PhotoAttachment>;

export const PhotoAttachment = ({ navigation, route }: Props) => {
  const { photo, onAttach, onRetake } = route.params;

  const handleAttach = () => {
    onAttach(photo);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safe}>
        <BackNavButton
          onPress={() => navigation.goBack()}
          type={BackButtonType.black}
        />
        <View style={styles.containerImage}>
          <Image source={photo} style={styles.imageTaken} />
        </View>
        <Text style={styles.textAttach}>Photo taken. Attach this photo?</Text>
        <View style={styles.containerButtons}>
          <View style={styles.placeholder} />
          <TouchableOpacity
            style={styles.containerButtonOk}
            onPress={handleAttach}>
            <View style={styles.containerCheckmark}>
              <Image source={Images.Checkmark} style={styles.checkmark} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerRetake} onPress={onRetake}>
            <Image source={Images.ArrowCounterClockwise} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};
