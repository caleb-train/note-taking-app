import React, {useContext} from 'react'
import { Link, withRouter } from 'react-router-dom'
import { axiosCall as axios } from '@utils'
import './index.scss'
import { Context } from '../../context'

const Nav = ({ history })=>{
  const { saveNote, changeState, note, makeNote } = useContext(Context)

  const updateNote = ()=>{
    axios({
      method: 'PATCH',
      path: `note/${note.id}`,
      payload: note,
      cb: res=>{
        const resNote = res.data[0]
        changeState(state=>({...state, note: resNote, saveNote: false}))
      }
    })
  }

  const createNote = ()=>{
    axios({
      method: 'POST',
      path: `note`,
      payload: note,
      cb: res=>{
        if(!res.error) history.push('/')
      }
    })
  }

  const path = history.location.pathname;


  return (
    <nav className="mainNav px-2 sm:px-8  justify-between">
      <Link to="/" className="Logo flex items-center flex-grow">
        <div className="border-0 logo"></div>
        <h3>NoteApp</h3>
      </Link>
      <div className="w-32 flex flex-row flex-grow-0 justify-around">
        {makeNote ? <button className="btn p-1 px-2 text-white bg-green-600" onClick={createNote}>Create</button> : <Link to="/note"><button className="btn p-1 px-2">Add</button></Link> }
        {saveNote ? <button className="btn p-1 px-2 text-white bg-gray-800" onClick={updateNote}>Save</button>: null}
      </div>
      
    </nav>
  )
}

export default withRouter(Nav)