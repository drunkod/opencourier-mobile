import { Colors } from '@app/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  blueSeparator: {
    height: 2,
    backgroundColor: Colors.blue1,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  containerHeader: {
    backgroundColor: Colors.blue5,
    marginBottom: 10,
  },
  textJoin: {
    fontSize: 18,
    marginLeft: 12,
    marginBottom: 6,
    lineHeight: 24,
    color: Colors.blue1,
  },
  headerContent: {},
  contentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 32,
    height: 32,
    marginLeft: 8,
  },
  containerHeaderText: {
    marginLeft: 8,
  },
  textName: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: Colors.black,
  },
  textCount: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 16,
    color: Colors.blackAlpha05,
  },
});
