import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const blogDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: '#f5f5f5',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 8,
  },
  backButton: {
    paddingRight: 8,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  image: {
    width: '100%',
    height: height * 0.3,
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 26,  // 2px daha büyük yapıldı
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
    marginTop: 16,
  },
});

export default blogDetailStyles;
