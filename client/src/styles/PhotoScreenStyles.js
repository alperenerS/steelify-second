import { StyleSheet } from 'react-native';

const PhotoScreenStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 16,
  },
  preview: {
    width: '100%',
    height: '50%',
    resizeMode: 'contain',
    marginBottom: 16,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'orange',
  },
  input: {
    width: '100%',
    minHeight: 80,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    textAlignVertical: 'top',
    backgroundColor: '#fff',
    color: '#000', 
  },
});

export default PhotoScreenStyles;
