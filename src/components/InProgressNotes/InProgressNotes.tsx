import React from 'react';
import {
  StyleProp,
  ViewStyle,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { styles } from './InProgressNotes.styles';
import { Comment, CourierTip, Order } from '@app/types/types';
import { PickupInstructionCell } from '../PickupInstructionsCell/PickupInstructionCell';
import { Images } from '@app/utilities/images';
import { selectUser } from '@app/redux/user/user';
import { useSelector } from 'react-redux';

type Props = {
  style?: StyleProp<ViewStyle>;
  order: Order;
  notes: Comment[] | string[];
  headerTitle: string;
  onNotePress: (note: Comment) => void;
  onNoteEdit?: (note: Comment) => void;
  onNoteDelete?: (note: Comment) => void;
  onNoteAdd?: () => void;
  expanded: boolean;
  noteCreationDisabled: boolean;
};

export const InProgressNotes = ({
  style,
  notes,
  order,
  headerTitle,
  onNotePress,
  onNoteEdit,
  onNoteDelete,
  onNoteAdd,
  expanded,
  noteCreationDisabled = true,
}: Props) => {
  const { user } = useSelector(selectUser);
  return (
    <View
      style={[
        styles.container,
        !expanded && { height: 0 },
        expanded && { overflow: 'visible' },
        style,
      ]}>
      <View style={[styles.noteHeader]}>
        <Text style={styles.textNotesHeader}>{headerTitle}</Text>
        <View style={styles.notesDash} />
        {!noteCreationDisabled && (
          <TouchableOpacity
            style={styles.addNote}
            onPress={() => onNoteAdd && onNoteAdd()}>
            <Image source={Images.PlusBlack} />
          </TouchableOpacity>
        )}
      </View>
      <View style={[styles.containerInstructions]}>
        {notes.map(note => {
          return (
            <PickupInstructionCell
              editDisabled={
                typeof note == 'string' || note.commentor != user?.id
              }
              endorsed={
                typeof note != 'string' &&
                note.likers.find(liker => liker == user!.id) != undefined
              }
              note={note}
              onPress={note => typeof note !== 'string' && onNotePress(note)}
              onDelete={note =>
                typeof note !== 'string' && onNoteDelete && onNoteDelete(note)
              }
              onEdit={note =>
                typeof note !== 'string' && onNoteEdit && onNoteEdit(note)
              }
            />
          );
        })}
      </View>
    </View>
  );
};
