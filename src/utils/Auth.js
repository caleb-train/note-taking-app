import {
  initAuth0
} from '@auth0/nextjs-auth0'

export default initAuth0({
  domain: process.env.DOMAIN,
  clientId: process.env.CLIENT_ID,
  redirectUri: process.env.CALLBACK_URL,
  scope: 'openid profile email',
  responseType: 'token id_token',
  clientSecret: process.env.CLIENT_SECRET,
  audience: process.env.AUTH0_AUDIENCE,
  postLogoutRedirectUri: process.env.APP_URL,
  session: {
    cookieSecret: process.env.SESSION_COOKIE_SECRET,
    cookieLifetime: 60 * 60 * 8,
    storeAccessToken: true
  },
  oidcClient: {
    // Optionally configure the clock tolerance in milliseconds, if the time on your server is running behind.
    clockTolerance: 10000
  }
})