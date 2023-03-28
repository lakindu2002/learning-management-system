import axios, { AxiosRequestConfig } from 'axios';
import { Auth } from 'aws-amplify';

const axiosLiveInstance = axios.create();

const setAuthHeader = async (config: AxiosRequestConfig): Promise<void> => {
  const session = await Auth.currentSession();
  if (session.isValid()) {
    config.headers.Authorization = session.getIdToken().getJwtToken();
  }
};

axiosLiveInstance.interceptors.request.use(
  async (config) => {
    // add the token only for /api routes, but not for /api/public routes.
    if (
      config.url.startsWith('/api/') &&
      !config.url.startsWith('/api/public/')
    ) {
      await setAuthHeader(config);
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default axiosLiveInstance;
