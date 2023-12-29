import { Colors } from '@app/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 32,
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
  containerHorizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  textSectionTitle: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 24,
    color: Colors.black,
  },
  textInfo: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    color: Colors.blackAlpha05,
  },
  containerGray: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.gray8,
    borderRadius: 16,
    padding: 4,
    marginTop: 8,
  },
  button: {
    borderRadius: 16,
    padding: 8,
  },
  textButton: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 24,
    color: Colors.black1,
  },
  containerText: {
    flex: 1,
  },
});
