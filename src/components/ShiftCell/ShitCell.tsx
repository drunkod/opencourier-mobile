import React from 'react';
import {
  Image,
  StyleProp,
  Switch,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { styles } from './ShiftCell.styles';
import { Images } from '@app/utilities/images';
import { useTranslation } from 'react-i18next';
import { ShiftAvailability, ShiftRange } from '@app/types/types';
import { Colors } from '@app/styles/colors';
import moment from 'moment';
import { formatShift } from '@app/utilities/dates';

type Props = {
  style?: StyleProp<ViewStyle>;
  item: ShiftAvailability;
  isSelected: boolean;
  onAdd: (item: ShiftAvailability) => void;
  onDelete: (item: ShiftAvailability, range: ShiftRange) => void;
  onSelect: (item: ShiftAvailability) => void;
};

export const ShiftCell = ({
  style,
  item,
  isSelected = false,
  onAdd,
  onDelete,
  onSelect,
}: Props) => {
  const { t } = useTranslation();

  return (
    <View style={[style]}>
      <TouchableOpacity
        style={styles.content}
        onPress={() => onSelect && onSelect(item)}>
        <Image
          source={isSelected ? Images.RadioSelected : Images.RadioUnselected}
          style={styles.imageRadioButton}
        />
        <Text style={styles.textTitle}>{t(`translations:${item.day}`)}</Text>
        <View style={{ flex: 1, height: 0 }} />
        {isSelected && (
          <TouchableOpacity
            style={styles.buttonDeleteAdd}
            onPress={() => onAdd(item)}>
            <Text>+</Text>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
      {isSelected && (
        <View style={styles.containerRanges}>
          {item.shifts.map(obj => (
            <View style={styles.containerShift}>
              <Text style={styles.textTime}>{obj.start}</Text>
              <Text> - </Text>
              <Text style={styles.textTime}>{obj.end}</Text>
              <View style={{ height: 0, flex: 1 }} />
              <TouchableOpacity
                onPress={() => onDelete(item, obj)}
                style={styles.buttonDeleteAdd}>
                <Image source={Images.Trash} style={styles.iconTrash} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}
      <View style={styles.separator} />
    </View>
  );
};
