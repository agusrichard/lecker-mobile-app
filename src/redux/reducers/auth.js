import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILED } from '../actions/types'

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  loginToken: ''
}

export default function authReducer(state=initialState, action) {
  switch (action.type) {
    case USER_LOGIN_REQUEST: return {
      ...state,
      isLoading: true
    }

    case USER_LOGIN_SUCCESS: return {
      ...state,
      isLoading: false,
      isLoggedIn: true,
      loginToken: action.payload
    }

    case USER_LOGIN_FAILED: return {
      ...state,
      isLoading: false,
      isLoggedIn: false,
      loginToken: ''
    }

    default: return state
  }
}