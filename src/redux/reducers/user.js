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

const initialState = {
  userProfile: {},
  errorMesasge: '',
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
      errorMesasge: 'Failed to get user profile'
    }

    case TOPUP_REQUEST: return {
      ...state,
      isLoading: !state.isLoading
    }

    case TOPUP_SUCCESS: return {
      ...state,
      isLoading: !state.isLoading
    }

    case TOPUP_FAILED: return {
      ...state,
      isLoading: !state.isLoading,
      errorMesasge: 'Failed to topup balance'
    }

    case CHANGE_PROFILE_REQUEST: return {
      ...state,
      isLoading: !state.isLoading
    }

    case CHANGE_PROFILE_SUCCESS: return {
      ...state,
      isLoading: !state.isLoading
    }

    case CHANGE_PROFILE_FAILED: return {
      ...state,
      isLoading: !state.isLoading,
      errorMesasge: 'Failed to topup balance'
    }

    default: return state
  }
}