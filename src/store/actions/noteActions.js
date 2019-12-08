import {
  call,
  put
} from 'redux-saga/effects'
import * as actions from './actionTypes'
import {
  axiosCall as axios
} from '@utils'

/* START ACTIONS */
export const ListNotesAsync = () => ({
  type: actions.LIST_NOTES_ASYNC
})

export const GetNoteAsync = id => ({
  type: actions.GET_NOTE_ASYNC,
  id
})

export const CreateNoteAsync = payload => ({
  type: actions.CREATE_NOTE_ASYNC,
  payload
})

export const UpdateNoteAsync = payload => ({
  type: actions.UPDATE_NOTE_ASYNC,
  payload
})

export const DeleteNoteAsync = id => ({
  type: actions.DELETE_NOTE_ASYNC,
  id
})

export const EditNote = payload => ({
  type: actions.EDIT_NOTE,
  payload
})

export const Reset = (payload = {}) => ({
  type: actions.RESET,
  payload
})

export const NoteActions = (type, payload = {}) => ({
  type,
  payload
})

/* END ACTIONS */

/* START SAGAS */

export function* ListNotesSaga() {
  yield put(NoteActions(actions.RESET))
  yield put(NoteActions(actions.EDIT_NOTE, {
    isLoading: true
  }))

  try {
    const res = yield call(axios, {
      path: 'notes/'
    });
    yield put(NoteActions(actions.LIST_NOTES, res.data));
  } catch (message) {
    yield put(NoteActions(actions.FETCH_ERROR, {
      message
    }));
  }
}

export function* GetNoteSaga({
  id
}) {
  yield put(NoteActions(actions.RESET))
  yield put(NoteActions(actions.EDIT_NOTE, {
    isLoading: true
  }))

  try {
    const res = yield call(axios, {
      path: `note/${id}`
    });
    yield put(NoteActions(actions.GET_NOTE, {
      data: res.data,
      editNote: res.data[0],
      message: res.message
    }));
  } catch (message) {
    yield put(NoteActions(actions.FETCH_ERROR, {
      message
    }));
  }
}

export function* CreateNoteSaga({
  payload
}) {
  yield put(NoteActions(actions.EDIT_NOTE, {
    isLoading: true
  }))

  try {
    const res = yield call(axios, {
      method: 'POST',
      path: `note`,
      payload,
    });
    yield put(NoteActions(actions.CREATE_NOTE, {
      message: res.message
    }));
  } catch (message) {
    yield put(NoteActions(actions.FETCH_ERROR, {
      message
    }));
  }
}

export function* UpdateNoteSaga({
  payload
}) {
  yield put(NoteActions(actions.EDIT_NOTE, {
    isLoading: true
  }))

  try {
    const res = yield call(axios, {
      method: 'PATCH',
      path: `note/${payload.id}`,
      payload,
    });
    yield put(NoteActions(actions.UPDATE_NOTE, {
      message: res.message
    }));
  } catch (message) {
    yield put(NoteActions(actions.FETCH_ERROR, {
      message
    }));
  }
}

export function* DeleteNoteSaga({
  id
}) {
  console.log('ssspp')
  yield put(NoteActions(actions.EDIT_NOTE, {
    isLoading: true
  }))

  try {
    const res = yield call(axios, {
      method: 'DELETE',
      path: `note/${id}`
    });
    yield put(NoteActions(actions.DELETE_NOTE, {
      data: [null],
      message: res.message
    }));
    yield put(ListNotesAsync())
  } catch (message) {
    yield put(NoteActions(actions.FETCH_ERROR, {
      message
    }));
  }
}

/* END SAGAS */