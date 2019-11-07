import { useEffect, useContext } from 'react'
import { Context } from '@store/context'
import { EditNote, Reset } from '@store/actions/noteActions'
import callToast from '@comp/Toast';

const useMakeNote = ()=> {
  const { 
    dispatch,
    note: {
      data, editNote, isErrored,
      message, isLoading
    }
  } = useContext(Context)
  
  useEffect(()=>{
    if(message) callToast(message, isErrored ? 'error' : 'success');
    dispatch(EditNote({message: '', isErrored: false}))
  }, [JSON.stringify(data)])

  useEffect(()=>{
    dispatch(Reset())
    return ()=>dispatch(Reset())
  }, [])

  const updateNote = e => {
    e.persist()
    const upd = { ...editNote, [e.target.name]: e.target.value }
    dispatch(EditNote({ editNote: upd, makeNote: !!(upd.title && upd.body) }))
  }

  return {
    editNote, isLoading, updateNote,
    message, isErrored
  }
}

export default useMakeNote