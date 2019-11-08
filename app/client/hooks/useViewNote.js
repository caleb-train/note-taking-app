import { useEffect, useContext } from 'react'
import { Context } from '@store/context'
import { GetNoteAsync, EditNote, Reset } from '@store/actions/noteActions'
import callToast from '@comp/Toast';

const useViewNote = id=>{
  const {
    dispatch,
    note: {
      data: {0: note},
      editNote, isErrored,
      message, isLoading
    } } = useContext(Context)

  useEffect(()=>{
    if(message) callToast(message, isErrored ? 'error' : 'success');
    dispatch(EditNote({message: '', isErrored: false}))
  }, [JSON.stringify(note)])
  
  useEffect(()=> {
    GetNoteAsync(dispatch, id)
    return ()=>dispatch(Reset())
  }, [])

  const updateNote = e => {
    e.persist()
    const upd = { ...editNote, [e.target.name]: e.target.value }

    dispatch(EditNote({
      editNote: upd,
      makeNote: false,
      saveNote: (JSON.stringify(upd) !== JSON.stringify(note))
    }))
  }

  return {
    editNote, isLoading, updateNote,
    message, isErrored, note
  }
}

export default useViewNote
