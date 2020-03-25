import { 
  USER_LOGIN_REQUEST, 
  USER_LOGIN_SUCCESS, 
  USER_LOGIN_FAILED,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
  USER_FORGOT_PASSWORD_REQUEST,
  USER_FORGOT_PASSWORD_SUCCESS,
  USER_FORGOT_PASSWORD_FAILED
} from '../actions/types'

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  loginToken: '',
  errorMessage: ''
}

export default function authReducer(state=initialState, action) {
  switch (action.type) {
    case USER_LOGIN_REQUEST: return {
      ...state,
      isLoading: !state.isLoading
    }

    case USER_LOGIN_SUCCESS: return {
      ...state,
      isLoading: !state.isLoading,
      isLoggedIn: true,
      loginToken: action.payload
    }

    case USER_LOGIN_FAILED: return {
      ...state,
      isLoading: !state.isLoading,
      isLoggedIn: false,
      loginToken: '',
      errorMessage: 'Failed to login'
    }

    case USER_REGISTER_REQUEST: return {
      ...state,
      isLoading: !state.isLoading
    }

    case USER_REGISTER_SUCCESS: return {
      ...state,
      isLoading: !state.isLoading
    }

    case USER_REGISTER_FAILED: return {
      ...state,
      isLoading: !state.isLoading,
      errorMessage: 'Failed to register'
    }

    case USER_FORGOT_PASSWORD_REQUEST: return {
      ...state,
      isLoading: !state.isLoading
    }

    case USER_FORGOT_PASSWORD_SUCCESS: return {
      ...state,
      isLoading: !state.isLoading
    }

    case USER_FORGOT_PASSWORD_FAILED: return {
      ...state,
      isLoading: !state.isLoading,
      errorMessage: 'Failed to change password'
    }

    default: return state
  }
}