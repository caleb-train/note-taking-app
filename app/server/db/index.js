import crypto from 'crypto'
import database from '@database';

class Db{
  static add(note){
    const current_date = (new Date()).valueOf().toString();
    const random = Math.random().toString();
    
    let id = crypto.createHash('sha1').update(current_date + random).digest('hex');
    const date = new Date().toISOString().slice(0,10);
    const newNote = {...note, id, date, color: note.color || 'wht'}
    database.notes.push(newNote)
    return newNote;
  }

  static getAll(){
    return database.notes;
  }

  static getOne(id){
    return database.notes.find(note => note.id === id);
  }

  static updateNote(newNote){
    const db = database.notes.map(
      note => note.id === newNote.id ? newNote : note
    )
    database.notes = [...db]
    return newNote
  }

  static deleteNote(id){
    const db = []
    database.notes.map(
      note => {
        if(note.id !== id) db.push(note)
      }
    )
    database.notes = [...db]
  }

  static show(){
    return database
  }
}
export default Db;