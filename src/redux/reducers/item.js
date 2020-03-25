import {
    GET_ITEMS_REQUEST,
    GET_ITEMS_SUCCESS,
    GET_ITEMS_FAILED,
    GET_ITEM_REQUEST,
    GET_ITEM_SUCCESS,
    GET_ITEM_FAILED
  } from '../actions/types'
  
  const initialState = {
    items: [],
    item: {},
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
  
      default: return state
    }
  }