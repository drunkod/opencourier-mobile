import { Colors } from '@app/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
  },
  safe: {
    flex: 1,
  },
  navHeader: {
    flexDirection: 'row',
    marginBottom: 22,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: Colors.black1,
    marginLeft: 16,
  },
  list: {
    paddingHorizontal: 16,
  },
  card: {
    borderWidth: 1,
    borderColor: Colors.gray9,
    borderRadius: 20,
    padding: 24,
    marginBottom: 24,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 40,
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  cardTitle: {
    fontWeight: '700',
    lineHeight: 24,
    flex: 1,
    fontSize: 16,
  },
  iconX: {
    width: 20,
    height: 20,
  },
  cardText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.black6,
    marginTop: 4,
    marginBottom: 16,
    marginLeft: 40,
    marginRight: 40,
    lineHeight: 24,
  },
});
