import React, { useEffect, useContext } from 'react'
import { withRouter } from 'react-router-dom'
import './index.scss'
import { Context } from '../../context'

const CreateNote = ({ match })=>{
  const { changeState, note } = useContext(Context)
  
  useEffect(()=> {
    changeState(state=>({...state, note: {}, saveNote: false, makeNote: true}))
  }, [])


  const auto_grow = (e) => {
    e.target.style.height = (e.target.scrollHeight)+"px";
  }

  const updateNote = e => {
    e.persist()
    const upd = { ...note, [e.target.name]: e.target.value }
    
    changeState(state=>({...state, note: upd}))
  }

  const pickColor = value => {
    const fakeEvt = { persist: _=>{}, target: {value, name: 'color' } } 
    updateNote(fakeEvt)
  }

  return (
    <div className="w-full sm:w-4/5 md:w-3/5 flex flex-col mx-auto">
      <section className="h-1/4 mt-6 flex flex-col items-center">
        <input name="title" className="text-2xl border-0 outline-none text-center" onChange={updateNote} placeholder="Title"/>

        <div className="colorpicker">
          <div onClick={_=> pickColor('wht')} className={`active picker wht`}></div>
          <div onClick={_=> pickColor('red')} className={`picker red`}></div>
          <div onClick={_=> pickColor('blu')} className={`picker blu`}></div>
          <div onClick={_=> pickColor('yel')} className={`picker yel`}></div>
          <div onClick={_=> pickColor('gray')} className={`picker gray`}></div>
        </div>

      </section>
      <section className="h-4/5">
        <textarea onInput={auto_grow} onChange={updateNote} name="body" className={`w-full md:p-8 p-6 outline-none min-h-3/5 text-sm overflow-hidden font-montserrat ${note.color || 'wht'}`}></textarea>
      </section>
    </div>
  )
}

export default withRouter(CreateNote)

