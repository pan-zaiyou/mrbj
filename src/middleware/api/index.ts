import axios from "axios";
import config from "@/config";
import lo from "lodash-es";

const getBaseUrl = () => {
  if (import.meta.env.API_BASE_URL) {
    return import.meta.env.API_BASE_URL;
  }

  return config.api.baseURL;
};

const instance = axios.create({
  baseURL: getBaseUrl(),
  withCredentials: true,
  headers: {
    "Content-Type": "application/json, application/x-www-form-urlencoded",
    Accept: "application/json, application/x-www-form-urlencoded"
  },
  timeout: 5000
});

// monitor middleware
if (import.meta.env.DEV) {
  instance.interceptors.request.use(
    (config) => {
      console.log("Request", config);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    (response) => {
      console.log("Response", response);
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}

// Add authorization header to every request
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("gfw_token");
  if (lo.isNull(token)) {
    config.headers = {
      ...config.headers,
      Authorization: token
    };
  }

  return config;
});

export default instance;
