import { Colors } from '@app/styles/colors';
import { SCREEN_WIDTH } from '@app/utilities/constants';
import { StyleSheet } from 'react-native';

const TOTAL_HORIZONTAL_SPACING = 32;

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  tabs: {
    width: SCREEN_WIDTH - TOTAL_HORIZONTAL_SPACING,
    flexDirection: 'row',
  },
  tab: {
    width: (SCREEN_WIDTH - TOTAL_HORIZONTAL_SPACING) / 3,
  },
  indicator: {
    width: (SCREEN_WIDTH - TOTAL_HORIZONTAL_SPACING) / 3,
    height: 4,
    backgroundColor: Colors.black1,
    marginTop: 12,
    marginBottom: 2,
  },
  textTab: {
    fontWeight: '700',
    fontSize: 18,
    alignSelf: 'center',
  },
  containerTabText: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  containerCount: {
    width: 22,
    height: 22,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4,
  },
  textCount: {
    fontWeight: '900',
    fontSize: 11,
    color: Colors.white,
  },
});
