import axios from 'axios'

export const axiosCall = ({
  method='GET', path = '', payload = {}, cb =_=>{}
}) => {
  const url = `/api/v1/${path}`;
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
  .then(result =>{
    const data = result && result.data;
    cb(data);
    
    return data;
  })
  .catch (e=>{
    cb(e);
    const { error } = e;
    throw error || 'Something went wrong';
  })
};

export const truncateText = (content, maxLength) => {
  if (content.length > maxLength) {
    content = content.substr(0,maxLength) + '...';
  }
  return content;
}

export const auto_grow = (e) => {
  e.target.style.height = (e.target.scrollHeight)+"px";
}

