import React, { useMemo, useState } from 'react';
import {
  Image,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { styles } from './PickupInstructionCell.styles';
import { CourierTip } from '@app/types/types';
import { Images } from '@app/utilities/images';
import { Colors } from '@app/styles/colors';
import { SCREEN_WIDTH } from '@app/utilities/constants';

type Props = {
  style?: StyleProp<ViewStyle>;
  instruction: CourierTip;
  endorsed: boolean;
  editDisabled: boolean;
  onPress: (instruction: CourierTip) => void;
  onEdit?: (instruction: CourierTip) => void;
  onDelete?: (instruction: CourierTip) => void;
};

enum EditComponentLayout {
  vertical,
  horizontal,
}

export const PickupInstructionCell = ({
  style,
  instruction,
  onPress,
  endorsed = false,
  editDisabled = false,
  onDelete,
  onEdit,
}: Props) => {
  const [bubbleWidth, setBubbleWidth] = useState<number>(0);

  const editComponentLayout = useMemo(() => {
    if (bubbleWidth > SCREEN_WIDTH - 150) {
      return EditComponentLayout.vertical;
    } else {
      return EditComponentLayout.horizontal;
    }
  }, [bubbleWidth]);

  return (
    <View style={[styles.parent, style]}>
      <TouchableOpacity onPress={() => onPress(instruction)}>
        <View
          style={[
            styles.container,
            {
              backgroundColor: endorsed ? Colors.yellow4 : Colors.gray20,
              borderColor: endorsed ? Colors.yellow3 : Colors.gray21,
            },
          ]}
          onLayout={event => {
            setBubbleWidth(event.nativeEvent.layout.width);
          }}>
          <Text style={[styles.textContent]}>{instruction.tip_text}</Text>
          {instruction.upvotes !== undefined && instruction.upvotes > 0 && (
            <View
              style={[
                styles.containerIncrement,
                endorsed && { backgroundColor: Colors.yellow1 },
              ]}>
              <Text style={styles.textBold}>{instruction.upvotes}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>

      {!editDisabled && (
        <View
          style={[
            editComponentLayout === EditComponentLayout.horizontal
              ? styles.containerHorizontalEdit
              : styles.containerVerticalEdit,
            endorsed
              ? { backgroundColor: Colors.yellow4, borderColor: Colors.yellow3 }
              : { backgroundColor: Colors.gray20, borderColor: Colors.gray21 },
          ]}>
          <TouchableOpacity
            style={styles.buttonEdit}
            onPress={() => onDelete && onDelete(instruction)}>
            <Image source={Images.Trash} style={styles.iconDelete} />
          </TouchableOpacity>
          <View
            style={
              editComponentLayout === EditComponentLayout.horizontal
                ? {
                    width: 1,
                    backgroundColor: endorsed ? Colors.yellow3 : Colors.gray21,
                  }
                : {
                    height: 1,
                    backgroundColor: endorsed ? Colors.yellow3 : Colors.gray21,
                  }
            }
          />
          <TouchableOpacity
            style={styles.buttonEdit}
            onPress={() => onEdit && onEdit(instruction)}>
            <Image source={Images.Edit} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
