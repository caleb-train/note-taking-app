import {
  takeEvery
} from 'redux-saga/effects'
import * as actions from '../actions/actionTypes'

function* listNotes(action) {
  /* try {
    const user = yield call(Api.fetchUser, action.payload.userId);
    yield put({
      type: "USER_FETCH_SUCCEEDED",
      user: user
    });
  } catch (e) {
    yield put({
      type: "USER_FETCH_FAILED",
      message: e.message
    });
  } */
  console.log('hi')
}


function* rootSaga() {
  yield takeEvery(actions.LIST_NOTES, listNotes)
}

export default rootSaga;