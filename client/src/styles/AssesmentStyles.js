import { StyleSheet } from 'react-native';

const assesmentStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 16,
    zIndex: 1,
  },
  backButton: {
    paddingRight: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 8,
  },
  card: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  overlayLabel: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    opacity: 0,
  },
  overlayLabelText: {
    fontSize: 100,
  },
  overlayLabelLeft: {
    color: '#ff4d4d',
  },
  overlayLabelRight: {
    color: '#33cc33',
  },
  noMoreCardsText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    margin: 20,
  },
});

export default assesmentStyles;
