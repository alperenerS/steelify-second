import { StyleSheet } from 'react-native';

const customVideoPlayerStyles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  video: {
    width: 200,
    height: 120,
    borderRadius: 12,
  },
  playPauseButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
  fullscreenButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

export default customVideoPlayerStyles;
