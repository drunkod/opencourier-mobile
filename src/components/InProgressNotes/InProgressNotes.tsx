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
import { CourierTip, Order } from '@app/types/types';
import { PickupInstructionCell } from '../PickupInstructionsCell/PickupInstructionCell';
import { Images } from '@app/utilities/images';

type Props = {
  style?: StyleProp<ViewStyle>;
  order: Order;
  notes: CourierTip[];
  headerTitle: string;
  onNotePress: (note: CourierTip) => void;
  onNoteEdit?: (order: Order, note: CourierTip) => void;
  onNoteDelete?: (order: Order, note: CourierTip) => void;
  onNoteAdd?: () => void;
  expanded: boolean;
  noteEditingDisabled: boolean;
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
  noteEditingDisabled = true,
}: Props) => {
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
        {!noteEditingDisabled && (
          <TouchableOpacity
            style={styles.addNote}
            onPress={() => onNoteAdd && onNoteAdd()}>
            <Image source={Images.PlusBlack} />
          </TouchableOpacity>
        )}
      </View>
      <View style={[styles.containerInstructions]}>
        {notes.map(item => {
          return (
            <PickupInstructionCell
              editDisabled={noteEditingDisabled}
              endorsed={Math.floor(Math.random() * 10) % 2 === 0}
              instruction={item}
              onPress={note => onNotePress(note)}
              onDelete={note => onNoteDelete && onNoteDelete(order, note)}
              onEdit={note => onNoteEdit && onNoteEdit(order, note)}
            />
          );
        })}
      </View>
    </View>
  );
};
