import { StyleSheet } from 'react-native';
import colors from './Colors';

const ProfileStyles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    justifyContent: 'flex-start',
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: colors.cardBackground,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    zIndex: 1,
    marginBottom: 20,
  },
  backButton: {
    paddingHorizontal: 0, // Padding kaldırıldı
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.text,
    marginLeft: 8, // Sadece sol tarafa boşluk verildi
  },
});

export default ProfileStyles;
