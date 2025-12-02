import { Colors } from '@app/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerAddressButton: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginBottom: 8,
    overflow: 'hidden',
  },
  textAddress: {
    fontSize: 16,
    marginRight: 8,
    lineHeight: 18,
    flex: 1,
  },
  buttonAddress: {
    width: 32,
    height: 32,
    backgroundColor: Colors.gray7,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  iconAddressButton: {
    width: 14,
    height: 14,
    tintColor: Colors.black1,
  },
});
