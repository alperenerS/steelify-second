import {StyleSheet} from 'react-native';
import colors from './colors2';

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
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonPrimary: {
    backgroundColor: colors.buttonPrimaryBackground,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonPrimaryText: {
    color: colors.buttonPrimaryText,
    fontSize: 14,
  },
  buttonSecondary: {
    backgroundColor: colors.buttonSecondaryBackground,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonSecondaryText: {
    color: colors.buttonSecondaryText,
    fontSize: 14,
  },
});
