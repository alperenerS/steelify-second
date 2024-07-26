import { StyleSheet } from 'react-native';

const customVideoPlayerStyles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: 150,
    borderRadius: 8,
    overflow: 'hidden',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  controlOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default customVideoPlayerStyles;
