import { StyleSheet } from 'react-native';

const allVideosStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000', // Siyah renk
    marginBottom: 16,
  },
  videoItem: {
    marginBottom: 24,
  },
  videoContainer: {
    position: 'relative',
    width: '100%',
    height: 250,
    borderRadius: 12,
    overflow: 'hidden',
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000', // Siyah renk
    marginBottom: 8,
  },
});

export default allVideosStyles;
