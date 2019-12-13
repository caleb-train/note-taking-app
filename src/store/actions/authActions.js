import {
  call,
  put
} from 'redux-saga/effects'
import Auth from '@utils/Auth'
import * as actions from './actionTypes'
import {
  axiosCall as axios
} from '@utils'

/* const auth = new Auth(null) */
export const GetUser = () => ({
  type: actions.GET_USER
})

export const AuthActions = (type, payload = {}) => ({
  type,
  payload
})

export function* GetUserSaga() {
  try {
    const res = /* auth.extractUser(); */ yield call(fetch, '/api/me');
    const user = yield call([res, 'json'])

    if (user && !user.error) {
      yield put(AuthActions(actions.SETUP_USER, {
        user,
        message: '',
        isAuthenticated: true /* auth.isAuthenticated() */
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