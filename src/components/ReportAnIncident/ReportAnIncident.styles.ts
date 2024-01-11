import { Colors } from '@app/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: Colors.gray9,
    backgroundColor: Colors.white,
    paddingTop: 24,
    paddingBottom: 28,
    paddingHorizontal: 24,
    marginHorizontal: 16,
    marginTop: 16,
  },
  containerHorizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  textReport: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    color: Colors.black1,
    flex: 1,
  },
  imageX: {
    width: 20,
    height: 20,
  },
  textReportDetails: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 24,
    color: Colors.black6,
    marginBottom: 16,
  },
  iconInfo: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  containerRight: {
    flexDirection: 'row',
  },
  contentRight: { flex: 1 },
});
