import { Colors } from '@app/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.gray1,
    borderRadius: 12,
    justifyContent: 'center',
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  containerSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  separator: {
    height: 2,
    backgroundColor: Colors.gray1,
    marginVertical: 10,
  },
  containerUser: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textId: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 18,
    color: Colors.black1,
    flex: 1,
  },
  textStatus: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: Colors.black2,
  },
  textDeliveredTo: {
    fontSize: 16,
    color: Colors.black1,
    lineHeight: 20,
  },
  textUserName: {
    fontSize: 18,
    marginRight: 16,
    lineHeight: 20,
    color: Colors.black1,
  },
  imageUser: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.gray6,
  },
  iconSmall: {
    width: 16,
    height: 16,
    marginRight: 10,
  },
  textInfo: {
    fontSize: 16,
    lineHeight: 20,
    color: Colors.black1,
  },
  containerStatus: {
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Colors.gray1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusIndicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.gray2,
    marginRight: 7,
  },
});
