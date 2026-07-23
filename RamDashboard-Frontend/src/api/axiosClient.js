import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://rambi.test/api',
});

export default axiosClient;