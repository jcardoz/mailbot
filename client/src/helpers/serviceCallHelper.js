import axios from 'axios';
// Identify the base path based on the env variable
const BASEURL = 'https://mailbot-server.herokuapp.com';

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
