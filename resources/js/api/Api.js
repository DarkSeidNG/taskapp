import axios from 'axios';

/***
 * API base class that will be used to make all api calls
 * @type {AxiosInstance}
 */
const API = axios.create({
  baseURL: '/api/v1',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

export default API;
