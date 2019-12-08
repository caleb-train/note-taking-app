import {
  call,
  put
} from 'redux-saga/effects'
import Auth from '@utils/Auth'
import * as actions from './actionTypes'

const auth = new Auth(null)

export const GetUser = () => ({
  type: actions.GET_USER
})

export const AuthActions = (type, payload = {}) => ({
  type,
  payload
})

export function* GetUserSaga() {
  try {
    const user = auth.extractUser();
    if (user) {
      yield put(AuthActions(actions.SETUP_USER, {
        user,
        message: '',
        isAuthenticated: auth.isAuthenticated()
      }));
    } else {
      yield put(AuthActions(actions.SETUP_USER, {
        user: {},
        message: 'Unauthorized User',
        isAuthenticated: false
      }))
    }
  } catch (message) {
    yield put(AuthActions(actions.SETUP_USER, {
      user: {},
      message: 'Unauthorized User',
      isAuthenticated: false
    }))
  }
}