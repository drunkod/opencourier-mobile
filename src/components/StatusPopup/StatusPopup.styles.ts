import { Colors } from '@app/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  container: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 28,
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
    color: Colors.black1,
    lineHeight: 24,
    marginBottom: 4,
  },
  subtitle: {
    fontWeight: '600',
    color: Colors.gray19,
    fontSize: 14,
    lineHeight: 24,
    marginBottom: 16,
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  containerHorizontal: {
    flexDirection: 'row',
  },
});
