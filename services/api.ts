import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.15.70:3001',
  // baseURL: 'http://192.168.0.191:3001,
});

export default api;
