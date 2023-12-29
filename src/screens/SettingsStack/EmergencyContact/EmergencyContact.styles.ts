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
  },
  navHeader: {
    flexDirection: 'row',
    marginBottom: 22,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: Colors.black1,
    marginLeft: 16,
  },
  textField: {
    marginBottom: 16,
  },
  scroll: {
    paddingHorizontal: 16,
  },
  containerHorizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  textInfo: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 16,
    color: Colors.black6,
    marginLeft: 4,
  },
});
