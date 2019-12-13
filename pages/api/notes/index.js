import auth0 from '@utils/Auth'
import {
  axiosCall as axios
} from '@utils'

export default async function notes(req, res) {
  try {
    let resp = await axios({
      path: 'notes/',
      req
    })
    res.json(resp)
  } catch (error) {
    res.json({
      error
    })
  }
}