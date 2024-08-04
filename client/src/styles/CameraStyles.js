import { StyleSheet } from 'react-native';

const CameraStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  preview: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default CameraStyles;
