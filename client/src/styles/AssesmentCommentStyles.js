import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const AssesmentCommentStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF', 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 16,
    zIndex: 1,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    flex: 1,
    marginLeft: -24,
  },
  preview: {
    width: width * 0.9,
    height: width * 0.9, 
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#FF6F00',
  },
  input: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    backgroundColor: '#F5F5F5',
    color: '#000',
    textAlignVertical: 'top',
  },
  errorInput: {
    borderColor: '#FF6F00',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    width: '60%',
    backgroundColor: '#FF6F00',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AssesmentCommentStyles;
