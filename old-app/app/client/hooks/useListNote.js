import {
  useEffect,
  useContext
} from './node_modules/react'
import {
  Context
} from './node_modules/@store/context'
import {
  EditNote,
  Reset,
  ListNotesAsync,
  DeleteNoteAsync
} from './node_modules/@store/actions/noteActions'
import callToast from './node_modules/@comp/Toast';

const useMakeNote = () => {
  const {
    dispatch,
    note: {
      data,
      isLoading,
      message,
      isErrored
    }
  } = useContext(Context)

  useEffect(() => {
    if (message) {
      callToast(message, isErrored ? 'error' : 'success');

      dispatch(EditNote({
        message: '',
        isErrored: false
      }))
    }
  }, [JSON.stringify(data)])

  useEffect(() => {
    ListNotesAsync(dispatch)
    return () => dispatch(Reset())
  }, [])

  const DeleteNote = noteId => {
    DeleteNoteAsync(dispatch, noteId)
  }

  return {
    isLoading,
    data,
    DeleteNote,
    message,
    isErrored
  }
}

export default useMakeNote