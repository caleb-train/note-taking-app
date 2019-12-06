import {
  useEffect
} from 'react'
import Router from "next/router";
import callToast from '@comp/Toast';

const useViewNote = (id, props) => {
  const {
    data: {
      0: note
    },
    editNote,
    isErrored,
    message,
    isLoading,
    EditNote,
    GetNoteAsync,
    Reset,
  } = props

  useEffect(() => {
    if (message) callToast(message, isErrored ? 'error' : 'success');
    EditNote({
      message: '',
      isErrored: false
    })
  }, [JSON.stringify(note)])

  useEffect(() => {
    if (!props.auth.isAuthenticated()) {
      callToast('Unauthenticated User', 'error');
      Router.push("/");
    }
  }, [])

  useEffect(() => {
    id ? GetNoteAsync(id) : null
    return () => Reset()
  }, [id])

  const updateNote = e => {
    e.persist()
    const upd = {
      ...editNote,
      [e.target.name]: e.target.value
    }

    EditNote({
      editNote: upd,
      makeNote: false,
      saveNote: (JSON.stringify(upd) !== JSON.stringify(note))
    })
  }

  return {
    editNote,
    isLoading,
    updateNote,
    message,
    isErrored,
    note
  }
}

export default useViewNote