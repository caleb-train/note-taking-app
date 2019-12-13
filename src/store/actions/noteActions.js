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

  const resp = yield call(fetch, '/api/notes')
  const res = yield call([resp, 'json'])

  yield put(
    res.error ?
    NoteActions(actions.FETCH_ERROR, {
      message: res.error
    }) :
    NoteActions(actions.LIST_NOTES, res.data)
  )
}


export function* GetNoteSaga({
  id
}) {
  yield put(NoteActions(actions.RESET))
  yield put(NoteActions(actions.EDIT_NOTE, {
    isLoading: true
  }))

  const resp = yield call(fetch, `/api/note/${id}`)
  const res = yield call([resp, 'json'])

  yield put(
    res.error ?
    NoteActions(actions.FETCH_ERROR, {
      message: res.error
    }) :
    NoteActions(actions.GET_NOTE, {
      data: res.data,
      editNote: res.data[0],
      message: res.message
    })
  )
}

export function* CreateNoteSaga({
  payload
}) {
  yield put(NoteActions(actions.EDIT_NOTE, {
    isLoading: true
  }))

  const resp = yield call(fetch, `/api/note`, {
    method: 'POST',
    body: JSON.stringify(payload)
  })

  const res = yield call([resp, 'json'])

  yield put(
    res.error ?
    NoteActions(actions.FETCH_ERROR, {
      message: res.error
    }) :
    NoteActions(actions.CREATE_NOTE, {
      message: res.message
    })
  )
}

export function* UpdateNoteSaga({
  payload
}) {
  yield put(NoteActions(actions.EDIT_NOTE, {
    isLoading: true
  }))

  const resp = yield call(fetch, `/api/note/${payload.id}`, {
    method: 'PATCH',
    body: JSON.stringify(payload)
  })
  const res = yield call([resp, 'json'])

  yield put(
    res.error ?
    NoteActions(actions.FETCH_ERROR, {
      message: res.error
    }) :
    NoteActions(actions.UPDATE_NOTE, {
      message: res.message
    })
  )
}

export function* DeleteNoteSaga({
  id
}) {
  yield put(NoteActions(actions.EDIT_NOTE, {
    isLoading: true
  }))

  const resp = yield call(fetch, `/api/note/${id}`, {
    method: 'DELETE',
  })
  const res = yield call([resp, 'json'])

  if (res.error) {
    yield put(NoteActions(actions.FETCH_ERROR, {
      message: res.error
    }))
  } else {
    yield put(NoteActions(actions.DELETE_NOTE, {
      data: [null],
      message: res.message
    }))
    yield put(ListNotesAsync())
  }
}

/* END SAGAS */