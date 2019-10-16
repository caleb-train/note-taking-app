export const createNote = async (req, res, next)=>{
 const {title, body} = req.body
 if (!title) return res.status(400).json({
   message: 'title is required'
 })
 else if (!body) return res.status(400).json({
   message: 'body is required'
 })
 req.data = {title, body}
 next()
}