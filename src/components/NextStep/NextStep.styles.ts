import { Colors } from '@app/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  blueSeparator: {
    height: 3,
    backgroundColor: Colors.blue4,
    flex: 1,
    marginBottom: 16,
  },
  nextStep: {
    backgroundColor: Colors.blue5,
    paddingBottom: 12,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    marginHorizontal: 12,
  },
  textNextStep: {
    fontWeight: '700',
    color: Colors.black1,
    marginLeft: 8,
  },
  cell: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 22,
    marginVertical: 10,
  },
  cellText: {
    flex: 1,
    marginLeft: 8,
  },
  cellName: {
    fontSize: 12,
    fontWeight: '600',
  },
  cellItems: {
    fontSize: 10,
    fontWeight: '600',
  },
});
