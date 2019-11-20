import {
  useEffect,
  useContext
} from 'react'
import {
  Context
} from '@store/context'
import {
  EditNote,
  Reset,
  ListNotesAsync,
  DeleteNoteAsync
} from '@store/actions/noteActions'
import callToast from '@comp/Toast';

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
      console.log(message)
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