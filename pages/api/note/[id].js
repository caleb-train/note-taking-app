import auth0 from '@utils/Auth'
import {
  axiosCall as axios
} from '@utils'

export default async function note(req, res) {
  const {
    id
  } = req.query
  try {
    let resp
    if (req.method == 'PATCH') {
      resp = await axios({
        method: req.method,
        path: `note/${id}`,
        payload: JSON.parse(req.body),
        req
      })
    } else {
      resp = await axios({
        method: req.method,
        path: `note/${id}`,
        req
      })
    }
    res.json(resp)
    console.log(resp)
  } catch (error) {
    console.log(error)
    res.json({
      error
    })
  }
}