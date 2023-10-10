import { Colors } from '@app/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerLeft: {
    borderWidth: 1,
    borderColor: Colors.gray4,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  containerMiddle: {
    borderWidth: 1,
    borderColor: Colors.gray4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerRight: {
    borderWidth: 1,
    borderColor: Colors.gray4,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.gray3,
    margin: 10,
  },
});
