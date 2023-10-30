import { Colors } from '@app/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    backgroundColor: Colors.blue2,
    borderColor: Colors.blue3,
    marginHorizontal: 16,
    borderRadius: 6,
    justifyContent: 'center',
    paddingVertical: 6,
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
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
  },
  buttonClose: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
  },
  checkmark: {
    width: 13,
    height: 13,
  }
});
