import {
  useEffect
} from 'react'
import callToast from '@comp/Toast';

const useListNote = props => {
  const {
    data,
    isLoading,
    message,
    isErrored,
    EditNote,
    ListNotesAsync,
    DeleteNoteAsync,
    Reset,
  } = props

  useEffect(() => {
    if (message) {
      callToast(message, isErrored ? 'error' : 'success');

      EditNote({
        message: '',
        isErrored: false
      })
    }
  }, [JSON.stringify(data)])

  useEffect(() => {
    ListNotesAsync()
    return () => Reset()
  }, [])

  const DeleteNote = noteId => {
    DeleteNoteAsync(noteId)
  }

  return {
    isLoading,
    data,
    DeleteNote,
    message,
    isErrored
  }
}

export default useListNote