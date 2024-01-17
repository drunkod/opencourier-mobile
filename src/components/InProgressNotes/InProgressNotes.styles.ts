import { Colors } from '@app/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noteHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  textNotesHeader: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.black4,
  },
  notesDash: {
    height: 1,
    backgroundColor: Colors.gray9,
    flex: 1,
    marginLeft: 8,
  },
  containerInstructions: {
    marginTop: 4,
    overflow: 'hidden',
  },
  addNote: {
    borderRadius: 8,
    width: 32,
    height: 32,
    backgroundColor: Colors.gray1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
});
