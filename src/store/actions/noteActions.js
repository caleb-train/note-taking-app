import {
  call,
  put,
  delay
} from 'redux-saga/effects'
import * as actions from './actionTypes'
import {
  axiosCall as axios
} from '@utils'

/* START ACTIONS */
export const ListNotes = payload => ({
  type: actions.LIST_NOTES,
  payload
})

export const ListNotesAsync = () => ({
  type: actions.LIST_NOTES_ASYNC
})

export const GetNote = payload => ({
  type: actions.GET_NOTE,
  payload
})

export const GetNoteAsync = id => ({
  type: actions.GET_NOTE_ASYNC,
  id
})

export const CreateNote = payload => ({
  type: actions.CREATE_NOTE,
  payload
})

export const CreateNoteAsync = payload => ({
  type: actions.CREATE_NOTE_ASYNC,
  payload
})

export const UpdateNote = payload => ({
  type: actions.UPDATE_NOTE,
  payload
})

export const UpdateNoteAsync = payload => ({
  type: actions.UPDATE_NOTE_ASYNC,
  payload
})

export const DeleteNote = payload => ({
  type: actions.DELETE_NOTE,
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

export const ErrorNote = payload => ({
  type: actions.FETCH_ERROR,
  payload
})

export const Reset = (payload = {}) => ({
  type: actions.RESET,
  payload
})
/* END ACTIONS */

/* START SAGAS */

export function* ListNotesSaga() {
  yield put(Reset())
  yield put(EditNote({
    isLoading: true
  }))

  try {
    const res = yield call(axios, {
      path: 'notes/'
    });
    yield put(ListNotes(res.data));
  } catch (message) {
    yield put(ErrorNote({
      message
    }));
  }
}

export function* GetNoteSaga({
  id
}) {
  yield put(Reset())
  yield put(EditNote({
    isLoading: true
  }))

  try {
    const res = yield call(axios, {
      path: `note/${id}`
    });
    yield put(GetNote({
      data: res.data,
      editNote: res.data[0],
      message: res.message
    }));
  } catch (message) {
    yield put(ErrorNote({
      message
    }));
  }
}

export function* CreateNoteSaga({
  payload
}) {
  console.log(payload)
  yield put(EditNote({
    isLoading: true
  }))

  try {
    const res = yield call(axios, {
      method: 'POST',
      path: `note`,
      payload,
    });
    yield put(CreateNote({
      message: res.message
    }));
  } catch (message) {
    yield put(ErrorNote({
      message
    }));
  }
}

export function* UpdateNoteSaga({
  payload
}) {
  console.log(payload)
  yield put(EditNote({
    isLoading: true
  }))

  try {
    const res = yield call(axios, {
      method: 'PATCH',
      path: `note/${payload.id}`,
      payload,
    });
    yield put(UpdateNote({
      message: res.message
    }));
  } catch (message) {
    yield put(ErrorNote({
      message
    }));
  }
}

export function* DeleteNoteSaga({
  id
}) {
  yield put(EditNote({
    isLoading: true
  }))

  try {
    const res = yield call(axios, {
      method: 'DELETE',
      path: `note/${id}`
    });
    yield put(DeleteNote({
      data: [null],
      message: res.message
    }));
    yield put(ListNotesAsync())
  } catch (message) {
    yield put(ErrorNote({
      message
    }));
  }
}


/* END SAGAS */

/* START THUNKS */
/* export const ListNotesAsync = _ => {
  return dispatch => {
    dispatch(Reset())
    dispatch(EditNote({
      isLoading: true
    }))
    console.log('ssss')
    axios({
        path: 'notes/'
      })
      .then(res => dispatch(ListNotes(res.data)))
      .catch(message => dispatch(ErrorNote({
        message
      })))
  }
}

export const GetNoteAsync = (id) => {
  return dispatch => {
    dispatch(Reset())
    dispatch(EditNote({
      isLoading: true
    }))
    axios({
        path: `note/${id}`
      })
      .then(res => dispatch(GetNote({
        data: res.data,
        editNote: res.data[0],
        message: res.message
      })))
      .catch(message => dispatch(ErrorNote({
        message
      })))

  }
}
export const CreateNoteAsync = payload => {
  return dispatch => {
    dispatch(EditNote({
      isLoading: true
    }))
    return axios({
        method: 'POST',
        path: `note`,
        payload,
      })
      .then(res => {
        console.log(res)
        dispatch(CreateNote({
          message: res.message
        }))
      })
      .catch(message => {
        console.log(message)
        dispatch(ErrorNote({
          message
        }))
      })
  }
}

export const UpdateNoteAsync = (payload) => {
  return dispatch => {
    dispatch(EditNote({
      isLoading: true
    }))
    axios({
        method: 'PATCH',
        path: `note/${payload.id}`,
        payload,
      })
      .then(res => dispatch(UpdateNote({
        message: res.message
      })))
      .catch(message => dispatch(ErrorNote({
        message
      })))
  }
}


export const DeleteNoteAsync = (id) => {
  return dispatch => {
    dispatch(EditNote({
      isLoading: true
    }))
    axios({
        method: 'DELETE',
        path: `note/${id}`
      })
      .then(res => {
        dispatch(DeleteNote({
          data: [null],
          message: res.message
        }))
        dispatch(ListNotesAsync(dispatch))
      })
      .catch(message => dispatch(ErrorNote({
        message
      })))
  }

}

 */
/* END THUNKS */