import { Colors } from '@app/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.gray8,
    borderRadius: 16,
    padding: 4,
  },
  button: {
    borderRadius: 16,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.gray8,
    flex: 1,
  },
  text: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 24,
    color: Colors.black6,
  },
  image: {
    width: 28,
    height: 26,
  },
  containerText: {
    marginLeft: 6,
    marginVertical: 8,
  },
  textName: {
    fontWeight: '600',
    fontSize: 12,
    color: Colors.black1,
    lineHeight: 16,
  },
  textLink: {
    fontWeight: '600',
    fontSize: 10,
    color: Colors.black5,
    lineHeight: 16,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.gray21,
  },
});
