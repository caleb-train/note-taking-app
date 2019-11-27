import Db from '../db'

export const createNote = async (req, res, next) => {
  const {
    title,
    body,
    color
  } = req.body
  if (!title) return res.status(400).json({
    error: 'title is required'
  })
  else if (!body) return res.status(400).json({
    error: 'body is required'
  })
  req.data = {
    title,
    body,
    color
  }
  next()
}

export const getNote = async (req, res, next) => {
  const {
    id
  } = req.params
  if (!Db.getOne(id)) return res.status(400).json({
    error: 'Note does not Exist'
  })

  next()
}

export const deleteNote = async (req, res, next) => {
  const {
    id
  } = req.params
  if (!Db.getOne(id)) return res.status(400).json({
    error: 'Note does not Exist'
  })

  next()
}

export const updateNote = async (req, res, next) => {
  const note = Db.getOne(req.params.id)
  if (!note) return res.status(400).json({
    error: 'Note does not Exist'
  })
  const {
    id = +note.id,
      title = note.title,
      body = note.body,
      color = note.color,
      date = note.date,
      tag = note.tag,
  } = {
    ...req.body,
    ...req.params
  }

  req.data = {
    id,
    title,
    body,
    color,
    date,
    tag
  }
  next()
}