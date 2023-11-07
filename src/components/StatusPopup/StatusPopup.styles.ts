import { Colors } from '@app/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    overflow: 'hidden',
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
    color: Colors.black1,
    marginTop: 66,
    marginBottom: 4,
  },
  subtitle: {
    color: Colors.gray19,
    fontSize: 14,
    marginBottom: 24,
  },
  imageContainer: {
    position: 'absolute',
    top: -100,
    left: -100,
    width: 280,
    height: 280,
    backgroundColor: Colors.transparent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 56,
    height: 56,
  },
  ring1: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: Colors.transparent,
    borderWidth: 1,
    borderColor: Colors.blackOpacity3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ring2: {
    width: 210,
    height: 210,
    borderRadius: 105,
    backgroundColor: Colors.transparent,
    borderColor: Colors.blackOpacity2,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ring3: {
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: Colors.transparent,
    borderWidth: 1,
    borderColor: Colors.blackOpacity1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
