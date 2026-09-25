import { Config } from "@/config/env";

import { api } from "./axios";

api.interceptors.request.use(
  (config) => {
    config.params = {
      ...config.params,
      key: Config.API_KEY
    };

    return config;
  },
  (error) => Promise.reject(error)
);
