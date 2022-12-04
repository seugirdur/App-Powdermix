import axios from 'axios';

export const api = axios.create({
  // baseURL: 'https://powdermixserver.fly.dev',
  // baseURL: 'http://192.168.1.103:8080',
  // baseURL: 'http://192.168.175.42:8080',
  baseURL: 'https://powdermixfly.fly.dev',
});

export const api2 = axios.create({
  baseURL: 'https://api.trello.com/1/cards/?key=c5c6912adfa9c89103843ce121e48fad&token=fb60825518dc1ad6a67822b5be5146b33c8a7e533d743c89c3bff495bea8c565',
  // baseURL: 'http://192.168.0.191:3001,
});

