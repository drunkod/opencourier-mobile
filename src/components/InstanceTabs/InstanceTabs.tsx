import React from 'react';
import {
  StyleProp,
  ViewStyle,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { styles } from './InstanceTabs.styles';
import { InstanceTabItem } from '@app/types/types';
import { useTranslation } from 'react-i18next';
import { Colors } from '@app/styles/colors';

type Props = {
  style?: StyleProp<ViewStyle>;
  selected: InstanceTabItem;
  onPress: (tab: InstanceTabItem) => void;
};

export const InstanceTabs = ({ style, selected, onPress }: Props) => {
  const { t } = useTranslation();

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={[
          styles.button,
          selected === InstanceTabItem.Description && {
            backgroundColor: Colors.gray20,
          },
        ]}
        onPress={() => onPress(InstanceTabItem.Description)}>
        <Text style={styles.text}>
          {t(`translations:${InstanceTabItem.Description}`)}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          selected === InstanceTabItem.Rules && {
            backgroundColor: Colors.gray20,
          },
        ]}
        onPress={() => onPress(InstanceTabItem.Rules)}>
        <Text style={styles.text}>
          {t(`translations:${InstanceTabItem.Rules}`)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
