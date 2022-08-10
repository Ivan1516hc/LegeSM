import axios from "axios";



const baseurl='http://localhost:3000/' 

axios.defaults.baseURL=baseurl

// interceptores de solicitudes
axios.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem('token');
    // if (token) {
    //     // config.headers.Authorization = token;
    //     config.headers["Authorization"] = 'Bearer ' + token; 
    //     // config.headers["x-access-token"] = token; // for Node.js Express back-end
    //   }
      console.log("Axios config")

    return config;
  },
  (error) => {
      console.log("error")
    // Do something with request error
    return Promise.reject(error);
  }
);

// interceptores de respuesta
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, 
  function (error)  {
    // vemos si el error es un 401
    if(error.response.status === 401){
        // no auntorisado
      console.log("Unauthorized Request");
    }
    return Promise.reject(error);
  });

  const instance = axios

  

export default instance;
