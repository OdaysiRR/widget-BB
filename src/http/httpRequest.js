import axios from 'axios';

export default function httpRequest(requestConfig = {}) {
  return axios(requestConfig).then(
    response => {
      return response;
    },
    responseWithError => {
      const data =
        responseWithError &&
        responseWithError.response &&
        responseWithError.response.data
          ? responseWithError.response.data
          : responseWithError &&
            responseWithError.toString &&
            responseWithError.toString();

      if(typeof data.errors != 'undefined'){
        throw `Error: ${JSON.stringify(data.errors)}`;
      }

      if(data.success === false){
        throw `Error: ${data.message}`;
      }

      throw `Error: ${data.message || data.exception}`;
    },
  );
}
