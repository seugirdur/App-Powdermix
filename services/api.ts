import axios from 'axios';

const api = axios.create({
  baseURL: 'https://arstechnica.com/gadgets/',
});

export default api;
