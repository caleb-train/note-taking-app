import database from './database';

class Db{
  static add(note){
    const id = database.notes.length
    const date = new Date().toISOString().slice(0,10);
    const newNote = {...note, id, date}
    database.notes.push(newNote)
    return newNote;
  }

  static show(){
    return database
  }
}
export default Db;