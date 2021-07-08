import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.100.62:3333/api',
});
// json-server ./src/services/server.json --host 192.168.100.62 --port 3333
export default api;
