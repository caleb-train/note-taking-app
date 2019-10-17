import Db from '../db';

export const createNote = async (req, res)=>{
  const data = Db.add(req.data)

  return res.status(201).json({
    message: 'note added successfully',
    data: [data]
  })
}

export const getNotes = async (req, res)=>{
  const data = Db.getAll()

  return res.status(200).json({
    data
  })
}

export const getNote = async (req, res)=>{
  const data = Db.getOne(req.params.id)

  return res.status(200).json({
    data: [data]
  })
}

export const updateNote = async (req, res)=>{
  const data = Db.updateNote(req.data)

  return res.status(200).json({
    message: 'note updated successfully',
    data: [data]
  })
}

export const deleteNote = async (req, res)=>{
  Db.deleteNote(req.params.id)

  return res.status(200).json({
    message: 'note deleted successfully'
  })
}