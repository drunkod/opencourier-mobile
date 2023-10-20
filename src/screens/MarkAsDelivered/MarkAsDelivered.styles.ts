import { Colors } from '@app/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
  },
  safe: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  navHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 32,
  },
  gridContainer: {
    flex: 1,
    marginBottom: 20,
  },
  contentContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textNote: {
    fontSize: 16,
    marginTop: 39,
    marginBottom: 8,
  },
  buttonAddNote: {
    borderRadius: 6,
    paddingHorizontal: 5,
    paddingVertical: 4,
    backgroundColor: Colors.gray6,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  textAddNote: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.gray9,
    marginLeft: 4,
  },
  buttonConfirm: {
    marginBottom: 16,
    marginTop: 19,
  },
  buttonTextStyle: {
    fontSize: 20,
    fontWeight: '700',
  },
});
