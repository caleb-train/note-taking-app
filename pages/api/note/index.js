import auth0 from '@utils/Auth'
import {
  axiosCall as axios
} from '@utils'

export default async function note(req, res) {
  try {
    let resp = await axios({
      method: req.method,
      path: `note`,
      payload: JSON.parse(req.body),
      req
    })
    res.json(resp)
  } catch (error) {
    res.json({
      error
    })
  }
}