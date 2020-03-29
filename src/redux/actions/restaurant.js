import axios from 'axios'
import { BASE_URL } from 'react-native-dotenv'
import {
  GET_RESTAURANTS_REQUEST,
  GET_RESTAURANTS_SUCCESS,
  GET_RESTAURANTS_FAILED,
  GET_RESTAURANT_REQUEST,
  GET_RESTAURANT_SUCCESS,
  GET_RESTAURANT_FAILED
} from '../actions/types'

export const getRestaurants = () => {
  return async dispatch => {
    dispatch({ type: GET_RESTAURANTS_REQUEST })
    try {
      const response = await axios.get(`http://3.88.30.184:5000/restaurants`)
      console.log(response)
      if (response.status === 200) {
        dispatch({
          type: GET_RESTAURANTS_SUCCESS,
          payload: response.data.data
        })
      }
    } catch(err) {
      dispatch({ type: GET_RESTAURANTS_FAILED })
    }
  }
}

export const getRestaurant = (restaurantId) => {
  return async dispatch => {
    dispatch({ type: GET_RESTAURANT_REQUEST })
    try {
      const response = await axios.get(`http://3.88.30.184:5000/restaurants/${restaurantId}`)
      console.log(response)
      if (response.status === 200) {
        dispatch({
          type: GET_RESTAURANT_SUCCESS,
          payload: response.data.data
        })
      }
    } catch(err) {
      dispatch({ type: GET_RESTAURANT_FAILED })
    }
  }
}