import axios from 'axios';

export const baseURL = "http://192.168.15.44:3333"

const api = axios.create({
  baseURL: baseURL,
});

export default api;