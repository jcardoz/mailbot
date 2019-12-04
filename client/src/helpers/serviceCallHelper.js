import axios from 'axios';
// Identify the base path based on the env variable
const BASEURL = process.env.REACT_APP_Client_API_BasePath || 'http://localhost:7000';

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
