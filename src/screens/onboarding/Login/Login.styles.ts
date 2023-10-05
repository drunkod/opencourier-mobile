import { Colors } from '@app/styles/colors';
import { SCREEN_HORIZONTAL_MARGIN } from '@app/utilities/constants';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  safeArea: {
    flex: 1,
  },
  scroll: {
    paddingHorizontal: SCREEN_HORIZONTAL_MARGIN,
  },
  scrollContent: {
    flex: 1,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: SCREEN_HORIZONTAL_MARGIN,
  },
  textTitle: {
    fontWeight: '700',
    fontSize: 32,
  },
  containerSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  textRemember: {
    fontSize: 18,
    marginLeft: 16,
    color: Colors.black1,
  },
  buttonLogin: {
    marginTop: 16,
  },
  containerForgot: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginTop: 16,
  },
  textForgot: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.black1,
  },
});
