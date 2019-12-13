import auth0 from '@utils/Auth'

export default async function logout(req, res) {
  try {
    await auth0.handleLogout(req, res, {
      clientId: process.env.CLIENT_ID,
      returnTo: process.env.APP_URL,
    })
  } catch (error) {
    console.error('as', error)
    res.status(error.status || 500).end(error.message)
  }
}