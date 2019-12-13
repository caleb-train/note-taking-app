import {
  takeLatest,
  all
} from 'redux-saga/effects'
import * as actions from '../actions/actionTypes'
import {
  ListNotesSaga,
  GetNoteSaga,
  CreateNoteSaga,
  UpdateNoteSaga,
  DeleteNoteSaga,
} from '../actions/noteActions'
import {
  GetUserSaga,
} from '../actions/authActions'


function* rootSaga() {
  yield all([
    takeLatest(actions.LIST_NOTES_ASYNC, ListNotesSaga),
    takeLatest(actions.GET_NOTE_ASYNC, GetNoteSaga),
    takeLatest(actions.CREATE_NOTE_ASYNC, CreateNoteSaga),
    takeLatest(actions.UPDATE_NOTE_ASYNC, UpdateNoteSaga),
    takeLatest(actions.DELETE_NOTE_ASYNC, DeleteNoteSaga),
    takeLatest(actions.GET_USER, GetUserSaga)
  ])
}

export default rootSaga;