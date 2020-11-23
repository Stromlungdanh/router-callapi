import axios from "axios";
import { Config } from "@config";

const ApiCaller = axios.create({
  baseURL: "https://some-domain.com/api/",
  timeout: 3000,
  headers: {
    "content-type": "application/json",
    referer: Config.REFERER,
  },
});

ApiCaller.interceptors.request.use(function (config) {
  // handel token
  return config;
});

// Add a response interceptor
ApiCaller.interceptors.response.use(
  function (response) {
    return response.data || response;
  },

  function (error) {
    return Promise.reject(error);
  }
);

export default ApiCaller;
