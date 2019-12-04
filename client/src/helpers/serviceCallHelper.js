import axios from 'axios';
const BASEURL = process.env.Client_API_BasePath || 'http://localhost:7000';

const makePOSTcall = (APIEndpoint, messageInformation, successHandler, errorHandler) => {

  axios.post(`${BASEURL}/${APIEndpoint}`, messageInformation)
    .then((res) => {
      return successHandler(res);
    }, (err) => {
      return errorHandler(err);
    });
};

export {
  makePOSTcall
};
