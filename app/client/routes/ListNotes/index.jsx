import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { axiosCall as axios } from '@utils'
import { Context } from '../../context'
import './index.scss'

const ListNotes = ({ history })=>{
  const [notes, setNotes] = useState([])

  const { changeState } = useContext(Context)

  useEffect(()=> {
    changeState(state=>({...state, note: {}, saveNote: false, makeNote: false}))
    axios({
      path: 'notes/',
      cb: res=>{
        setNotes(res.data)
      }
    })
  }, [])

  const deleteNote = (id)=>{
    axios({
      method: 'DELETE',
      path: `note/${id}`,
      cb: _=>{
        axios({
          path: 'notes/',
          cb: res=>{
            setNotes(res.data)
          }
        })
      }
    })
  }
  
  return notes.length > 0 ? (
    notes.map((note) => (
      <div key={note.id} className="w-full md:w-1/2 lg:w-4/12 h-56 px-8 my-8 inline-block">
        <div className={`card ${note.color} h-full`}>  
              <div className="card-body" onClick={_=>history.push(`/note/${note.id}`)}>
                <h4 className="card-title text-xl">{note.title}</h4>
                <p className="card-text text-sm font-montserrat" style={{marginBottom: '2rem'}}>{
                  note.body.length > 100 ? `${note.body.substr(0,100)}...` : note.body
                  }</p>
              </div>
          <div className="card-footer flex justify-between items-center" style={{border: 'none', padding: '0 1rem', height: '3rem'}}>
              <span className="text-sm">2-4-18</span>
              <button onClick={_=>deleteNote(note.id)} className="text-sm p-1 border-2">Delete</button>
          </div>
        </div>
      </div>
    ))
  ) :
  (
    <div className="flex w-full h-full flex-col justify-center items-center">
      <div className="emptyicon"></div>
      <h3 className="my-4">pen a thought</h3>
    </div>
  )
}

export default ListNotes

