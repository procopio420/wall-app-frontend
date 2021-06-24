import axios from 'axios';

const api = axios.create({
 baseURL: 'http://localhost:8000',
});

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

api.interceptors.response.use((response) => response, async (error) => {
  const originalRequest = error && error.config;
  const refreshToken = localStorage.getItem('refreshToken');

  const is401ResponseStatus = error.response && error.response.status === 401;
  const isFirstRequestTry = error.config && !error.config.__isRetryRequest;

  if (is401ResponseStatus && isFirstRequestTry && refreshToken) {
    originalRequest._retry = true;

    const responseRefreshToken = await api.post('/auth/refresh/', { refresh: refreshToken });
    const { access, refresh } = responseRefreshToken && responseRefreshToken.data;

    originalRequest.headers.Authorization = `Bearer ${access}`;
    localStorage.setItem('accessToken', access);
    localStorage.setItem('refreshToken', refresh);
    
    return axios(originalRequest);
  }
  
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
})

export default api;
