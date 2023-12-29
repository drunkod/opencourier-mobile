import { Colors } from '@app/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTitle: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 32,
    color: Colors.black,
    marginLeft: 12,
  },
  textSubtitle: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    color: Colors.blackAlpha05,
  },
  imageRadioButton: {
    width: 20,
    height: 20,
    marginTop: 3,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.gray22,
    marginTop: 8,
  },
  line: {
    height: 1,
    backgroundColor: Colors.black,
    alignSelf: 'stretch',
    flex: 1,
  },
  containerRanges: {
    paddingTop: 10,
  },
  containerShift: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  textTime: {
    fontSize: 12,
    fontWeight: '600',
    padding: 8,
    borderColor: Colors.green5,
    borderWidth: 1,
    borderRadius: 12,
  },
  buttonDeleteAdd: {
    width: 30,
    height: 24,
    borderWidth: 1,
    borderColor: Colors.gray9,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconTrash: {
    width: 14,
    height: 14,
    tintColor: Colors.black1,
  },
});
