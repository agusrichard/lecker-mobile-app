import axios from 'axios'
import { BASE_URL } from 'react-native-dotenv'

import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILED } from './types'

export const userLogin = (username, password) => {
  return async dispatch => {
    dispatch({ type: USER_LOGIN_REQUEST })
    try {
      const loginData = { username, password }
      const response = await axios.post(BASE_URL + 'auth/login', loginData)
      if (response.status === 200) {
        dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data.data.token })
      } else {
        dispatch({ type: USER_LOGIN_FAILED })
      }
    } catch(err) {
      dispatch({ type: USER_LOGIN_FAILED })
    }
  }
}