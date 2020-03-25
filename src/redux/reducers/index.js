import { combineReducers } from 'redux'
import authReducer from './auth'
import { USER_LOGOUT_SUCCESS } from '../actions/types'


const reducers = {
  auth: authReducer
}

const appReducer = combineReducers(reducers)

const rootReducer = (state, action) => {

  if (action.type === USER_LOGOUT_SUCCESS) {
    state = {}
  }

  return appReducer(state, action)
}

export default rootReducer