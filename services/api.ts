import axios from 'axios';

const api = axios.create({
  baseURL: 'https://powdermixserver.fly.dev',
  // baseURL: 'http://192.168.0.191:3001,
});

export default api;
