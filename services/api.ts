import axios from 'axios';

export const api = axios.create({
  // testando com api local
  // baseURL: 'http://192.168.1.105:8080',
  // baseURL: 'http://192.168.175.42:8080',

  //teste com api da fly.io
  // baseURL: 'https://powdermixfly.fly.dev',

  //api da railway
  baseURL: 'https://steady-sidewalk-production.up.railway.app',

  //api da aws
  // baseURL: 'http://100.26.195.168:8080',
});
export const api2 = axios.create({
  baseURL: 'https://api.trello.com/1/cards/?key=c5c6912adfa9c89103843ce121e48fad&token=fb60825518dc1ad6a67822b5be5146b33c8a7e533d743c89c3bff495bea8c565',
});

