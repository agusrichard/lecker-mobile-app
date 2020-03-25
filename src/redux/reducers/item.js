import {
    GET_ITEMS_REQUEST,
    GET_ITEMS_SUCCESS,
    GET_ITEMS_FAILED,
    GET_ITEM_REQUEST,
    GET_ITEM_SUCCESS,
    GET_ITEM_FAILED,
    GET_ITEMS_BY_RESTAURANT_REQUEST,
    GET_ITEMS_BY_RESTAURANT_SUCCESS,
    GET_ITEMS_BY_RESTAURANT_FAILED,
    GET_ITEM_REVIEWS_REQUEST,
    GET_ITEM_REVIEWS_SUCCESS,
    GET_ITEM_REVIEWS_FAILED
  } from '../actions/types'
  
  const initialState = {
    items: [],
    item: {},
    itemsByRestaurant: [],
    reviews: [],
    isLoading: false,
    errorMessage: ''
  }
  
  export default function itemReducer(state=initialState, action) {
    switch (action.type) {
      case GET_ITEMS_REQUEST: return {
        ...state,
        isLoading: !state.isLoading
      }
  
      case GET_ITEMS_SUCCESS: return {
        ...state,
        isLoading: !state.isLoading,
        items: action.payload
      }
  
      case GET_ITEMS_FAILED: return {
        ...state,
        isLoading: !state.isLoading,
        errorMessage: 'Failed to get items'
      }
  
      case GET_ITEM_REQUEST: return {
        ...state,
        isLoading: !state.isLoading
      }
  
      case GET_ITEM_SUCCESS: return {
        ...state,
        isLoading: !state.isLoading,
        item: action.payload
      }
  
      case GET_ITEM_FAILED: return {
        ...state,
        isLoading: !state.isLoading,
        errorMessage: 'Failed to get items'
      }

      case GET_ITEMS_BY_RESTAURANT_REQUEST: return {
        ...state,
        isLoading: !state.isLoading
      }
  
      case GET_ITEMS_BY_RESTAURANT_SUCCESS: return {
        ...state,
        isLoading: !state.isLoading,
        itemsByRestaurant: action.payload
      }
  
      case GET_ITEMS_BY_RESTAURANT_FAILED: return {
        ...state,
        isLoading: !state.isLoading,
        errorMessage: 'Failed to get items'
      }

      case GET_ITEM_REVIEWS_REQUEST: return {
        ...state,
        isLoading: !state.isLoading
      }
  
      case GET_ITEM_REVIEWS_SUCCESS: return {
        ...state,
        isLoading: !state.isLoading,
        reviews: action.payload
      }
  
      case GET_ITEM_REVIEWS_FAILED: return {
        ...state,
        isLoading: !state.isLoading,
        errorMessage: 'Failed to get items'
      }
  
      default: return state
    }
  }