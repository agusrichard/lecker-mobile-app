import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: "center",
    opacity: 0.95
  },
  logo: {
    marginTop: 5,
    width: '100%',
    height: '100%',
    resizeMode: 'stretch'
  },
  container: { 
    flex: 1,
    marginHorizontal: 25,
    marginVertical: 25
  },
  headerText: {
    fontSize: 30,
    color: '#810cb3'
  },
  formGroup: {
    marginVertical: 20
  },
  inputText: {
    borderBottomWidth: 2,
    borderBottomColor: '#f595ca',
    width: 250
  },
  btn: {
    textAlign: 'center',
    backgroundColor: 'rgba(240, 19, 133, 0.9)',
    padding: 20,
    marginVertical: 10,
    width: '100%'
  }
})