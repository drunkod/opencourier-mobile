import { Colors } from '@app/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 56,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    overflow: 'hidden',
  },
  textTitle: {
    fontSize: 16,
    color: Colors.white,
  },
  containerLoader: {
    flexDirection: 'row',
    overflow: 'hidden',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  progress: {
    backgroundColor: Colors.gray6,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
  },
});
