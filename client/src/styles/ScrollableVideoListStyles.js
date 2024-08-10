import { StyleSheet } from 'react-native';

const scrollableVideoListStyles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000', // Siyah renk
  },
  moreButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: '#FF6F00',
    borderRadius: 4,
  },
  moreButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  videoItem: {
    marginRight: 16,
    position: 'relative', // Play icon'un konumlandırılması için
  },
  videoContainer: {
    position: 'relative',
    width: 200,
    height: 120,
    borderRadius: 12,
    overflow: 'hidden',
  },
  videoImage: {
    width: '100%',
    height: '100%',
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
    color: '#000', // Siyah renk
  },
});

export default scrollableVideoListStyles;
