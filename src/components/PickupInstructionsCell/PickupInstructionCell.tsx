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
  onUpvote?: (note: Comment) => void;
  onDownvote?: (note: Comment) => void;
  upvoted?: boolean;
  downvoted?: boolean;
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
  onUpvote,
  onDownvote,
  upvoted = false,
  downvoted = false,
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
                typeof note !== 'string' &&
                !upvoted &&
                onUpvote &&
                onUpvote(note)
              }>
              <Image
                source={Images.ArrowUpGray}
                style={upvoted && { tintColor: Colors.green8 }}
              />
            </TouchableOpacity>
            <Text
              style={[
                styles.textCount,
                upvoted && { color: Colors.green8 },
                downvoted && { color: Colors.red7 },
              ]}>
              {note.likes}
            </Text>
            <TouchableOpacity
              style={styles.containerVoteButton}
              onPress={() =>
                typeof note !== 'string' &&
                !downvoted &&
                onDownvote &&
                onDownvote(note)
              }>
              <Image
                source={Images.ArrowDownGray}
                style={downvoted && { tintColor: Colors.red7 }}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};
