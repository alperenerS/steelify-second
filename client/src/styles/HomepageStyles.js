import { StyleSheet } from 'react-native';

const homepageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  screenContainer: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  greetingContainer: {
    flexDirection: 'row', // Yan yana hizalama
  },
  greeting: {
    fontSize: 24,
    color: '#FF6F00',
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  featuredContainer: {
    position: 'relative',
    marginBottom: 24,
  },
  featuredImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
  featuredTextContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  featuredBadge: {
    backgroundColor: '#FF6F00',
    color: '#fff',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
  featuredTitle: {
    fontSize: 24,
    color: '#000', // Siyah renk
    fontWeight: 'bold',
    marginBottom: 8,
  },
  featuredDescription: {
    fontSize: 16,
    color: '#000', // Siyah renk
    marginBottom: 8,
  },
  featuredFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featuredDate: {
    color: '#000', // Siyah renk
    marginRight: 8,
  },
  featuredTime: {
    color: '#000', // Siyah renk
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
    color: '#000', // Siyah renk
  },
  videoListContainer: {
    marginBottom: 24,
  },
  videoItem: {
    marginBottom: 16,
  },
  videoImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 8,
  },
  videoTextContainer: {
    paddingHorizontal: 8,
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#000', // Siyah renk
  },
  videoDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  videoDuration: {
    fontSize: 12,
    color: '#999',
  },
  blogListContainer: {
    marginBottom: 24,
  },
  blogItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  blogImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginRight: 16,
  },
  blogTextContainer: {
    flex: 1,
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#000', // Siyah renk
  },
  blogDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  blogFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  blogDate: {
    color: '#666',
    marginRight: 8,
  },
  blogTime: {
    color: '#666',
  },
});

export default homepageStyles;
