import { Colors } from '@app/styles/colors';
import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
  },
  safe: {
    flex: 1,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  navHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 10 : 0,
  },
  title: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 32,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 22,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.gray12,
  },
  cellHorizonal: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    marginTop: 38,
  },
  cellText: {
    fontSize: 12,
    fontWeight: '600',
    flex: 1,
  },
  arrow: {
    width: 14,
    height: 14,
  },
  contentReported: {
    flex: 1,
    alignItems: 'center',
  },
  textThanks: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  textErrors: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
});
