import { Colors } from '@app/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  pagerView: {
    flex: 1,
    alignItems: 'center',
  },
  imageOpenDeli: {
    position: 'absolute',
    left: 32,
  },
  pageIndicator: {
    marginBottom: 24,
  },
  buttonContinue: {
    marginHorizontal: 32,
    height: 48,
  },
  ilustration: {
    width: 280,
    height: 280,
    marginTop: 20,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  textTitle: {
    fontSize: 44,
    marginHorizontal: 32,
    fontWeight: '700',
    marginBottom: 22,
    lineHeight: 52,
    color: Colors.black,
  },
  textSubtitle: {
    fontSize: 16,
    marginLeft: 32,
    marginBottom: 260,
    marginRight: 120,
    color: Colors.black,
  },
  pageContent: {
    flex: 1,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: Colors.white,
  },
  containerBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
