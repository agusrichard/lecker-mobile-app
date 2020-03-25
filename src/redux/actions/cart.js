import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART
} from ''

export const addItemToCart = (itemId, name, quantity, price, total) => dispatch => {
  dispatch({
    type: ADD_ITEM_TO_CART,
    payload: { itemId, name, quantity, price, total }
  })
}

export const removeItemFromCart = (itemId) => dispatch => {
  dispatch({
    type: REMOVE_ITEM_FROM_CART,
    payload: itemId
  })
}