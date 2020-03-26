import axios from 'axios'
import { BASE_URL } from 'react-native-dotenv'
import { 
  GET_USER_PROFILE_REQUEST,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILED,
  TOPUP_REQUEST,
  TOPUP_SUCCESS,
  TOPUP_FAILED,
  CHANGE_PROFILE_REQUEST,
  CHANGE_PROFILE_SUCCESS,
  CHANGE_PROFILE_FAILED
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

export const topUp = (loginToken, amount) => {
  return async dispatch => {
    dispatch({ type: TOPUP_REQUEST })
    try {
      const config = { headers: { Authorization: `Bearer ${loginToken}` } }
      const data = { amount }
      const response = await axios.post(`${BASE_URL}/users/topup`, data, config)
      if (response.status === 200) {
        dispatch({ type: TOPUP_SUCCESS })
      }
    } catch(err) {
      dispatch({ type: TOPUP_FAILED })
    }
  }
}

export const changeProfile = (loginToken, oldData, newData) => {
  return async dispatch => {
    dispatch({ type: CHANGE_PROFILE_REQUEST })
    try {
      let formData = new FormData()
      formData.append('profilePicture', newData.profilePicture)
      formData.append('email', newData.email || oldData.email)
      formData.append('fullName', newData.fullName || oldData.full_name)
      formData.append('address', newData.address || oldData.address)

      const config = { headers: { Authorization: `Bearer ${loginToken}` } }
      const response = await axios.patch(`${BASE_URL}/users/change-profile`, formData, config)
      if (response.status === 200) {
        dispatch({ type: CHANGE_PROFILE_SUCCESS })
      }
    } catch(err) {
      dispatch({ type: CHANGE_PROFILE_FAILED })
    }
  }
}