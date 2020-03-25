import { 
  GET_USER_PROFILE_REQUEST,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILED
} from '../actions/types'

const initialState = {
  userProfile: {},
  errorMessage: '',
  isLoading: false
}

export default function userReducer(state=initialState, action) {
  switch (action.type) {
    case GET_USER_PROFILE_REQUEST: return {
      ...state,
      isLoading: !state.isLoading
    }

    case GET_USER_PROFILE_SUCCESS: return {
      ...state,
      isLoading: !state.isLoading,
      userProfile: action.payload
    }

    case GET_USER_PROFILE_FAILED: return {
      ...state,
      isLoading: !state.isLoading,
      errorMessage: 'Failed to get user profile'
    }

    default: return state
  }
}