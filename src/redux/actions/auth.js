import axios from 'axios'
import { BASE_URL } from 'react-native-dotenv'
import { 
  USER_LOGIN_REQUEST, 
  USER_LOGIN_SUCCESS, 
  USER_LOGIN_FAILED,
  USER_LOGOUT_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
  USER_FORGOT_PASSWORD_REQUEST,
  USER_FORGOT_PASSWORD_SUCCESS,
  USER_FORGOT_PASSWORD_FAILED
} from './types'


export const loginUser = (username, password) => {
  return async dispatch => {
    dispatch({ type: USER_LOGIN_REQUEST })
    try {
      const loginData = { username, password }
      const response = await axios.post(`${BASE_URL}/auth/login`, loginData)
      if (response.status === 200) {
        const loginToken = response.data.data.token
        dispatch({ type: USER_LOGIN_SUCCESS, payload: loginToken })
        console.log('will this thing run?')
        return loginToken
      } else {
        dispatch({ type: USER_LOGIN_FAILED })
      }
    } catch(err) {
      dispatch({ type: USER_LOGIN_FAILED })
    }
  }
}

export const logoutUser = () => {
  return dispatch => {
    dispatch({ type: USER_LOGOUT_SUCCESS })
  }
}

export const registerUser = (name, email, username, password) => {
  return async dispatch => {
    dispatch({ type: USER_REGISTER_REQUEST })
    try {
      const registerData = { name, email, username, password }
      const response = await axios.post(`${BASE_URL}/auth/register`, registerData)
      console.log(response)
      if (response.status === 200) {
        dispatch({ type: USER_REGISTER_SUCCESS })
      }
    } catch(err) {
      dispatch({ type: USER_REGISTER_FAILED })
    }
  }
}

export const forgotPasswordUser = (username, email) => {
  return async dispatch => {
    dispatch({ type: USER_FORGOT_PASSWORD_REQUEST })
    try {
      const forgotData = { username, email }
      const response = await axios.post(`${BASE_URL}/auth/forgot-password`, forgotData)
      if (response.status === 200) {
        dispatch({ type: USER_FORGOT_PASSWORD_SUCCESS })
      }
    } catch(err) {
      dispatch({ type: USER_FORGOT_PASSWORD_FAILED })
    }
  }
}

export const changePasswordUser = (newPassword) => {

}
