import axios from "axios";
import { jwtDecode } from "jwt-decode";

const URL_ENDPOINT=process.env.NEXT_PUBLIC_API_ENDPOINT;

const refreshToken = async () => {
  try {
    const instance = axios.create({
      withCredentials: true
    });
    const res = await instance.post(`${URL_ENDPOINT}/v1/auth/refresh`);

    return res.data;
  } catch (err) {
    throw err;
  }
};

export const createAxios = (user: any, dispatch: any, stateSuccess: any) => {
  const newInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
});
  newInstance.interceptors.request.use(
    async (config) => {
      let date = new Date();
      const decodedToken:any = jwtDecode(user?.accessToken);
      if (decodedToken.exp < date.getTime() / 1000) {
        const data = await refreshToken();
        const refreshUser = {
          ...user,
          accessToken: data.accessToken,
        };
        dispatch(stateSuccess(refreshUser));
        config.headers["token"] = "Bearer " + data.accessToken;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  return newInstance;
};
