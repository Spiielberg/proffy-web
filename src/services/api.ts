import axios from 'axios';

const api = axios.create({
  baseURL: 'https://proffy-server-spielberg.herokuapp.com/',
});

export default api;
