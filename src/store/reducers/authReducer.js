import * as actions from '@store/actions/actionTypes'
import {
  auth
} from './initialState'

export default function (state = auth, action) {
  switch (action.type) {
    case actions.SETUP_USER:
      console.log(action)
      return {
        ...state, isSettingAuth: false, ...action.payload
      }
      default:
        return state
  }
}