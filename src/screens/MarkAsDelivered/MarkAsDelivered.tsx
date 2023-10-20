import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { styles } from './MarkAsDelivered.styles';
import { MainScreenProp, MainScreens } from '@app/navigation/main/types';
import { BackNavButton } from '@app/components/BackNavButton/BackNavButton';
import { QuickNote } from '@app/components/QuickNote/QuickNote';
import { CustomerNotes } from '@app/types/types';
import { Images } from '@app/utilities/images';
import { Button, ButtonType } from '@app/components/Button/Button';
import { ADD_NOTE_CELL } from '@app/utilities/constants';

type Props = MainScreenProp<MainScreens.MarkAsDelivered>;

export const MarkAsDelivered = ({ navigation }: Props) => {
  const [dataSource, setDataSource] = useState<string[]>([
    CustomerNotes.BellnotRung,
    CustomerNotes.DontBlockDoor,
    CustomerNotes.HandleWithCare,
    CustomerNotes.PreventLeaks,
    ADD_NOTE_CELL,
  ]);
  const [selectedNotes, setSelectedNotes] = useState<string[]>([]);

  const handleNotePress = (note: string) => {
    const found = selectedNotes.filter(obj => obj === note);
    if (found.length > 0) {
      const newData = selectedNotes.filter(obj => obj !== note);
      setSelectedNotes(newData);
    } else {
      setSelectedNotes([...selectedNotes, note]);
    }
  };

  const noteSelected = (item: string) => {
    return selectedNotes.filter(obj => obj === item).length > 0;
  };

  const addNote = (text: string) => {
    const temp = dataSource.filter(obj => obj !== ADD_NOTE_CELL);
    setDataSource([...temp, text, ADD_NOTE_CELL]);
  };

  const onAddNote = () => {
    Alert.prompt(
      'Add Note',
      '',
      [
        {
          text: 'Cancel',
          onPress: () => undefined,
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: note => addNote(note),
        },
      ],
      'plain-text',
    );
  };

  const renderItem = ({ item }: string) => {
    if (item === ADD_NOTE_CELL) {
      return (
        <TouchableOpacity style={styles.buttonAddNote} onPress={onAddNote}>
          <Image source={Images.PlusCircle} />
          <Text style={styles.textAddNote}>Type a note</Text>
        </TouchableOpacity>
      );
    }
    return (
      <QuickNote
        text={item}
        selected={noteSelected(item)}
        onPress={handleNotePress}
      />
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safe}>
        <View style={styles.navHeader}>
          <Text style={styles.title}>For the customer</Text>
          <BackNavButton onPress={() => navigation.goBack()} />
        </View>
        <Text style={styles.textNote}>Quick Note</Text>
        <FlatList
          style={[styles.gridContainer]}
          contentContainerStyle={styles.contentContainerStyle}
          data={dataSource}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${index}`}
        />

        <Button
          textStyle={styles.buttonTextStyle}
          icon={Images.Camera}
          type={ButtonType.black}
          title="Take a photo"
          onPress={() => undefined}
        />
        <Button
          style={styles.buttonConfirm}
          disabled={selectedNotes.length !== dataSource.length}
          textStyle={styles.buttonTextStyle}
          icon={Images.Checkmark}
          type={ButtonType.green}
          title="Confirm mark as delivered"
          onPress={() => navigation.goBack()}
        />
      </SafeAreaView>
    </View>
  );
};
