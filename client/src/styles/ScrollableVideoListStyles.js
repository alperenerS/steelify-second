import { StyleSheet } from 'react-native';

const scrollableVideoListStyles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
    color: '#000',
  },
  videoItem: {
    marginRight: 16,
    position: 'relative',
  },
  videoContainer: {
    position: 'relative',
  },
  videoImage: {
    width: 200,
    height: 120,
    borderRadius: 12,
  },
  video: {
    width: 200,
    height: 120,
    borderRadius: 12,
  },
  playIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
  videoTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#000',
  },
});

export default scrollableVideoListStyles;
