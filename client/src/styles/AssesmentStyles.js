import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

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
    padding: 16,
  },
  image: {
    width: width * 0.9,  // Ekran genişliğinin %90'ı kadar
    height: width * 0.9, // Kare olacak şekilde yükseklik ile aynı ayarlandı
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 40,  // Fotoğraftan daha uzak olması için artırıldı
  },
  rejectButton: {
    backgroundColor: '#ff4d4d',
    width: 60,           // Butonun genişliği
    height: 60,          // Butonun yüksekliği
    borderRadius: 30,    // Tam yuvarlak olması için genişlik ve yüksekliğin yarısı kadar
    justifyContent: 'center',
    alignItems: 'center',
  },
  acceptButton: {
    backgroundColor: '#33cc33',
    width: 60,           // Butonun genişliği
    height: 60,          // Butonun yüksekliği
    borderRadius: 30,    // Tam yuvarlak olması için genişlik ve yüksekliğin yarısı kadar
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
  },
  noMoreCardsText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    margin: 20,
  },
});

export default assesmentStyles;
