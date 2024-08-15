import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const CameraStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  preview: {
    width: width * 0.9,
    height: width * 0.9,
    resizeMode: 'cover',
    borderRadius: 15,
    marginBottom: 20,
  },
  instructionsContainer: {
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  instructionsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FF6F00',
  },
  instructionsText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 8,
    color:"#000",
  },
});

export default CameraStyles;
