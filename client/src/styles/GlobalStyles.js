import { StyleSheet } from 'react-native';
import colors from './Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
  text: {
    color: colors.text,
  },
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: 15,
    marginVertical: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonPrimary: {
    backgroundColor: colors.buttonPrimaryBackground,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonPrimaryText: {
    color: colors.buttonPrimaryText,
    fontSize: 16,
  },
  buttonSecondary: {
    backgroundColor: colors.buttonSecondaryBackground,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonSecondaryText: {
    color: colors.buttonSecondaryText,
    fontSize: 16,
  },
});
