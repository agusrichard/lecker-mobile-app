import axios from 'axios'
import { BASE_URL } from 'react-native-dotenv'
import { 
  GET_USER_PROFILE_REQUEST,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILED
} from '../actions/types'


export const getUserProfile = (loginToken) => {
  console.log('getUserProfile')
  return async dispatch => {
    dispatch({ type: GET_USER_PROFILE_REQUEST })
    try {
      const config = { headers: { Authorization: `Bearer ${loginToken}` } }
      const response = await axios.get(`${BASE_URL}/users/profile`, config)
      if (response.status === 200) {
        console.log(response.data.data.user)
        dispatch({
          type: GET_USER_PROFILE_SUCCESS,
          payload: response.data.data.user
        })
      }
    } catch(err) {
      dispatch({ type: GET_USER_PROFILE_FAILED })
    }
  } 
}