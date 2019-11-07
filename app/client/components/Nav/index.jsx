import React, {useContext} from 'react'
import { Link, withRouter } from 'react-router-dom'
import { UpdateNoteAsync, CreateNoteAsync } from '@store/actions/noteActions'
import { Context } from '@store/context'
import './index.scss'

const Nav = ({ history })=>{
  const {
    dispatch,
    note: {saveNote, editNote, makeNote}
  } = useContext(Context)

  return (
    <nav className="mainNav px-2 sm:px-8  justify-between">
      <Link to="/" className="Logo flex items-center flex-grow">
        <div className="border-0 logo"></div>
        <h3>ScrapBook</h3>
      </Link>
      <div className="w-32 flex flex-row flex-grow-0 justify-around">
        {makeNote ? <button className="btn p-1 px-2 text-white bg-green-600" onClick={_=>CreateNoteAsync(dispatch, editNote)}>Create</button> : <Link to="/note"><button className="btn p-1 px-2">Add</button></Link> }
        {saveNote ? <button className="btn p-1 px-2 text-white bg-gray-800" onClick={_=>UpdateNoteAsync(dispatch, editNote)}>Save</button>: null}
      </div>
    </nav>
  )
}

export default withRouter(Nav)