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
import { Comment, CourierTip } from '@app/types/types';
import { Images } from '@app/utilities/images';
import { Colors } from '@app/styles/colors';
import { SCREEN_WIDTH } from '@app/utilities/constants';

type Props = {
  style?: StyleProp<ViewStyle>;
  note: Comment | string;
  endorsed: boolean;
  editDisabled: boolean;
  onPress: (note: Comment) => void;
  onEdit?: (note: Comment) => void;
  onDelete?: (note: Comment) => void;
};

enum EditComponentLayout {
  vertical,
  horizontal,
}

export const PickupInstructionCell = ({
  style,
  note,
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
            onPress={() =>
              typeof note !== 'string' && onDelete && onDelete(note)
            }>
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
            onPress={() => typeof note !== 'string' && onEdit && onEdit(note)}>
            <Image source={Images.Edit} />
          </TouchableOpacity>
        </View>
      )}
      <View
        style={[
          styles.container,
          // TODO: green and red colors for up/down vote
          // {
          //   backgroundColor: endorsed ? Colors.yellow4 : Colors.gray20,
          // },
        ]}
        onLayout={event => {
          setBubbleWidth(event.nativeEvent.layout.width);
        }}>
        <Text style={[styles.textContent]}>
          {typeof note !== 'string' ? note.text : note}
        </Text>
        {typeof note !== 'string' && note.likes > 0 && (
          //TODO: API for up and down vote
          <View style={styles.containerVoteButtons}>
            <TouchableOpacity
              style={styles.containerVoteButton}
              onPress={() =>
                typeof note !== 'string' && !endorsed && onPress(note)
              }>
              <Image source={Images.ArrowUpGray} />
            </TouchableOpacity>
            <Text style={[styles.textCount, { color: Colors.green8 }]}>
              {note.likes}
            </Text>
            <TouchableOpacity
              style={styles.containerVoteButton}
              onPress={() =>
                typeof note !== 'string' && !endorsed && onPress(note)
              }>
              <Image source={Images.ArrowDownGray} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};
