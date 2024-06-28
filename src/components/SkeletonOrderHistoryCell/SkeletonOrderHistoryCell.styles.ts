import { Colors } from '@app/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginHorizontal: 16,
    borderWidth: 2,
    borderRadius: 12,
    borderColor: Colors.gray8,
    padding: 14,
  },
  containerHorizontal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    justifyContent: 'space-between',
  },
  timeItem: {
    width: 66,
    height: 16,
    borderRadius: 6,
  },
  separator: {
    backgroundColor: Colors.gray8,
    height: 2,
    marginVertical: 10,
  },
  itemArrow: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginLeft: 8,
  },
  itemPrice: {
    width: 56,
    height: 28,
    borderRadius: 6,
  },
  itemIcon: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 8,
  },
  itemText: {
    height: 16,
    borderRadius: 4,
  },
  button: {
    height: 32,
    borderRadius: 8,
  },
});
