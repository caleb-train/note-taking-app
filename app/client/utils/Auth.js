import auth0 from 'auth0-js'

export default class Auth {
  constructor(history) {
    this.history = history
    this.auth0 = new auth0.WebAuth({
      domain: process.env.DOMAIN,
      clientID: process.env.CLIENT_ID,
      redirectUri: process.env.CALLBACK_URL,
      responseType: "token id_token",
      scope: "openid profile email",
    })
  }

  login = () => {
    this.auth0.authorize()
  }

  handleAuthentication() {

  }
}