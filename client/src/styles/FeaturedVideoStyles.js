import { StyleSheet } from 'react-native';

const featuredVideoStyles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
    color: '#666', // Siyah renk veya uygun olan
  },
  video: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
});

export default featuredVideoStyles;
