import { StyleSheet } from 'react-native';
import colors from './Colors';

const homeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center',
    color: colors.text,
  },
  topSection: {
    marginBottom: 24,
    alignItems: 'center',
    backgroundColor: colors.cardBackground,
    borderRadius: 10,
  },
  section: {
    marginVertical: 16,
    backgroundColor: colors.cardBackground,
    borderRadius: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  card: {
    width: 280,
    marginHorizontal: 8,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: colors.cardBackground,
  },
  video: {
    width: '100%',
    height: 150,
  },
  blogCard: {
    marginBottom: 16,
    marginHorizontal: 8,
    borderRadius: 16,
    backgroundColor: colors.cardBackground,
  },
  cardTitle: {
    fontSize: 18,
  },
  cardSubtitle: {
    fontSize: 14,
  },
});

export default homeScreenStyles;
