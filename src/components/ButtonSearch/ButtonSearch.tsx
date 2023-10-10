import React from 'react';
import {
  Image,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import { Images } from '@app/utilities/images';
import { styles } from './ButtonSearch.styles';

type Props = {
  style?: StyleProp<ViewStyle>;
  onPress: (toggled: boolean) => void;
  isSearching: boolean;
};

export const ButtonSearch = ({ style, onPress, isSearching }: Props) => {
  const onToggle = () => {
    onPress(!isSearching);
  };

  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onToggle}>
      <View
        style={[
          isSearching && styles.containerOutToggled,
          !isSearching && styles.containerOutUntoggled,
        ]}>
        <View style={styles.containerIn}>
          <Image source={Images.Search} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
