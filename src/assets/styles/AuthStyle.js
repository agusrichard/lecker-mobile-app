import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    marginTop: 15,
    alignItems: 'center'
  },
  viewContainer: { 
    flex: 1, 
    alignItems: 'center' 
  },
  headerText: {
    fontFamily: 'SpicyRice-Regular',
    fontSize: 30,
    color: '#fff',
    marginBottom: 25
  },
  logoBg: {
    marginTop: 75,
    marginBottom: 30,
    width: 100,
    height: 100,
    paddingBottom: 10,
    backgroundColor: 'rgba(230, 119, 189, 0.6)',
    borderRadius: 25
  },
  headerImg: {
    width: 500,
    height: 500,
    justifyContent: 'center',
    marginTop: -375,
  },
  bottomImg: {
    width: '100%',
    height: '100%',
    marginTop: 50
  },
  loginHeaderText: {
    marginTop: 20,
    marginBottom: 25,
    fontFamily: 'Lobster-Regular',
    fontSize: 36,
    color: '#f00c9c'
  },
  formContainer: {
    marginVertical: 15,
  },
  textInput: {
    backgroundColor: 'rgba(217, 107, 232, 0.7)',
    width: 250,
    padding: 10,
    borderRadius: 10,
    color: '#fff'
  },
  authBtn: {
    backgroundColor: '#f00c9c',
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 10,
    marginTop: 35
  },
  authBtnText: {
    color: '#fff'
  }
})