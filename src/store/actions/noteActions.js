import * as actions from './actionTypes'
import {
  axiosCall as axios
} from '@utils'

/* START ACTIONS */
export const ListNotes = payload => ({
  type: actions.LIST_NOTES,
  payload
})

export const GetNote = payload => ({
  type: actions.GET_NOTE,
  payload
})

export const CreateNote = payload => ({
  type: actions.CREATE_NOTE,
  payload
})

export const UpdateNote = payload => ({
  type: actions.UPDATE_NOTE,
  payload
})

export const DeleteNote = payload => ({
  type: actions.DELETE_NOTE,
  payload
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

/* START THUNKS */
export const ListNotesAsync = _ => {
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

/* END THUNKS */