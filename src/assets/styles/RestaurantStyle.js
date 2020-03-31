import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  restaurantContainer: {
    padding: 20,
    alignItems: 'center',
    marginVertical: 15,
    backgroundColor: '#efb0f5'
  },
  restaurantCardContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10
  },
  imgContainer: {
    flex: 1
  },
  restaurantImg: {
    width: 75,
    height: 75,
    borderRadius: 50
  },
  textContainer: {
    flex: 3,
    marginLeft: 20
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#a134eb',
    marginTop: 10
  }
})