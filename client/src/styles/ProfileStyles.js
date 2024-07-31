import { StyleSheet } from 'react-native';
import colors from './colors2';

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
    padding: 10,
    paddingTop: 20,
  },
  headerText: {
    marginLeft: 10,
  },
  avatar: {
    backgroundColor: colors.secondary,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 10,
  },
  button: {
    backgroundColor: colors.primary,
  },
  spacer: {
    flex: 1,
  },
});

export default ProfileStyles;
