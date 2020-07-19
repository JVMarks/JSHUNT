import axios from 'axios';

const api = axios.create({
   baseURL: 'http://rocketseat-node.herokuapp.com/api'
  });

  //http://localhost:3555/api
export default api;