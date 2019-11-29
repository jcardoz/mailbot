import axios from 'axios';
const BASEURL = 'http://localhost:7000'; // TODO: Make configurable based on local/prod environment

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
