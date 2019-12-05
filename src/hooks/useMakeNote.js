import {
  useEffect
} from 'react'
import callToast from '@comp/Toast';

const useMakeNote = props => {
  const {
    data,
    editNote,
    isErrored,
    message,
    isLoading,
    EditNoteNow,
    Reset,
  } = props

  useEffect(() => {
    if (message) callToast(message, isErrored ? 'error' : 'success');
    EditNoteNow({
      message: '',
      isErrored: false
    })
  }, [JSON.stringify(data)])

  useEffect(() => {
    Reset()
    return () => Reset()
  }, [])

  const updateNote = e => {
    e.persist()
    const upd = {
      ...editNote,
      [e.target.name]: e.target.value
    }
    EditNoteNow({
      editNote: upd,
      makeNote: !!(upd.title && upd.body)
    })
  }

  return {
    editNote,
    isLoading,
    updateNote,
    message,
    isErrored
  }
}

export default useMakeNote