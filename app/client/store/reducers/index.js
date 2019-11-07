import noteReducer from './noteReducer'

export default function (state, action){
  return {
    note: noteReducer(state.note, action),
  }
}