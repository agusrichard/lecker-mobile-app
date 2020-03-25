import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART
} from '../actions/types'

const initialState = {
  itemsInCart: []
}

export default function cartReducer(state=initialState, action) {
  switch (action.type) {
    case ADD_ITEM_TO_CART: return {
      ...state,
      itemsInCart: state.itemsInCart !== undefined ? [...state.itemsInCart, action.payload] : [action.payload]
    }
  
    case REMOVE_ITEM_FROM_CART: return {
      ...state,
      itemsInCart: state.itemsInCart !== undefined ? state.itemsInCart.filter(element => element.itemId !== action.payload) : []
    }

    default: return state
  }
}