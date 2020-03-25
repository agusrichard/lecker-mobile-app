import { combineReducers } from 'redux'
import authReducer from './auth'
import userReducer from './user'
import restaurantReducer from './restaurant'
import itemReducer from './item'
import { USER_LOGOUT_SUCCESS } from '../actions/types'


const reducers = {
  auth: authReducer,
  user: userReducer,
  restaurant: restaurantReducer,
  item: itemReducer
}

const appReducer = combineReducers(reducers)

const rootReducer = (state, action) => {
  console.log('rootReducer')
  console.log(action.type)
  if (action.type === USER_LOGOUT_SUCCESS) {
    state = {}
  }

  return appReducer(state, action)
}

export default rootReducer