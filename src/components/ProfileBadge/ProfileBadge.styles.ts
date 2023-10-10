import { Colors } from '@app/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
  },
  containerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.gray1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.gray1,
  },
  containerStatus: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 14,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    width: 8,
    height: 8,
  },
  textStatus: {
    fontWeight: '700',
    fontSize: 8,
    color: Colors.white,
  },
});
