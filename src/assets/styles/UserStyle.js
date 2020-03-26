import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  headerBg: {
    flex: 1,
    backgroundColor: 'rgba(240, 129, 214, 0.5)',
    height: 50,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20
  },
  body: {
    flex: 2,
    padding: 20
  },
  headerContent: {
    flexDirection: 'row',
    flex: 1
  },
  userImg: {
    height: 85,
    width: 85,
    borderRadius: 50
  },
  contentImg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -40
  },
  contentText: {
    flex: 2,
    marginTop: 30,
  },
  fullnameText: {
    fontSize: 20
  },
  usernameText: {
    marginTop: 10,
    fontSize: 16,
    color: '#ddd'
  },
  editIcon: {
    width: 25,
    height: 25
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 7
  },
  inputText: {
    borderBottomColor: 'rgba(240, 129, 214, 0.5)',
    borderBottomWidth: 2,
    paddingHorizontal: 10,
    marginBottom: 10,
    paddingVertical: 5
  },
  updateBtn: {
    alignSelf: 'flex-end',
    backgroundColor: '#6f0da1',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: 10
  },
  updateBtnText: {
    color: '#fff'
  }
})