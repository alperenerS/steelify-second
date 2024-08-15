import { StyleSheet } from 'react-native';

const loadingPopupStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    width: 150,
    height: 150,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#FF6F00',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default loadingPopupStyles;
