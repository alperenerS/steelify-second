import { StyleSheet } from 'react-native';
import colors from './Colors';

const ProfileStyles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.background,
  },
  card: {
    marginVertical: 10,
    borderRadius: 20,
    backgroundColor: colors.secondary,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    padding: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 40,
    color: colors.cardBackground,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 18,
    color: colors.text,
    marginBottom: 5,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 5,
  },
  logoutButton: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 5,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTabButton: {
    borderBottomColor: colors.primary,
  },
  tabText: {
    fontSize: 16,
    color: colors.text,
  },
  commentCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  commentDate: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 4,
  },
  commentText: {
    fontSize: 14,
    color: colors.text,
    flex: 1,
    marginRight: 10,
  },
  noContentText: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.text,
    marginTop: 20,
  },
  iconWrapper: {
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 10,
    elevation: 3,
  },
  icon: {
    color: colors.iconColor,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
    flex: 1,
  },
  backButton: {
    paddingHorizontal: 10,
  },
  photoGrid: {
    width: '30%',
    aspectRatio: 1,
    margin: '1.5%',
    borderRadius: 10,
  },
});

export default ProfileStyles;
