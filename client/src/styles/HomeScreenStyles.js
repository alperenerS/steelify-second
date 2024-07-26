import { StyleSheet } from 'react-native';

const homeScreenStyles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  topSection: {
    marginBottom: 24,
    alignItems: 'center',
  },
  topImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  topText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  topButton: {
    backgroundColor: '#FF6F00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  topButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewAll: {
    color: '#FF6F00',
    fontWeight: 'bold',
  },
  card: {
    width: 250,
    marginRight: 16,
  },
  video: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  cardSubtitle: {
    fontSize: 14,
    color: 'gray',
  },
  blogCard: {
    marginBottom: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
});

export default homeScreenStyles;
