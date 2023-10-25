import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Alert,
  ImageSourcePropType,
} from 'react-native';
import { styles } from './MarkAsDelivered.styles';
import { MainScreenProp, MainScreens } from '@app/navigation/main/types';
import { BackNavButton } from '@app/components/BackNavButton/BackNavButton';
import { QuickNote } from '@app/components/QuickNote/QuickNote';
import { CustomerNotes } from '@app/types/types';
import { Images } from '@app/utilities/images';
import { Button, ButtonType } from '@app/components/Button/Button';
import { ADD_NOTE_CELL } from '@app/utilities/constants';
import { PhotoCell } from '@app/components/PhotoCell/PhotoCell';

type Props = MainScreenProp<MainScreens.MarkAsDelivered>;

type DataTypes = ImageSourcePropType | string[];

export const MarkAsDelivered = ({ navigation }: Props) => {
  const [dataSource, setDataSource] = useState<DataTypes[]>([
    [
      CustomerNotes.BellnotRung,
      CustomerNotes.DontBlockDoor,
      CustomerNotes.HandleWithCare,
      CustomerNotes.PreventLeaks,
      ADD_NOTE_CELL,
    ],
    Images.ChatBubble,
    Images.BellSlash,
    Images.Box,
    Images.Checkbox,
    Images.DoorOpen,
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

  const addNote = (text: string | undefined) => {
    if (text) {
      var temp = [...dataSource];
      const noteArray = dataSource[0].filter(obj => obj !== ADD_NOTE_CELL);
      temp[0] = [...noteArray, text, ADD_NOTE_CELL];
      setDataSource(temp);
    }
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

  const onDeletePhoto = (photo: ImageSourcePropType) => {
    const temp = dataSource.filter(item => item !== photo);
    setDataSource(temp);
  };

  const renderItem = ({ item, index }: DataTypes) => {
    if (index === 0) {
      return (
        <View>
          <Text style={styles.textNote}>Quick Note</Text>
          <View style={styles.contentContainerStyle}>
            {item.map(note => {
              if (note === ADD_NOTE_CELL) {
                return (
                  <TouchableOpacity
                    style={styles.buttonAddNote}
                    onPress={onAddNote}>
                    <Image source={Images.PlusCircle} />
                    <Text style={styles.textAddNote}>Type a note</Text>
                  </TouchableOpacity>
                );
              }

              return (
                <QuickNote
                  text={note}
                  selected={noteSelected(note)}
                  onPress={handleNotePress}
                />
              );
            })}
          </View>
        </View>
      );
    } else {
      return (
        <PhotoCell
          image={item}
          onDelete={() => onDeletePhoto(item)}
          onRetake={() =>
            navigation.navigate(MainScreens.PhotoAttachment, {
              photo: Images.User,
              onAttach: onAttachPhoto,
              onRetake: () => undefined,
            })
          }
        />
      );
    }
  };

  const onAttachPhoto = (photo: ImageSourcePropType) => {
    setDataSource([...dataSource, photo]);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safe}>
        <View style={styles.navHeader}>
          <Text style={styles.title}>For the customer</Text>
          <BackNavButton onPress={() => navigation.goBack()} />
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          style={[styles.gridContainer]}
          data={dataSource}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${index}`}
        />

        <Button
          textStyle={styles.buttonTextStyle}
          icon={Images.Camera}
          type={ButtonType.black}
          title="Take a photo"
          onPress={() =>
            navigation.navigate(MainScreens.PhotoAttachment, {
              photo: Images.User,
              onAttach: onAttachPhoto,
              onRetake: () => undefined,
            })
          }
        />
        <Button
          style={styles.buttonConfirm}
          disabled={selectedNotes.length !== dataSource[0].length - 1}
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
