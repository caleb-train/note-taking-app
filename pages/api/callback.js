import auth0 from '@utils/Auth'

export default async function callback(req, res) {
  try {
    await auth0.handleCallback(req, res, {
      redirectTo: '/notes'
    })
  } catch (error) {
    console.error(error.message)
    res.status(error.status || 500).end(error.message)
  }
}