import auth0 from 'auth0-js'
import jwtDecode from 'jwt-decode'

export default class Auth {
  accessToken;
  idToken;
  expiresAt;

  constructor(router) {
    this.router = router
    this.auth0 = new auth0.WebAuth({
      domain: process.env.DOMAIN,
      clientID: process.env.CLIENT_ID,
      redirectUri: process.env.CALLBACK_URL,
      responseType: 'token id_token',
      scope: 'openid profile email'
    })
  }

  login = () => {
    this.auth0.authorize()
  }

  getQueryParams = () => {
    const params = {}
    window.location.href.replace(/([^(?|#)=&]+)(=([^&]*))?/g, ($0, $1, $2, $3) => {
      params[$1] = $3
    })
    return params
  }

  extractInfoFromHash = () => {
    if (process.server) return;
    const {
      id_token
    } = this.getQueryParams();
    return {
      token: id_token,
      user_details: (jwtDecode(id_token))
    }
  }

  handleAuthentication() {
    return new Promise((resolve) => {
      this.auth0.parseHash((err, authResult) => {
        var user_details = this.extractInfoFromHash()
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult, user_details);
          resolve(true);
        } else if (err) {
          console.log(err);
          alert(`Error: ${err.error}. Check the console for further details.`);
          resolve(false);
          window.location.replace('/');
        }

      });
    })

  }

  getAccessToken() {
    return this.accessToken;
  }

  getIdToken() {
    return this.idToken;
  }

  setSession(authResult, user_details) {
    // Set isLoggedIn flag in localStorage
    let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();

    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('user_details', JSON.stringify(user_details.user_details));
    localStorage.setItem('expiresAt', JSON.stringify(expiresAt));

    // Set the time that the access token will expire at
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;

    // navigate to the home route
    //history.replace('/home');
  }

  renewSession() {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        this.logout();
        console.log(err);
        alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
      }
    });
  }

  logout = () => {
    // Remove tokens and expiry time
    this.accessToken = null;
    this.idToken = null;
    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user_details');
    localStorage.removeItem('expiresAt');

    // navigate to the home route
    /* window.location.replace('/'); */
    this.auth0.logout({
      clientID: process.env.CLIENT_ID,
      returnTo: process.env.APP_URL,
    })
  }

  extractUser() {
    // Check whether the current time is past the
    // access token's expiry time
    const user = localStorage.getItem('user_details');
    try {
      const userObj = JSON.parse(user);
      return userObj;
    } catch (e) {
      return null;
    }
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expiresAt'))
    const time = new Date().getTime()
    console.log(expiresAt, time < expiresAt)
    return time < expiresAt;
  }

}