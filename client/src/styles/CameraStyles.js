import { StyleSheet } from 'react-native';

const CameraStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  preview: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  instructionsContainer: {
    marginBottom: 20,
  },
  instructionsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#000',
  },
  instructionsText: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'left',
    color: '#000',
  },
});

export default CameraStyles;
