import axios from 'axios'
import { BASE_URL } from 'react-native-dotenv'
import {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILED,
  GET_ITEM_REQUEST,
  GET_ITEM_SUCCESS,
  GET_ITEM_FAILED
} from '../actions/types'

export const getItems = () => {
  return async dispatch => {
    dispatch({ type: GET_ITEMS_REQUEST })
    try {
      const response = await axios.get(`${BASE_URL}/items`)
      console.log(response)
      if (response.status === 200) {
        dispatch({
          type: GET_ITEMS_SUCCESS,
          payload: response.data.data
        })
      }
    } catch(err) {
      dispatch({ type: GET_ITEMS_FAILED })
    }
  }
}

export const getItem = (itemId) => {
  return async dispatch => {
    dispatch({ type: GET_ITEM_REQUEST })
    try {
      const response = await axios.get(`${BASE_URL}/items/${itemId}`)
      console.log(response)
      if (response.status === 200) {
        dispatch({
          type: GET_ITEM_SUCCESS,
          payload: response.data.data.item
        })
      }
    } catch(err) {
      dispatch({ type: GET_ITEM_FAILED })
    }
  }
}