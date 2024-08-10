import { StyleSheet } from 'react-native';

const customVideoPlayerStyles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  playPauseButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
  fullscreenButton: {
    position: 'absolute',
    bottom: 30,
    right: 10,
  },
});

export default customVideoPlayerStyles;
