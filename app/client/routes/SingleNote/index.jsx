import React, { useEffect, useState, useContext } from 'react'
import { withRouter } from 'react-router-dom'
import { axiosCall as axios } from '@utils'
import './index.scss'
import { Context } from '../../context'

const SingleNote = ({ match })=>{
  const [editNote, setEditNote] = useState({})
  
  const { id } = match.params
  
  const { changeState, note } = useContext(Context)

  useEffect(()=> {
    axios({
      path: `note/${id}`,
      cb: res=>{
        const resNote = res.data[0]
        setEditNote(resNote)
        changeState(state=>({...state, note: resNote, saveNote: false, makeNote: false }))
      }
    })
  }, [])

  const auto_grow = (e) => {
    e.target.style.height = (e.target.scrollHeight)+"px";
  }

  const updateNote = e => {
    e.persist()
    const upd = { ...note, [e.target.name]: e.target.value }
    
    if(JSON.stringify(upd) !== JSON.stringify(editNote))
    changeState(state=>({...state, saveNote: true, note: upd}))
    else changeState(state=>({...state, saveNote: false, note: upd}))
  }

  const pickColor = value => {
    const fakeEvt = { persist: _=>{}, target: {value, name: 'color' } } 
    updateNote(fakeEvt)
  }

  return note && (
    <div className="w-full sm:w-4/5 md:w-3/5 h-full flex flex-col mx-auto">
      <section className="h-1/4 mt-6 flex flex-col items-center">
        <input name="title" className="text-2xl border-0 outline-none text-center" onChange={updateNote} defaultValue={editNote.title}/>

        <div className="colorpicker">
          <div onClick={_=> pickColor('wht')} className={`${note.color === 'wht'|| !note.color ? 'active' : ''} picker wht`}></div>
          <div onClick={_=> pickColor('red')} className={`${note.color === 'red' ? 'active' : ''} picker red`}></div>
          <div onClick={_=> pickColor('blu')} className={`${note.color === 'blu' ? 'active' : ''} picker blu`}></div>
          <div onClick={_=> pickColor('yel')} className={`${note.color === 'yel' ? 'active' : ''} picker yel`}></div>
          <div onClick={_=> pickColor('gray')} className={`${note.color === 'gray' ? 'active' : ''} picker gray`}></div>
        </div>

      </section>
      <section className="h-4/5">
        <textarea onInput={auto_grow} onChange={updateNote} name="body" value={note.body} className={`w-full md:p-8 p-6 outline-none min-h-4/5 text-sm font-montserrat ${note.color || 'wht'}`}></textarea>
        <h5 className="mx-auto my-6 text-center">Make edits by simply changing the texts or color</h5>
      </section>
    </div>
  )
}

export default withRouter(SingleNote)

