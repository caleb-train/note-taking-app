import React, {createContext, useState} from 'react'
import { axiosCall as axios } from '@utils'

export const Context = createContext()

export const ThemeContext = ({ children })=>{
  const [state, changeState] = useState({
    saveNote: false,
    makeNote: false,
    note: {}
  })
  
  const saveNoteAtn = ({id})=>{
    axios({
      method: 'PUT',
      path: `note/${id}`,
      cb: res=>{
        changeState(state=>({...state, note: res.data[0]}))
      }
    })
  }

  const getSingleNote = (id, clbk)=>{
    axios({
      path: `note/${id}`,
      cb: res=>{
        const resNote = res.data[0]
        clbk(resNote)
      }
    })
  }

  return (
    <Context.Provider value={{...state, changeState}}>
      {children}
    </Context.Provider>
  )
}
