import { Colors } from '@app/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginHorizontal: 16,
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 3,
    flexDirection: 'row',
    marginVertical: 2,
  },
  containerLoader: {
    width: 21,
    height: 21,
    borderRadius: 6,
    backgroundColor: Colors.white,
    marginRight: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: Colors.black1,
    lineHeight: 24,
    flex: 1,
    fontWeight: '500',
  },
  buttonClose: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    flexDirection: 'row',
  },
  buttonEnable: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  checkmark: {
    width: 13,
    height: 13,
  },
  separator: {
    width: 1,
    height: 24,
    backgroundColor: Colors.gray9,
    marginRight: 8,
  },
  textEnable: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.black1,
    lineHeight: 24,
  },
});
