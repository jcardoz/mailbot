import axios from 'axios';
const BASEURL = 'http://localhost:7000';

const makePOSTcall = (URL, messageInformation, successHandler, errorHandler) => {
  
  axios.post(`${BASEURL}/${URL}`, messageInformation)
    .then((res) => {
      return successHandler(res);
    }, (err) => {
      return errorHandler(err);
    });
};

export {makePOSTcall} ;
