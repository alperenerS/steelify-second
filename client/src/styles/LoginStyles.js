import { StyleSheet } from 'react-native';
import colors from './colors2';

const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    maxWidth: 400,
    padding: 20,
    borderRadius: 10,
    backgroundColor: colors.cardBackground,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  input: {
    marginBottom: 16,
    backgroundColor: colors.inputBackground,
    paddingHorizontal: 0,
  },
  button: {
    backgroundColor: colors.primary,
    marginTop: 10,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default LoginStyles;
