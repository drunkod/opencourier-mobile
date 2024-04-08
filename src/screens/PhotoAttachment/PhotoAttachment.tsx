import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Linking,
  Platform,
} from 'react-native';
import { Images } from '@app/utilities/images';
import { styles } from './PhotoAttachment.styles';
import { MainScreenProp, MainScreens } from '@app/navigation/main/types';
import {
  BackButtonType,
  BackNavButton,
} from '@app/components/BackNavButton/BackNavButton';
import { Button, ButtonType } from '@app/components/Button/Button';
import { Colors } from '@app/styles/colors';
import { RNCamera, FaceDetector } from 'react-native-camera';
import { check, PERMISSIONS, request } from 'react-native-permissions';

enum ScreenState {
  requestingPermission,
  takingPhoto,
  photoTaken,
}

type Props = MainScreenProp<MainScreens.PhotoAttachment>;

export const PhotoAttachment = ({ navigation, route }: Props) => {
  const [screenState, setScreenState] = useState<ScreenState>(
    ScreenState.requestingPermission,
  );
  const [flashOn, setFlashOn] = useState<boolean>(false);
  const [photoPath, setPhotoPath] = useState<string | undefined>(undefined);
  const { onAttach } = route.params;
  const camera = useRef<RNCamera>(null);

  const handleAttach = async () => {
    if (photoPath) {
      const response = await fetch(photoPath);
      const data = await response.blob();
      const filename = photoPath.split('/').pop();
      const ext = photoPath.split('.').pop();
      const metadata = `image/${ext}`;
      const file = {
        uri: photoPath,
        data: data,
        name: filename!,
        type: metadata,
      }
      onAttach(file);
      navigation.goBack();
    }
  };

  const openSettings = async () => {
    await Linking.openSettings();
  };

  const askPermission = async () => {
    if (Platform.OS === 'ios') {
      const permission = await request(PERMISSIONS.IOS.CAMERA);
      if (permission === 'granted') {
        setScreenState(ScreenState.takingPhoto);
      } else {
        openSettings();
      }
    }

    if (Platform.OS === 'android') {
      const permission = await request(PERMISSIONS.ANDROID.CAMERA);
      if (permission === 'granted') {
        setScreenState(ScreenState.takingPhoto);
      } else {
        openSettings();
      }
    }
  };

  useEffect(() => {
    const checkPermissions = async () => {
      if (Platform.OS === 'ios') {
        const res = await check(PERMISSIONS.IOS.CAMERA);
        if (res === 'granted') {
          setScreenState(ScreenState.takingPhoto);
        } else {
          askPermission();
        }
      }
      if (Platform.OS === 'android') {
        const res = await check(PERMISSIONS.ANDROID.CAMERA);
        if (res === 'granted') {
          setScreenState(ScreenState.takingPhoto);
        } else {
          askPermission();
        }
      }
    };
    checkPermissions();
  }, []);

  const takePhoto = async () => {
    const options = { base64: false };
    const data = await camera.current?.takePictureAsync(options);
    if (data?.uri) {
      setPhotoPath(data?.uri);
      setScreenState(ScreenState.photoTaken);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safe}>
        <BackNavButton
          onPress={() => navigation.goBack()}
          type={BackButtonType.black}
        />

        {screenState === ScreenState.requestingPermission && (
          <>
            <Text style={styles.grantText}>
              {'Grant Open Deli \naccess to you Camera.'}
            </Text>
            <Button
              style={styles.buttonSettings}
              title="Settings"
              type={ButtonType.white}
              onPress={() => openSettings()}
            />
          </>
        )}

        {screenState === ScreenState.photoTaken && photoPath && (
          <>
            <View style={styles.containerImage}>
              <Image source={{ uri: photoPath }} style={styles.imageTaken} />
            </View>
            <Text style={styles.textAttach}>
              Photo taken. Attach this photo?
            </Text>
            <View style={styles.containerButtons}>
              <View style={styles.placeholder} />
              <TouchableOpacity
                style={styles.containerButtonOk}
                onPress={handleAttach}>
                <View style={styles.containerCheckmark}>
                  <Image source={Images.Checkmark} style={styles.checkmark} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.containerRetake}
                onPress={() => {
                  setPhotoPath(undefined);
                  setScreenState(ScreenState.takingPhoto);
                }}>
                <Image source={Images.ArrowCounterClockwise} />
              </TouchableOpacity>
            </View>
          </>
        )}

        {screenState === ScreenState.takingPhoto && (
          <>
            <RNCamera
              ref={camera}
              style={styles.camera}
              type={RNCamera.Constants.Type.back}
              flashMode={RNCamera.Constants.FlashMode.on}
            />
            <Text style={styles.textAttach}>
              Show the customer where you left the order.
            </Text>
            <View style={styles.containerButtons}>
              <View style={styles.placeholder} />
              <TouchableOpacity
                style={styles.containerButtonOk}
                onPress={takePhoto}>
                <View style={styles.containerCheckmark}>
                  <Image source={Images.CameraBlack} style={styles.checkmark} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.containerRetake}
                onPress={() => setFlashOn(!flashOn)}>
                <Image
                  source={Images.Flashlight}
                  style={{ tintColor: flashOn ? 'yellow' : Colors.white }}
                />
              </TouchableOpacity>
            </View>
          </>
        )}
      </SafeAreaView>
    </View>
  );
};
