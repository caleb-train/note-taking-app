import axios from 'axios'
import auth0 from './Auth'

export const axiosCall = async ({
  method = 'GET',
  path = '',
  payload = {},
  req,
}) => {
  const {
    accessToken
  } = await auth0.getSession(req)
  const host = process.env.SERVER
  const url = `${host}/api/v1/${path}`;
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`
  };
  const axiosdata = {
    method,
    url,
    data: payload,
    headers,
    json: true,
  };

  return axios(axiosdata)
    .then(result => {
      const data = result && result.data;
      return data;
    })
    .catch(e => {
      let {
        response: {
          data: {
            error
          },
        },
        message
      } = e;
      console.log(e)
      if (error) throw error
      throw message === 'Network Error' ? 'You are offline' : 'Something went wrong'
    })
};

export const truncateText = (content, maxLength) => {
  if (content.length > maxLength) {
    content = content.substr(0, maxLength) + '...';
    return content;
  } else return content;
}

export const auto_grow = (e) => {
  e.target.style.height = (e.target.scrollHeight) + "px";
}