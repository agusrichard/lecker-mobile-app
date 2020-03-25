import {
  GET_RESTAURANTS_REQUEST,
  GET_RESTAURANTS_SUCCESS,
  GET_RESTAURANTS_FAILED
} from '../actions/types'

const initialState = {
  restaurants: [],
  restaurant: {},
  isLoading: false,
  errorMessage: ''
}

export default function restaurantReducer(state=initialState, action) {
  switch (action.type) {
    case GET_RESTAURANTS_REQUEST: return {
      ...state,
      isLoading: !state.isLoading
    }

    case GET_RESTAURANTS_SUCCESS: return {
      ...state,
      isLoading: !state.isLoading,
      restaurants: action.payload
    }

    case GET_RESTAURANTS_FAILED: return {
      ...state,
      isLoading: !state.isLoading,
      errorMessage: 'Failed to get restaurants'
    }

    case GET_RESTAURANT_REQUEST: return {
      ...state,
      isLoading: !state.isLoading
    }

    case GET_RESTAURANT_SUCCESS: return {
      ...state,
      isLoading: !state.isLoading,
      restaurants: action.payload
    }

    case GET_RESTAURANT_FAILED: return {
      ...state,
      isLoading: !state.isLoading,
      errorMessage: 'Failed to get restaurant'
    }

    default: return state
  }
}