import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
  text: {
    color: colors.text,
  },
  buttonPrimary: {
    backgroundColor: colors.buttonPrimaryBackground,
    color: colors.buttonPrimaryText,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonPrimaryText: {
    color: colors.buttonPrimaryText,
    fontSize: 16,
  },
  buttonSecondary: {
    backgroundColor: colors.buttonSecondaryBackground,
    color: colors.buttonSecondaryText,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonSecondaryText: {
    color: colors.buttonSecondaryText,
    fontSize: 16,
  },
});
