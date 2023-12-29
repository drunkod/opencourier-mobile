import { SCREEN_WIDTH } from '@app/utilities/constants';
import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  pagerView: {
    flex: 1,
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
    marginBottom: 10,
  },
  ilustration: {
    width: 320,
    height: 320,
    marginLeft: SCREEN_WIDTH - 320,
    marginTop: 20,
  },
  textTitle: {
    fontSize: 56,
    marginHorizontal: 32,
    fontWeight: '700',
  },
  textSubtitle: {
    fontSize: 18,
    marginHorizontal: 32,
  },
  pageContent: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: Colors.white,
  },
});
