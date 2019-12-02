import axios from 'axios'

export const axiosCall = ({
  method = 'GET',
  path = '',
  payload = {}
}) => {
  const host = process.env.SERVER
  const url = `${host}/api/v1/${path}`;
  const headers = {
    'Content-Type': 'application/json',
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
      console.log(data)
      return data;
    })
    .catch(e => {
      let {
        error,
        message
      } = e;
      console.error(e)
      throw error || message === 'Network Error' ? 'You are offline' : 'Something went wrong'
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