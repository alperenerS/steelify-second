import { StyleSheet } from 'react-native';
import colors from './Colors';

const forgotPasswordStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: colors.primary,
    textAlign: 'center',
  },
  formContainer: {
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    color: '#000',  // Metin rengini siyah yapar
  },
  icon: {
    marginLeft: -35,
    marginRight: 10,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default forgotPasswordStyles;
