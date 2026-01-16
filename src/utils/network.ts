import axios from 'axios';

import session from '@/utils/session';

const network = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

network.interceptors.request.use(
  (config) => {
    const token = session.getSession();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

network.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      session.clearSession();
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

export default network;
