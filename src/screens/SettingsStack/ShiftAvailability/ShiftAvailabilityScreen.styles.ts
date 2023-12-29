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
  list: {
    paddingHorizontal: 16,
  },
  org: {
    height: 46,
    backgroundColor: Colors.gray24,
    borderRadius: 12,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  iconOrg: {
    width: 26,
    height: 26,
  },
  textOrg: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.black1,
    marginLeft: 6,
    flex: 1,
  },
});
