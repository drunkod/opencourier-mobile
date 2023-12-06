import React, { useMemo } from 'react';
import {
  Image,
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { styles } from './QuickNote.styles';
import { Colors } from '@app/styles/colors';
import { CustomerNotes } from '@app/types/types';
import { Images } from '@app/utilities/images';
import { useTranslation } from 'react-i18next';

type Props = {
  style?: StyleProp<ViewStyle>;
  text: string;
  selected: boolean;
  onPress: (note: string) => void;
};

export const QuickNote = ({ style, text, selected, onPress }: Props) => {
  const { t } = useTranslation();
  const icon = useMemo(() => {
    switch (text) {
      case CustomerNotes.BellnotRung:
        return Images.BellSlash;
      case CustomerNotes.DontBlockDoor:
        return Images.DoorOpen;
      case CustomerNotes.HandleWithCare:
        return Images.Fire;
      case CustomerNotes.PreventLeaks:
        return Images.Drop;
      default:
        return null;
    }
  }, [text]);

  return (
    <TouchableOpacity
      onPress={() => onPress(text)}
      style={[
        styles.container,
        style,
        selected && {
          borderColor: Colors.green1,
          backgroundColor: Colors.green1,
        },
      ]}>
      {icon && (
        <Image
          source={icon}
          style={[
            styles.icon,
            { tintColor: selected ? Colors.green5 : Colors.black1 },
          ]}
        />
      )}
      <Text
        style={[
          styles.text,
          selected && { color: Colors.white },
          icon && { marginLeft: 8 },
        ]}>
        {t(`translations:${text}`)}
      </Text>
    </TouchableOpacity>
  );
};
