import Db from '../db';

export const createNote = async (req, res)=>{
  const resp = Db.add(req.data)

  return res.status(200).json({
    message: 'note added successfully',
    data: [resp]
  })
}